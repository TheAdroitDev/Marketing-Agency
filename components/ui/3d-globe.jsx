"use client";

import React, { useRef, useMemo, useState, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { cn } from "@/lib/utils";

// ============================================================================
// Constants - Earth Texture URLs (NASA Blue Marble)
// ============================================================================

const DEFAULT_EARTH_TEXTURE =
  "https://unpkg.com/three-globe@2.31.0/example/img/earth-blue-marble.jpg";
const DEFAULT_BUMP_TEXTURE =
  "https://unpkg.com/three-globe@2.31.0/example/img/earth-topology.png";

// ============================================================================
// Utility Functions
// ============================================================================

/**
 * Convert latitude/longitude to 3D cartesian coordinates
 */
function latLngToVector3(lat, lng, radius) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);

  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);

  return new THREE.Vector3(x, y, z);
}

// Pin line + surface anchor in 3D. The avatar itself lives in a plain DOM
// overlay (see MarkerOverlay) that this component positions every frame.
// We deliberately avoid drei's <Html>: it mounts a separate React root per
// marker and unmounts it synchronously, which triggers React's
// "Attempted to synchronously unmount a root while React was already rendering" warning.
const _projected = new THREE.Vector3();
const _worldPos = new THREE.Vector3();

function Marker({
  marker,
  index,
  radius,
  hovered,
  avatarsRef,
}) {
  const groupRef = useRef(null);
  const surfaceMeshRef = useRef(null);
  const { camera, size } = useThree();

  // Surface position (where pin touches the globe)
  const surfacePosition = useMemo(() => {
    return latLngToVector3(marker.lat, marker.lng, radius * 1.001);
  }, [marker.lat, marker.lng, radius]);

  // Top of the pin (where the avatar sits)
  const topPosition = useMemo(() => {
    return latLngToVector3(marker.lat, marker.lng, radius * 1.22);
  }, [marker.lat, marker.lng, radius]);

  const lineHeight = topPosition.distanceTo(surfacePosition);

  // Line orientation
  const { lineCenter, lineQuaternion } = useMemo(() => {
    const center = surfacePosition.clone().lerp(topPosition, 0.5);
    const direction = topPosition.clone().sub(surfacePosition).normalize();
    const quaternion = new THREE.Quaternion();
    quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction);
    return { lineCenter: center, lineQuaternion: quaternion };
  }, [surfacePosition, topPosition]);

  // Check if marker is facing camera using the surface mesh's real 3D coordinates
  useFrame(() => {
    if (!surfaceMeshRef.current || !groupRef.current) return;

    surfaceMeshRef.current.getWorldPosition(_worldPos);
    const dot = _worldPos.normalize().dot(_projected.copy(camera.position).normalize());
    const isFacing = dot > 0.05;

    if (groupRef.current.visible !== isFacing) {
      groupRef.current.visible = isFacing;
    }

    const el = avatarsRef.current[index];
    if (!el) return;
    if (!isFacing) {
      if (el.style.display !== "none") el.style.display = "none";
      return;
    }

    // Project the avatar anchor to canvas pixels.
    groupRef.current.localToWorld(_projected.copy(topPosition)).project(camera);
    const x = (_projected.x * 0.5 + 0.5) * size.width;
    const y = (-_projected.y * 0.5 + 0.5) * size.height;
    el.style.display = "block";
    el.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
  });

  return (
    <group ref={groupRef} visible={true}>
      {/* Pin line from surface to avatar */}
      <mesh position={lineCenter} quaternion={lineQuaternion}>
        <cylinderGeometry args={[0.004, 0.004, lineHeight, 8]} />
        <meshBasicMaterial
          color={hovered ? "#3b82f6" : "#ffffff"}
          transparent
          opacity={0.9}
        />
      </mesh>

      {/* Pin point anchor at the globe surface (surfaceMeshRef gives true 3D position) */}
      <mesh ref={surfaceMeshRef} position={surfacePosition}>
        <sphereGeometry args={[0.022, 16, 16]} />
        <meshBasicMaterial color="#ef4444" />
      </mesh>
    </group>
  );
}

// Avatars rendered in the normal React tree, on top of the canvas.
function MarkerOverlay({ markers, hoveredIndex, setHoveredIndex, avatarsRef, onMarkerClick, onMarkerHover }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {markers.map((marker, index) => {
        const hovered = hoveredIndex === index;
        return (
          <div
            key={`overlay-${index}-${marker.lat}-${marker.lng}`}
            ref={(el) => {
              avatarsRef.current[index] = el;
            }}
            className={cn("absolute left-0 top-0 pointer-events-auto will-change-transform", hovered ? "z-50" : "z-10")}
            style={{ display: "none" }}
            onClick={(e) => {
              e.stopPropagation();
              onMarkerClick?.(marker);
            }}
            onMouseEnter={() => {
              setHoveredIndex(index);
              onMarkerHover?.(marker);
            }}
            onMouseLeave={() => {
              setHoveredIndex(null);
              onMarkerHover?.(null);
            }}
          >
            <div
              className={cn(
                "relative cursor-pointer rounded-full transition-transform duration-200 select-none",
                hovered ? "scale-125 ring-2 ring-blue-500 shadow-xl" : "hover:scale-110 shadow-md"
              )}
              style={{ width: "32px", height: "32px" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={marker.src}
                alt={marker.label || "Marker"}
                className="h-full w-full rounded-full object-cover border-2 border-white bg-zinc-900 shadow-sm"
                draggable={false}
              />
              {hovered && marker.label && (
                <div className="absolute -top-7 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-md bg-zinc-900 text-white text-[10px] font-semibold whitespace-nowrap shadow-md pointer-events-none">
                  {marker.label}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function configureTextures(earth, bump) {
  if (earth) {
    earth.colorSpace = THREE.SRGBColorSpace;
    earth.anisotropy = 16;
    earth.needsUpdate = true;
  }
  if (bump) {
    bump.anisotropy = 8;
    bump.needsUpdate = true;
  }
}

function RotatingGlobe({
  config,
  markers,
  hoveredIndex,
  avatarsRef,
}) {
  const groupRef = useRef(null);

  // Load Earth textures
  const [earthTexture, bumpTexture] = useTexture([
    config.textureUrl,
    config.bumpMapUrl,
  ]);

  // Configure textures once loaded (three.js objects are mutable by design).
  React.useLayoutEffect(() => {
    configureTextures(earthTexture, bumpTexture);
  }, [earthTexture, bumpTexture]);

  // Create geometries
  const geometry = useMemo(() => {
    return new THREE.SphereGeometry(config.radius, 64, 64);
  }, [config.radius]);

  const wireframeGeometry = useMemo(() => {
    return new THREE.SphereGeometry(config.radius * 1.002, 32, 16);
  }, [config.radius]);

  return (
    <group ref={groupRef}>
      {/* Main globe mesh with Earth texture */}
      <mesh geometry={geometry}>
        <meshStandardMaterial
          map={earthTexture}
          bumpMap={bumpTexture}
          bumpScale={config.bumpScale * 0.05}
          roughness={0.7}
          metalness={0.0}
        />
      </mesh>

      {/* Wireframe overlay */}
      {config.showWireframe && (
        <mesh geometry={wireframeGeometry}>
          <meshBasicMaterial
            color={config.wireframeColor}
            wireframe
            transparent
            opacity={0.08}
          />
        </mesh>
      )}

      {/* Markers attached to globe */}
      {markers.map((marker, index) => (
        <Marker
          key={`marker-${index}-${marker.lat}-${marker.lng}`}
          marker={marker}
          index={index}
          radius={config.radius}
          hovered={hoveredIndex === index}
          avatarsRef={avatarsRef}
        />
      ))}
    </group>
  );
}

function Atmosphere({
  radius,
  color,
  intensity,
  blur,
}) {
  const fresnelPower = Math.max(0.5, 5 - blur);

  const atmosphereMaterial = useMemo(() => {
    return new THREE.ShaderMaterial({
      uniforms: {
        atmosphereColor: { value: new THREE.Color(color) },
        intensity: { value: intensity },
        fresnelPower: { value: fresnelPower },
      },
      vertexShader: `
        varying vec3 vNormal;
        varying vec3 vPosition;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          vPosition = (modelViewMatrix * vec4(position, 1.0)).xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 atmosphereColor;
        uniform float intensity;
        uniform float fresnelPower;
        varying vec3 vNormal;
        varying vec3 vPosition;
        void main() {
          float fresnel = pow(1.0 - abs(dot(vNormal, normalize(-vPosition))), fresnelPower);
          gl_FragColor = vec4(atmosphereColor, fresnel * intensity);
        }
      `,
      side: THREE.BackSide,
      transparent: true,
      depthWrite: false,
    });
  }, [color, intensity, fresnelPower]);

  return (
    <mesh scale={[1.04, 1.04, 1.04]}>
      <sphereGeometry args={[radius, 64, 32]} />
      <primitive object={atmosphereMaterial} attach="material" />
    </mesh>
  );
}

function Scene({
  markers,
  config,
  hoveredIndex,
  avatarsRef,
}) {
  const { camera } = useThree();

  // Set initial camera position angled towards India / Asia so markers are visible immediately
  React.useEffect(() => {
    camera.position.set(config.radius * 1.5, config.radius * 1.0, -config.radius * 3.1);
    camera.lookAt(0, 0, 0);
  }, [camera, config.radius]);

  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={config.ambientIntensity} />
      <directionalLight
        position={[config.radius * 5, config.radius * 2, config.radius * 5]}
        intensity={config.pointLightIntensity}
        color="#ffffff"
      />
      <directionalLight
        position={[-config.radius * 3, config.radius, -config.radius * 2]}
        intensity={config.pointLightIntensity * 0.3}
        color="#88ccff"
      />

      {/* Rotating Globe with Markers */}
      <RotatingGlobe
        config={config}
        markers={markers}
        hoveredIndex={hoveredIndex}
        avatarsRef={avatarsRef}
      />

      {/* Atmosphere (only when explicitly enabled) */}
      {config.showAtmosphere && (
        <Atmosphere
          radius={config.radius}
          color={config.atmosphereColor}
          intensity={config.atmosphereIntensity}
          blur={config.atmosphereBlur}
        />
      )}

      {/* Controls: Zoom and pan disabled to never hijack page scrolling */}
      <OrbitControls
        makeDefault
        enablePan={false}
        enableZoom={false}
        minDistance={config.minDistance}
        maxDistance={config.maxDistance}
        rotateSpeed={0.4}
        autoRotate={config.autoRotateSpeed > 0}
        autoRotateSpeed={config.autoRotateSpeed}
        enableDamping
        dampingFactor={0.1}
      />
    </>
  );
}

function LoadingFallback() {
  return null;
}

const defaultConfig = {
  radius: 2,
  globeColor: "#1a1a2e",
  textureUrl: DEFAULT_EARTH_TEXTURE,
  bumpMapUrl: DEFAULT_BUMP_TEXTURE,
  showAtmosphere: false,
  atmosphereColor: "#4da6ff",
  atmosphereIntensity: 0.5,
  atmosphereBlur: 2,
  bumpScale: 1,
  autoRotateSpeed: 0.3,
  enableZoom: false,
  enablePan: false,
  minDistance: 5,
  maxDistance: 15,
  initialRotation: { x: 0, y: 0 },
  markerSize: 0.06,
  showWireframe: false,
  wireframeColor: "#4a9eff",
  ambientIntensity: 0.6,
  pointLightIntensity: 1.5,
  backgroundColor: null,
};

export function Globe3D({
  markers = [],
  config = {},
  className,
  onMarkerClick,
  onMarkerHover,
}) {
  const mergedConfig = useMemo(
    () => ({ ...defaultConfig, ...config }),
    [config]
  );
  const avatarsRef = useRef([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className={cn("relative h-[500px] w-full", className)}>
      <Canvas
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        dpr={[1, 2]}
        camera={{
          fov: 45,
          near: 0.1,
          far: 1000,
          position: [config.radius ? config.radius * 1.5 : 3, config.radius ? config.radius : 2, config.radius ? -config.radius * 3.1 : -6.2],
        }}
        style={{
          background: mergedConfig.backgroundColor || "transparent",
          touchAction: "pan-y",
        }}
      >
        <Suspense fallback={<LoadingFallback />}>
          <Scene
            markers={markers}
            config={mergedConfig}
            hoveredIndex={hoveredIndex}
            avatarsRef={avatarsRef}
          />
        </Suspense>
      </Canvas>
      <MarkerOverlay
        markers={markers}
        hoveredIndex={hoveredIndex}
        setHoveredIndex={setHoveredIndex}
        avatarsRef={avatarsRef}
        onMarkerClick={onMarkerClick}
        onMarkerHover={onMarkerHover}
      />
    </div>
  );
}

export default Globe3D;
