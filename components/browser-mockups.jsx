"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShoppingBag, Trash2, ArrowRight, TrendingUp, Users, DollarSign,
  Monitor, Layout, Shield, Globe, Award, Sparkles, Folder, CheckCircle,
  Search, Plus, Eye, BarChart, Settings, Mail, Check, AlertCircle, ArrowUpRight
} from "lucide-react";

// ── 1. ONLINE STORES MOCKUP ────────────────────────────────
export function OnlineStoreMockup() {
  const [cartCount, setCartCount] = useState(0);
  const [btnState, setBtnState] = useState("idle"); // idle, adding, added
  const [selectedColor, setSelectedColor] = useState("indigo");

  const colors = [
    { id: "indigo", bg: "bg-indigo-600", name: "Indigo Blue" },
    { id: "pink", bg: "bg-pink-500", name: "Blossom Pink" },
    { id: "emerald", bg: "bg-emerald-500", name: "Emerald Green" }
  ];

  const handleAddToCart = () => {
    if (btnState !== "idle") return;
    setBtnState("adding");
    setTimeout(() => {
      setBtnState("added");
      setCartCount(prev => prev + 1);
      setTimeout(() => {
        setBtnState("idle");
      }, 1500);
    }, 800);
  };

  return (
    <div className="w-full h-full bg-slate-50 dark:bg-zinc-950 p-4 sm:p-6 flex flex-col justify-between text-slate-800 dark:text-zinc-200 select-none">
      {/* Header bar */}
      <div className="flex justify-between items-center pb-3 border-b border-slate-200 dark:border-zinc-800">
        <span className="text-xs font-black tracking-widest text-indigo-600 dark:text-indigo-400 flex items-center gap-1">
          <ShoppingBag className="w-3.5 h-3.5" /> AURA.FIT
        </span>
        <div className="relative">
          <div className="p-1.5 rounded-full hover:bg-slate-200 dark:hover:bg-zinc-800 cursor-pointer transition-colors">
            <ShoppingBag className="w-4 h-4 text-slate-600 dark:text-zinc-400" />
          </div>
          <AnimatePresence>
            {cartCount > 0 && (
              <motion.span
                key={cartCount}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                className="absolute -top-1 -right-1 bg-indigo-600 text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-sm"
              >
                {cartCount}
              </motion.span>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Main product display */}
      <div className="flex-1 flex flex-col md:flex-row gap-4 items-center justify-center py-4">
        {/* Product image container */}
        <div className="relative w-32 h-32 md:w-36 md:h-36 bg-gradient-to-tr from-indigo-100 to-white dark:from-zinc-900 dark:to-zinc-800 rounded-2xl flex items-center justify-center overflow-hidden border border-slate-200/50 dark:border-zinc-800/50 shadow-inner">
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="w-24 h-24 flex items-center justify-center"
          >
            {/* Visual representation of a headphone/product */}
            <div className={`w-16 h-16 rounded-full border-4 ${
              selectedColor === "indigo" ? "border-indigo-600" : selectedColor === "pink" ? "border-pink-500" : "border-emerald-500"
            } transition-colors duration-300 relative flex items-center justify-center shadow-md`}>
              <div className="w-8 h-8 rounded-full bg-slate-300 dark:bg-zinc-700" />
              <div className="absolute -top-1 w-20 h-4 bg-slate-600 dark:bg-zinc-400 rounded-full" />
            </div>
          </motion.div>
          <span className="absolute top-2 left-2 text-[8px] font-bold bg-indigo-100 text-indigo-700 px-1.5 py-0.5 rounded-full dark:bg-indigo-950 dark:text-indigo-300">
            BESTSELLER
          </span>
        </div>

        {/* Product info */}
        <div className="flex-1 space-y-2 text-center md:text-left">
          <div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white">AeroSound Max</h4>
            <p className="text-[10px] text-slate-500 dark:text-zinc-500">Wireless Noise-Cancelling Headphones</p>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-2">
            <span className="text-xs font-extrabold text-slate-900 dark:text-white">$199.00</span>
            <span className="text-[9px] text-slate-400 dark:text-zinc-600 line-through">$249.00</span>
          </div>

          {/* Color selector */}
          <div className="flex items-center justify-center md:justify-start gap-1.5">
            {colors.map(c => (
              <button
                key={c.id}
                onClick={() => setSelectedColor(c.id)}
                className={`w-4 h-4 rounded-full ${c.bg} border-2 ${
                  selectedColor === c.id ? "border-slate-800 dark:border-white scale-110" : "border-transparent"
                } transition-all cursor-pointer`}
                title={c.name}
              />
            ))}
          </div>

          {/* Add button */}
          <button
            onClick={handleAddToCart}
            className={`w-full md:w-auto px-4 py-1.5 rounded-lg text-xs font-bold transition-all shadow-sm flex items-center justify-center gap-1.5 cursor-pointer ${
              btnState === "added"
                ? "bg-emerald-600 hover:bg-emerald-700 text-white"
                : btnState === "adding"
                ? "bg-slate-300 dark:bg-zinc-800 text-slate-500 cursor-not-allowed"
                : "bg-indigo-600 hover:bg-indigo-700 text-white"
            }`}
          >
            {btnState === "idle" && (
              <>
                <ShoppingBag className="w-3.5 h-3.5" /> Add to Cart
              </>
            )}
            {btnState === "adding" && "Adding..."}
            {btnState === "added" && (
              <>
                <Check className="w-3.5 h-3.5" /> Added!
              </>
            )}
          </button>
        </div>
      </div>

      {/* Trust factors footer */}
      <div className="flex justify-around items-center pt-2.5 border-t border-slate-200 dark:border-zinc-800 text-[9px] text-slate-400 dark:text-zinc-600">
        <span>✓ Free Shipping</span>
        <span>✓ 2-Year Warranty</span>
        <span>✓ Secure Checkout</span>
      </div>
    </div>
  );
}

// ── 2. SAAS PLATFORMS MOCKUP ───────────────────────────────
export function SaaSPlatformMockup() {
  const [dataPoints, setDataPoints] = useState([40, 50, 45, 60, 55, 75]);
  const [loading, setLoading] = useState(false);

  // Generate random data on click to simulate real analytics
  const refreshData = () => {
    if (loading) return;
    setLoading(true);
    setTimeout(() => {
      setDataPoints(Array.from({ length: 6 }, () => Math.floor(Math.random() * 45) + 35));
      setLoading(false);
    }, 400);
  };

  return (
    <div className="w-full h-full bg-slate-900 text-slate-200 p-4 sm:p-5 flex flex-col justify-between select-none font-sans">
      {/* Header info */}
      <div className="flex justify-between items-center border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20">
            <TrendingUp className="w-3.5 h-3.5 text-indigo-400" />
          </div>
          <div>
            <span className="text-xs font-bold text-white block leading-tight">Quantix Dashboard</span>
            <span className="text-[8px] text-slate-500 block">v2.4.0 • Live metrics</span>
          </div>
        </div>
        <button
          onClick={refreshData}
          className="text-[9px] bg-slate-800 hover:bg-slate-700 text-white font-bold px-2 py-1 rounded-md transition-all cursor-pointer flex items-center gap-1 border border-slate-700"
        >
          {loading ? "Syncing..." : "Sync data"}
        </button>
      </div>

      {/* Stats Cards Row */}
      <div className="grid grid-cols-3 gap-2 py-3">
        <div className="bg-slate-800/50 border border-slate-800 p-2 rounded-lg text-center">
          <span className="text-[8px] text-slate-500 block uppercase tracking-wider">MRR</span>
          <span className="text-xs font-black text-white">$14.2K</span>
          <span className="text-[8px] text-emerald-400 font-bold block mt-0.5">+14.2%</span>
        </div>
        <div className="bg-slate-800/50 border border-slate-800 p-2 rounded-lg text-center">
          <span className="text-[8px] text-slate-500 block uppercase tracking-wider">Users</span>
          <span className="text-xs font-black text-white">4,820</span>
          <span className="text-[8px] text-emerald-400 font-bold block mt-0.5">+8.6%</span>
        </div>
        <div className="bg-slate-800/50 border border-slate-800 p-2 rounded-lg text-center">
          <span className="text-[8px] text-slate-500 block uppercase tracking-wider">Chr. Rate</span>
          <span className="text-xs font-black text-white">1.8%</span>
          <span className="text-[8px] text-rose-400 font-bold block mt-0.5">-2.1%</span>
        </div>
      </div>

      {/* Animated Charts / Visual Panel */}
      <div className="flex-1 flex flex-col justify-end bg-slate-950/40 rounded-xl border border-slate-800/40 p-3 h-24">
        <div className="flex items-end justify-between h-full gap-2 px-1">
          {dataPoints.map((value, idx) => (
            <div key={idx} className="flex-1 flex flex-col items-center gap-1 h-full justify-end">
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: `${value}%` }}
                className="w-full rounded-t-sm bg-gradient-to-t from-indigo-600 to-indigo-400 shadow-[0_0_10px_rgba(99,102,241,0.2)]"
                transition={{ type: "spring", stiffness: 80, damping: 15 }}
              />
              <span className="text-[7px] text-slate-600 uppercase font-mono">Q{idx + 1}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── 3. BUSINESS WEBSITES MOCKUP ────────────────────────────
export function BusinessWebsiteMockup() {
  return (
    <div className="w-full h-full bg-stone-50 dark:bg-neutral-900 p-4 sm:p-5 flex flex-col justify-between text-neutral-800 dark:text-neutral-200 select-none">
      {/* Top Navbar */}
      <div className="flex justify-between items-center pb-2 border-b border-stone-200 dark:border-neutral-800 text-[10px]">
        <div className="font-extrabold tracking-widest text-stone-900 dark:text-white flex items-center gap-1">
          <Award className="w-3.5 h-3.5 text-amber-500" /> APEX CONSULT
        </div>
        <div className="flex gap-3 text-stone-500 dark:text-neutral-400 font-medium">
          <span>Expertise</span>
          <span>Cases</span>
          <span>Advisory</span>
        </div>
      </div>

      {/* Hero Header */}
      <div className="flex-1 flex flex-col justify-center items-center text-center space-y-3 px-2 py-4">
        <span className="inline-block text-[8px] font-bold text-amber-600 bg-amber-500/10 px-2 py-0.5 rounded-full uppercase tracking-wider dark:text-amber-400">
          Strategic Venture Partners
        </span>
        <h3 className="text-sm sm:text-base font-extrabold text-stone-900 dark:text-white leading-tight max-w-[280px]">
          We scale enterprise operations globally.
        </h3>
        <p className="text-[9px] text-stone-500 dark:text-neutral-400 max-w-[240px] leading-relaxed">
          Unlock business efficiency, manage risk profiles, and streamline portfolio growth.
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-2">
          <button className="bg-stone-900 text-stone-50 hover:bg-stone-800 dark:bg-white dark:text-stone-950 px-3 py-1 rounded-md text-[9px] font-bold transition-all cursor-pointer">
            Explore Services
          </button>
          <button className="border border-stone-300 dark:border-neutral-700 px-3 py-1 rounded-md text-[9px] font-medium transition-all hover:bg-stone-100 dark:hover:bg-neutral-800 cursor-pointer">
            Book Briefing
          </button>
        </div>
      </div>

      {/* Bottom Partners logo strip */}
      <div className="text-center pt-2.5 border-t border-stone-200 dark:border-neutral-800">
        <span className="text-[8px] text-stone-400 uppercase tracking-widest block mb-1">Trusted by industry leaders</span>
        <div className="flex justify-center gap-4 text-[8px] font-extrabold text-stone-400/80 dark:text-neutral-600">
          <span>VALO</span>
          <span>NEXUS</span>
          <span>SOMA</span>
        </div>
      </div>
    </div>
  );
}

// ── 4. PORTFOLIO SITES MOCKUP ──────────────────────────────
export function PortfolioSiteMockup() {
  const [filter, setFilter] = useState("all");
  const projects = [
    { id: 1, name: "Krypton Identity", cat: "branding", img: "bg-indigo-500/20" },
    { id: 2, name: "Zenith App UI", cat: "uiux", img: "bg-emerald-500/20" },
    { id: 3, name: "Brutalism Architecture", cat: "photo", img: "bg-pink-500/20" },
    { id: 4, name: "Neomorphic Gear", cat: "branding", img: "bg-amber-500/20" }
  ];

  const filteredProjects = projects.filter(p => filter === "all" || p.cat === filter);

  return (
    <div className="w-full h-full bg-neutral-950 text-white p-4 sm:p-5 flex flex-col justify-between select-none">
      {/* Header */}
      <div className="flex justify-between items-center pb-2.5 border-b border-neutral-900">
        <span className="text-xs font-black tracking-tighter hover:text-indigo-400 cursor-pointer">
          STUDIO.KO
        </span>
        <span className="text-[9px] text-neutral-400 font-mono">Available for hire</span>
      </div>

      {/* Gallery filters */}
      <div className="flex justify-start gap-2 py-2 text-[9px]">
        {["all", "branding", "uiux", "photo"].map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-2 py-0.5 rounded-md font-mono uppercase tracking-wider transition-all cursor-pointer ${
              filter === cat
                ? "bg-white text-black font-bold"
                : "text-neutral-500 hover:text-neutral-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <div className="flex-1 grid grid-cols-2 gap-2 py-1.5 overflow-hidden">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map(p => (
            <motion.div
              layout
              key={p.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className={`rounded-lg ${p.img} border border-neutral-900 p-2.5 flex flex-col justify-between hover:border-neutral-700 transition-colors group cursor-pointer`}
            >
              <div className="flex justify-between items-start">
                <Folder className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white transition-colors" />
                <ArrowUpRight className="w-3 h-3 text-neutral-600 group-hover:text-white transition-colors" />
              </div>
              <div>
                <h4 className="text-[9px] font-bold text-neutral-100 leading-tight block truncate">
                  {p.name}
                </h4>
                <span className="text-[7px] text-neutral-500 font-mono uppercase tracking-wider block">
                  {p.cat}
                </span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

// ── 5. LANDING PAGES MOCKUP ───────────────────────────────
export function LandingPageMockup() {
  const [billing, setBilling] = useState("monthly"); // monthly, yearly
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || subscribed) return;
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setEmail("");
    }, 3000);
  };

  return (
    <div className="w-full h-full bg-violet-950 text-white p-4 sm:p-5 flex flex-col justify-between select-none">
      {/* Mini Brand Label */}
      <div className="flex justify-between items-center text-[9px]">
        <span className="font-extrabold flex items-center gap-1"><Sparkles className="w-3.5 h-3.5 text-violet-300" /> LeadFlow</span>
        <span className="bg-violet-800/40 text-violet-200 px-2 py-0.5 rounded-full border border-violet-700/50">Free Beta</span>
      </div>

      {/* Marketing Headline */}
      <div className="flex-1 flex flex-col justify-center items-center text-center space-y-3 py-4">
        <h3 className="text-sm sm:text-base font-black leading-tight max-w-[280px]">
          Double your conversion rate. Instant setup.
        </h3>
        <p className="text-[9px] text-violet-200/80 max-w-[240px] leading-relaxed">
          Create marketing pages, collect leads, and integrate directly with CRM suites. No code required.
        </p>

        {/* Pricing switch */}
        <div className="bg-violet-900/60 p-0.5 rounded-full flex border border-violet-800 max-w-xs mx-auto">
          <button
            onClick={() => setBilling("monthly")}
            className={`px-2.5 py-0.5 rounded-full text-[8px] font-bold tracking-wide transition-all cursor-pointer ${
              billing === "monthly" ? "bg-violet-700 text-white shadow-sm" : "text-violet-300"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBilling("yearly")}
            className={`px-2.5 py-0.5 rounded-full text-[8px] font-bold tracking-wide transition-all cursor-pointer ${
              billing === "yearly" ? "bg-violet-700 text-white shadow-sm" : "text-violet-300"
            }`}
          >
            Yearly <span className="text-emerald-400 font-extrabold text-[7px] ml-0.5">-20%</span>
          </button>
        </div>

        {/* Email Signup Form */}
        <form onSubmit={handleSubscribe} className="flex w-full max-w-[280px] gap-1 bg-violet-900/40 p-1 rounded-lg border border-violet-800/50">
          <input
            type="email"
            placeholder="name@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={subscribed}
            className="flex-1 bg-transparent border-none outline-none text-[9px] px-2 text-violet-100 placeholder-violet-400/60 disabled:opacity-50"
          />
          <button
            type="submit"
            className={`px-3 py-1 rounded-md text-[9px] font-bold transition-all cursor-pointer flex items-center justify-center gap-1 ${
              subscribed
                ? "bg-emerald-600 text-white"
                : "bg-white text-violet-950 hover:bg-violet-100"
            }`}
          >
            {subscribed ? (
              <>
                <Check className="w-3 h-3 animate-bounce" /> Done
              </>
            ) : (
              "Get Access"
            )}
          </button>
        </form>
      </div>

      {/* Stats trust indicators */}
      <div className="flex justify-around text-[8px] text-violet-300/70 border-t border-violet-900/50 pt-2 text-center">
        <div>
          <span className="block text-white font-extrabold">2.4M+</span>
          <span>Leads Processed</span>
        </div>
        <div>
          <span className="block text-white font-extrabold">99.9%</span>
          <span>Uptime SLA</span>
        </div>
      </div>
    </div>
  );
}

// ── 6. ADMIN PANELS MOCKUP ─────────────────────────────────
export function AdminPanelMockup() {
  const [filterText, setFilterText] = useState("");
  const users = [
    { name: "John Doe", email: "john@apex.com", role: "Owner", status: "Active" },
    { name: "Sarah Connor", email: "sarah@cyber.net", role: "Editor", status: "Active" },
    { name: "Marcus Wright", email: "marcus@h-net.com", role: "Contributor", status: "Pending" }
  ];

  const filteredUsers = users.filter(u =>
    u.name.toLowerCase().includes(filterText.toLowerCase()) ||
    u.email.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <div className="w-full h-full bg-slate-900 text-slate-200 p-4 sm:p-5 flex flex-col justify-between select-none font-sans text-[10px]">
      {/* Top Header */}
      <div className="flex justify-between items-center pb-2.5 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-ping" />
          <span className="font-extrabold text-white text-xs">Core Admin</span>
        </div>
        <div className="flex items-center bg-slate-800/80 rounded-md border border-slate-700 px-1.5 py-0.5">
          <Search className="w-3 h-3 text-slate-500 mr-1" />
          <input
            type="text"
            placeholder="Search users..."
            value={filterText}
            onChange={(e) => setFilterText(e.target.value)}
            className="bg-transparent border-none outline-none text-[8px] text-white w-20 placeholder-slate-600"
          />
        </div>
      </div>

      {/* User Table Grid */}
      <div className="flex-1 flex flex-col py-3 space-y-1.5 overflow-hidden">
        <div className="grid grid-cols-3 text-slate-500 border-b border-slate-800 pb-1.5 font-bold">
          <span>User</span>
          <span>Role</span>
          <span className="text-right">Status</span>
        </div>
        <div className="space-y-1.5 overflow-y-auto pr-1">
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user, idx) => (
              <div key={idx} className="grid grid-cols-3 py-1 items-center border-b border-slate-800/40">
                <div className="flex flex-col">
                  <span className="font-bold text-white leading-tight">{user.name}</span>
                  <span className="text-[7px] text-slate-500">{user.email}</span>
                </div>
                <span className="text-slate-400">{user.role}</span>
                <div className="text-right">
                  <span className={`inline-block text-[7px] font-bold px-1.5 py-0.5 rounded-full ${
                    user.status === "Active" ? "bg-emerald-500/10 text-emerald-400" : "bg-amber-500/10 text-amber-400"
                  }`}>
                    {user.status}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-4 text-slate-600">No users found</div>
          )}
        </div>
      </div>

      {/* Stats bar */}
      <div className="flex justify-between items-center pt-2 border-t border-slate-800 text-[8px] text-slate-500">
        <span>Showing {filteredUsers.length} of 3 users</span>
        <span>DB Connection: OK</span>
      </div>
    </div>
  );
}
