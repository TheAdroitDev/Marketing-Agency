"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShoppingBag, Check, Server, Shield, Globe, Award, Sparkles, Folder,
  ArrowRight, Users, Bell, Mail, RefreshCw, Calendar, Clock, BarChart2
} from "lucide-react";

// ── 1. ONLINE STORE BENTO (Checkout & Shipping flow) ──
export function OnlineStoreBento() {
  const [step, setStep] = useState(0); // 0: Idle, 1: Checking out, 2: Dispatched, 3: Delivered
  const [isProcessing, setIsProcessing] = useState(false);

  const startCheckout = () => {
    if (isProcessing || step > 0) return;
    setIsProcessing(true);
    setStep(1);
    // ordered
    setTimeout(() => {
      setStep(2); // dispatched
      setTimeout(() => {
        setStep(3); // delivered
        setIsProcessing(false);
      }, 1500);
    }, 1500);
  };

  const reset = () => {
    if (isProcessing) return;
    setStep(0);
  };

  return (
    <div className="group relative w-full h-full bg-white dark:bg-zinc-900 border border-neutral-200/80 dark:border-zinc-800/80 rounded-2xl p-6 flex flex-col justify-between overflow-hidden hover:shadow-lg transition-all duration-300">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        {/* Left Info */}
        <div className="md:col-span-6 space-y-3">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
            <ShoppingBag className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-[17px] font-bold text-neutral-900 dark:text-white">Online Stores</h3>
            <p className="text-[13px] text-neutral-500 dark:text-zinc-400 mt-1 leading-relaxed">
              Sell products online with payments, checkout flows, and real-time delivery tracking.
            </p>
          </div>
        </div>

        {/* Right Sandbox */}
        <div className="md:col-span-6 bg-neutral-50 dark:bg-zinc-950/50 p-4 rounded-xl border border-neutral-200/50 dark:border-zinc-800/50 h-[170px] flex flex-col justify-between relative">
          <AnimatePresence mode="wait">
            {step === 0 ? (
              <motion.div
                key="idle"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="flex-1 flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 bg-indigo-600/10 rounded-lg flex items-center justify-center text-indigo-600 font-black text-sm">
                    📦
                  </div>
                  <div>
                    <h4 className="text-[11px] font-bold text-neutral-800 dark:text-zinc-200 leading-tight">Nebula Runners</h4>
                    <span className="text-[10px] text-neutral-400">$120.00</span>
                  </div>
                </div>
                <button
                  onClick={startCheckout}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-[10px] px-3.5 py-2 rounded-lg cursor-pointer transition-all shadow-sm shadow-indigo-600/20 active:scale-95"
                >
                  Buy Now
                </button>
              </motion.div>
            ) : (
              <motion.div
                key="tracking"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex-1 flex flex-col justify-between"
              >
                {/* Status message */}
                <div className="flex justify-between items-center text-[10px] font-bold">
                  <span className="text-neutral-500 dark:text-zinc-400">Order #8920</span>
                  <span className={step === 3 ? "text-emerald-500" : "text-indigo-500"}>
                    {step === 1 && "Processing order..."}
                    {step === 2 && "Shipped (In transit)"}
                    {step === 3 && "Delivered!"}
                  </span>
                </div>

                {/* Progress bar */}
                <div className="relative w-full h-1.5 bg-neutral-200 dark:bg-zinc-800 rounded-full my-3 overflow-hidden">
                  <motion.div
                    className="absolute top-0 left-0 h-full bg-indigo-600"
                    initial={{ width: "0%" }}
                    animate={{ width: step === 1 ? "33%" : step === 2 ? "66%" : "100%" }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                  />
                </div>

                {/* Milestones */}
                <div className="flex justify-between text-[8px] text-neutral-400 dark:text-zinc-500 font-semibold">
                  <span className={step >= 1 ? "text-indigo-500" : ""}>Ordered</span>
                  <span className={step >= 2 ? "text-indigo-500" : ""}>Shipped</span>
                  <span className={step >= 3 ? "text-emerald-500" : ""}>Delivered</span>
                </div>

                {/* Reset button once finished */}
                {step === 3 && (
                  <motion.button
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    onClick={reset}
                    className="mt-2 text-[9px] font-bold text-neutral-500 hover:text-indigo-600 cursor-pointer flex items-center justify-center gap-1 self-end bg-neutral-200/50 dark:bg-zinc-800 px-2 py-1 rounded-md"
                  >
                    <RefreshCw className="w-2.5 h-2.5" /> Order again
                  </motion.button>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

// ── 2. SAAS BENTO (Plan toggler & storage metrics) ──
export function SaaSBento() {
  const [plan, setPlan] = useState("starter"); // starter, pro

  return (
    <div className="group relative w-full h-full bg-white dark:bg-zinc-900 border border-neutral-200/80 dark:border-zinc-800/80 rounded-2xl p-6 flex flex-col justify-between overflow-hidden hover:shadow-lg transition-all duration-300">
      <div className="space-y-4">
        <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
          <Server className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-[17px] font-bold text-neutral-900 dark:text-white">SaaS Platforms</h3>
          <p className="text-[13px] text-neutral-500 dark:text-zinc-400 mt-1 leading-relaxed">
            Scalable web apps with dashboard panels, databases, and api systems.
          </p>
        </div>
      </div>

      {/* Interactive Quota Slider */}
      <div className="bg-neutral-50 dark:bg-zinc-950/50 p-4 rounded-xl border border-neutral-200/50 dark:border-zinc-800/50 space-y-4 mt-6">
        <div className="flex justify-between items-center">
          <span className="text-[10px] font-bold text-neutral-500 dark:text-zinc-400 uppercase tracking-wider">Plan</span>
          {/* Slider trigger */}
          <div className="flex bg-neutral-200 dark:bg-zinc-800 p-0.5 rounded-full relative">
            <button
              onClick={() => setPlan("starter")}
              className={`px-3 py-1 text-[9px] font-bold rounded-full transition-all cursor-pointer relative z-10 ${
                plan === "starter" ? "bg-indigo-600 text-white" : "text-neutral-500"
              }`}
            >
              Starter
            </button>
            <button
              onClick={() => setPlan("pro")}
              className={`px-3 py-1 text-[9px] font-bold rounded-full transition-all cursor-pointer relative z-10 ${
                plan === "pro" ? "bg-indigo-600 text-white" : "text-neutral-500"
              }`}
            >
              Pro
            </button>
          </div>
        </div>

        {/* Database quota gauge */}
        <div className="space-y-1">
          <div className="flex justify-between text-[9px] font-bold">
            <span className="text-neutral-600 dark:text-zinc-300">DB Requests</span>
            <span>{plan === "starter" ? "10,000 / day" : "500,000 / day"}</span>
          </div>
          <div className="w-full h-1.5 bg-neutral-200 dark:bg-zinc-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-indigo-600"
              initial={{ width: "20%" }}
              animate={{ width: plan === "starter" ? "20%" : "95%" }}
              transition={{ type: "spring", stiffness: 100 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// ── 3. BUSINESS BENTO (Corporate hero & Scheduler) ──
export function BusinessBento() {
  const [selectedSlot, setSelectedSlot] = useState(null);

  const slots = [
    { id: "1", time: "10:00 AM" },
    { id: "2", time: "02:00 PM" },
    { id: "3", time: "04:30 PM" }
  ];

  return (
    <div className="group relative w-full h-full bg-white dark:bg-zinc-900 border border-neutral-200/80 dark:border-zinc-800/80 rounded-2xl p-6 flex flex-col justify-between overflow-hidden hover:shadow-lg transition-all duration-300">
      <div className="space-y-4">
        <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
          <Award className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-[17px] font-bold text-neutral-900 dark:text-white">Business Sites</h3>
          <p className="text-[13px] text-neutral-500 dark:text-zinc-400 mt-1 leading-relaxed">
            Professional business profiles styled to capture client trust.
          </p>
        </div>
      </div>

      {/* Appointment Slot Picker */}
      <div className="bg-neutral-50 dark:bg-zinc-950/50 p-4 rounded-xl border border-neutral-200/50 dark:border-zinc-800/50 space-y-3 mt-6">
        <span className="text-[10px] font-bold text-neutral-500 dark:text-zinc-400 uppercase tracking-wider block">
          {selectedSlot ? "✓ Meeting Booked!" : "Choose Call Time"}
        </span>

        {selectedSlot ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-2 space-y-1.5"
          >
            <div className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto">
              <Check className="w-4 h-4" />
            </div>
            <span className="text-[10px] font-bold text-neutral-700 dark:text-zinc-300 block">
              Confirmed for {slots.find(s => s.id === selectedSlot)?.time}
            </span>
            <button
              onClick={() => setSelectedSlot(null)}
              className="text-[8px] font-bold text-indigo-500 hover:underline cursor-pointer"
            >
              Reschedule
            </button>
          </motion.div>
        ) : (
          <div className="flex gap-2 justify-center py-1">
            {slots.map(s => (
              <button
                key={s.id}
                onClick={() => setSelectedSlot(s.id)}
                className="flex-1 bg-white dark:bg-zinc-900 border border-neutral-200/80 dark:border-zinc-800/80 hover:border-indigo-500 dark:hover:border-indigo-400 hover:text-indigo-500 py-1.5 rounded-lg text-[9px] font-bold transition-all cursor-pointer text-neutral-700 dark:text-zinc-300 flex flex-col items-center gap-1 hover:shadow-sm"
              >
                <Clock className="w-3 h-3 text-neutral-400" />
                {s.time}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// ── 4. PORTFOLIO BENTO (Media filters & layouts) ──
export function PortfolioBento() {
  const [filter, setFilter] = useState("all");
  const works = [
    { id: 1, name: "Neon branding", type: "branding", color: "bg-indigo-500/10 border-indigo-500/20 text-indigo-500" },
    { id: 2, name: "Agency website", type: "web", color: "bg-pink-500/10 border-pink-500/20 text-pink-500" },
    { id: 3, name: "FinTech app", type: "app", color: "bg-emerald-500/10 border-emerald-500/20 text-emerald-500" }
  ];

  const visibleWorks = works.filter(w => filter === "all" || w.type === filter);

  return (
    <div className="group relative w-full h-full bg-white dark:bg-zinc-900 border border-neutral-200/80 dark:border-zinc-800/80 rounded-2xl p-6 flex flex-col justify-between overflow-hidden hover:shadow-lg transition-all duration-300">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        {/* Left Info */}
        <div className="md:col-span-6 space-y-3">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
            <Folder className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-[17px] font-bold text-neutral-900 dark:text-white">Portfolio Sites</h3>
            <p className="text-[13px] text-neutral-500 dark:text-zinc-400 mt-1 leading-relaxed">
              Beautiful creative portfolios with custom galleries, sliders, and page loaders.
            </p>
          </div>
        </div>

        {/* Right Sandbox */}
        <div className="md:col-span-6 bg-neutral-50 dark:bg-zinc-950/50 p-4 rounded-xl border border-neutral-200/50 dark:border-zinc-800/50 h-[170px] flex flex-col justify-between">
          <div className="flex justify-between items-center border-b border-neutral-200/40 dark:border-zinc-800/60 pb-2">
            <span className="text-[10px] font-bold text-neutral-500 dark:text-zinc-400 uppercase tracking-wider">Gallery</span>
            {/* Filter buttons */}
            <div className="flex gap-1">
              {["all", "branding", "web"].map(cat => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-1.5 py-0.5 rounded text-[8px] font-bold uppercase tracking-wide cursor-pointer transition-all ${
                    filter === cat ? "bg-indigo-600 text-white" : "text-neutral-400 hover:text-neutral-700"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Grid display */}
          <div className="flex-1 grid grid-cols-3 gap-2 items-center py-2">
            <AnimatePresence mode="popLayout">
              {visibleWorks.map(w => (
                <motion.div
                  layout
                  key={w.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className={`h-[75px] rounded-lg border flex flex-col justify-between p-2.5 ${w.color}`}
                >
                  <span className="text-[16px]">✨</span>
                  <span className="text-[7.5px] font-bold block truncate leading-none uppercase tracking-wider">{w.name}</span>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── 5. LANDING BENTO (Lead collectors & auto-fills) ──
export function LandingBento() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [leads, setLeads] = useState(240);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || submitted) return;
    setSubmitted(true);
    setLeads(prev => prev + 1);
    setTimeout(() => {
      setSubmitted(false);
      setEmail("");
    }, 3000);
  };

  return (
    <div className="group relative w-full h-full bg-white dark:bg-zinc-900 border border-neutral-200/80 dark:border-zinc-800/80 rounded-2xl p-6 flex flex-col justify-between overflow-hidden hover:shadow-lg transition-all duration-300">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        {/* Left Info */}
        <div className="md:col-span-6 space-y-3">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-[17px] font-bold text-neutral-900 dark:text-white">Landing Pages</h3>
            <p className="text-[13px] text-neutral-500 dark:text-zinc-400 mt-1 leading-relaxed">
              High-converting marketing landing pages with custom lead flows.
            </p>
          </div>
        </div>

        {/* Right Sandbox */}
        <div className="md:col-span-6 bg-neutral-50 dark:bg-zinc-950/50 p-4 rounded-xl border border-neutral-200/50 dark:border-zinc-800/50 h-[170px] flex flex-col justify-between">
          <div className="flex justify-between items-center text-[10px] font-bold">
            <span className="text-neutral-500 dark:text-zinc-400 uppercase tracking-wider">Conversion rate</span>
            <span className="text-emerald-500 flex items-center gap-0.5"><BarChart2 className="w-3.5 h-3.5" /> Leads: {leads}</span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-2 py-2">
            <div className="flex gap-1.5 bg-white dark:bg-zinc-900 p-1 rounded-lg border border-neutral-200 dark:border-zinc-800">
              <input
                type="email"
                placeholder="Fill email to test..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={submitted}
                className="flex-1 bg-transparent border-none outline-none text-[10px] px-2 text-neutral-800 dark:text-zinc-200"
              />
              <button
                type="submit"
                className={`px-3 py-1.5 rounded-md text-[9px] font-bold transition-all cursor-pointer flex items-center gap-1 ${
                  submitted
                    ? "bg-emerald-600 text-white"
                    : "bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm"
                }`}
              >
                {submitted ? (
                  <>
                    <Check className="w-3 h-3" /> Done
                  </>
                ) : (
                  "Submit"
                )}
              </button>
            </div>
            <span
              onClick={() => setEmail("test-lead@company.com")}
              className="text-[8.5px] text-indigo-500 hover:underline cursor-pointer block text-center"
            >
              🪄 Autofill demo lead
            </span>
          </form>
        </div>
      </div>
    </div>
  );
}

// ── 6. ADMIN BENTO (User toggler switches) ──
export function AdminBento() {
  const [users, setUsers] = useState([
    { id: 1, name: "Alice", active: true },
    { id: 2, name: "Bob", active: false }
  ]);

  const toggleUser = (id) => {
    setUsers(prev =>
      prev.map(u => (u.id === id ? { ...u, active: !u.active } : u))
    );
  };

  return (
    <div className="group relative w-full h-full bg-white dark:bg-zinc-900 border border-neutral-200/80 dark:border-zinc-800/80 rounded-2xl p-6 flex flex-col justify-between overflow-hidden hover:shadow-lg transition-all duration-300">
      <div className="space-y-4">
        <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
          <Shield className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-[17px] font-bold text-neutral-900 dark:text-white">Admin Panels</h3>
          <p className="text-[13px] text-neutral-500 dark:text-zinc-400 mt-1 leading-relaxed">
            Data dashboards and management tables to organize business operations.
          </p>
        </div>
      </div>

      {/* Toggling switches table */}
      <div className="bg-neutral-50 dark:bg-zinc-950/50 p-4 rounded-xl border border-neutral-200/50 dark:border-zinc-800/50 space-y-2.5 mt-6">
        <span className="text-[10px] font-bold text-neutral-500 dark:text-zinc-400 uppercase tracking-wider block">
          Account status table
        </span>

        <div className="space-y-2">
          {users.map(u => (
            <div key={u.id} className="flex justify-between items-center py-0.5 border-b border-neutral-200/40 dark:border-zinc-850 pb-1.5 last:border-none last:pb-0">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                <span className="text-[11px] font-bold text-neutral-700 dark:text-zinc-350">{u.name}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className={`text-[8.5px] font-bold px-1.5 py-0.5 rounded-full ${
                  u.active ? "bg-emerald-500/10 text-emerald-500" : "bg-rose-500/10 text-rose-500"
                }`}>
                  {u.active ? "ACTIVE" : "PAUSED"}
                </span>

                {/* Mini toggle switch button */}
                <button
                  onClick={() => toggleUser(u.id)}
                  className={`w-6 h-3.5 rounded-full p-0.5 transition-colors duration-200 focus:outline-none cursor-pointer flex ${
                    u.active ? "bg-indigo-600 justify-end" : "bg-neutral-300 dark:bg-zinc-700 justify-start"
                  }`}
                >
                  <motion.span layout className="w-2.5 h-2.5 rounded-full bg-white shadow-sm" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
