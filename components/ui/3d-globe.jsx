"use client";

import React, { useRef, useMemo, useState, useCallback, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Html, useTexture } from "@react-three/drei";
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

function Marker({
  marker,
  radius,
  onClick,
  onHover,
}) {
  const [hovered, setHovered] = useState(false);
  const groupRef = useRef(null);
  const surfaceMeshRef = useRef(null);
  const htmlDivRef = useRef(null);
  const { camera } = useThree();

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

    const worldPos = new THREE.Vector3();
    surfaceMeshRef.current.getWorldPosition(worldPos);

    const markerDir = worldPos.clone().normalize();
    const camDir = camera.position.clone().normalize();
    const dot = markerDir.dot(camDir);

    const isFacing = dot > 0.05;

    if (groupRef.current.visible !== isFacing) {
      groupRef.current.visible = isFacing;
    }
    if (htmlDivRef.current) {
      htmlDivRef.current.style.display = isFacing ? "block" : "none";
    }
  });

  const handlePointerEnter = useCallback(() => {
    setHovered(true);
    onHover?.(marker);
  }, [marker, onHover]);

  const handlePointerLeave = useCallback(() => {
    setHovered(false);
    onHover?.(null);
  }, [onHover]);

  const handleClick = useCallback(
    (e) => {
      e?.stopPropagation?.();
      onClick?.(marker);
    },
    [marker, onClick]
  );

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

      {/* Circular avatar placed exactly at topPosition */}
      <group position={topPosition}>
        <Html center style={{ pointerEvents: "auto" }}>
          <div
            ref={htmlDivRef}
            onClick={handleClick}
            onMouseEnter={handlePointerEnter}
            onMouseLeave={handlePointerLeave}
            className={cn(
              "relative cursor-pointer rounded-full transition-transform duration-200 select-none",
              hovered ? "scale-125 z-50 ring-2 ring-blue-500 shadow-xl" : "hover:scale-110 shadow-md"
            )}
            style={{
              width: "32px",
              height: "32px",
              display: "block",
            }}
          >
            <img
              src={marker.src}
              alt={marker.label || "Marker"}
              className="h-full w-full rounded-full object-cover border-2 border-white bg-zinc-900 shadow-sm"
              draggable={false}
            />
            {/* Tooltip on hover */}
            {hovered && marker.label && (
              <div className="absolute -top-7 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-md bg-zinc-900 text-white text-[10px] font-semibold whitespace-nowrap shadow-md pointer-events-none z-50">
                {marker.label}
              </div>
            )}
          </div>
        </Html>
      </group>
    </group>
  );
}

function RotatingGlobe({
  config,
  markers,
  onMarkerClick,
  onMarkerHover,
}) {
  const groupRef = useRef(null);

  // Load Earth textures
  const [earthTexture, bumpTexture] = useTexture([
    config.textureUrl,
    config.bumpMapUrl,
  ]);

  // Configure textures
  useMemo(() => {
    if (earthTexture) {
      earthTexture.colorSpace = THREE.SRGBColorSpace;
      earthTexture.anisotropy = 16;
    }
    if (bumpTexture) {
      bumpTexture.anisotropy = 8;
    }
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
          radius={config.radius}
          onClick={onMarkerClick}
          onHover={onMarkerHover}
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
  onMarkerClick,
  onMarkerHover,
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
        onMarkerClick={onMarkerClick}
        onMarkerHover={onMarkerHover}
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
            onMarkerClick={onMarkerClick}
            onMarkerHover={onMarkerHover}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default Globe3D;
