"use client";

import React, { useState } from "react";
import { Flame, Zap, Volume2, ShieldAlert, RotateCcw, Sparkles } from "lucide-react";
import { sounds } from "@/lib/sounds";

interface Vehicle {
  id: string;
  name: string;
  icon: string;
  smashPower: number;
}

const VEHICLES: Vehicle[] = [
  { id: "v1", name: "الوحش الكاسر 🦖", icon: "🚜", smashPower: 100 },
  { id: "v2", name: "دبابة الزوز الخارقة 💥", icon: "🚛", smashPower: 120 },
  { id: "v3", name: "صاروخ التدمير 🚀", icon: "🏎️", smashPower: 90 },
  { id: "v4", name: "شبح المهرجانات 🔥", icon: "🚗", smashPower: 95 },
];

export default function CarCrashArena() {
  const [selectedTruck, setSelectedTruck] = useState<Vehicle>(VEHICLES[0]);
  const [destructionMeter, setDestructionMeter] = useState<number>(0);
  const [isCrashing, setIsCrashing] = useState<boolean>(false);
  const [crashType, setCrashType] = useState<string>("");

  const triggerCrash = (type: "smash" | "flip" | "wall" | "barrel") => {
    if (isCrashing) return;
    setIsCrashing(true);
    sounds.playCrash();

    const messages = {
      smash: "💥 تصادم مباشر دغدغ الصاج 200 كم/س!",
      flip: "🔄 شقلبة مجنونة في الهوا 360 درجة!",
      wall: "🧱 اقتحام وتكسير جدار الطوب الحديدي!",
      barrel: "💣 انفجار براميل بنزين ونيران مشتعلة!",
    };

    setCrashType(messages[type]);
    setDestructionMeter((prev) => Math.min(100, prev + 25));

    setTimeout(() => {
      sounds.cheerCrash();
    }, 300);

    setTimeout(() => {
      setIsCrashing(false);
    }, 1200);
  };

  const handleReset = () => {
    sounds.playAirhorn();
    setDestructionMeter(0);
    setCrashType("");
  };

  return (
    <div className="relative bg-slate-900/95 backdrop-blur rounded-3xl p-4 md:p-6 shadow-2xl border-4 border-amber-500 text-white">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between border-b border-slate-700 pb-3 mb-4 gap-2">
        <div className="flex items-center gap-2.5">
          <div className="p-2 bg-amber-500/20 text-amber-400 rounded-2xl border border-amber-400/40">
            <span className="text-2xl">🏎️💥</span>
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-black text-amber-300 flex items-center gap-2">
              <span>حلبة تكسير ودغدغة العربيات</span>
              <Flame className="w-5 h-5 text-red-500 animate-pulse" />
            </h2>
            <p className="text-xs text-slate-300 font-bold">
              عربيات بتتشقلب وتتدغدغ وتتكسر في حلبة الوحوش والمشاكسين!
            </p>
          </div>
        </div>

        {/* Destruction Meter */}
        <div className="bg-slate-800/90 px-4 py-2 rounded-2xl border border-amber-500/40 flex items-center gap-3">
          <span className="text-xs font-black text-amber-400">نسبة التدمير:</span>
          <div className="w-28 sm:w-36 h-4 bg-slate-700 rounded-full overflow-hidden p-0.5 border border-slate-600">
            <div
              className="h-full bg-gradient-to-r from-amber-500 via-orange-500 to-red-600 rounded-full transition-all duration-300"
              style={{ width: `${destructionMeter}%` }}
            />
          </div>
          <span className="text-xs font-black text-red-400">{destructionMeter}%</span>
        </div>
      </div>

      {/* Main Arena Viewport */}
      <div className="relative w-full h-[320px] sm:h-[360px] rounded-3xl overflow-hidden border-4 border-amber-500/60 shadow-2xl bg-gradient-to-b from-slate-950 via-slate-900 to-red-950 flex flex-col justify-between p-4">
        {/* Dirt & Flame Background */}
        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#ef4444_1px,transparent_1px)] [background-size:16px_16px]" />

        {/* Top Arena Info */}
        <div className="relative z-10 flex items-center justify-between">
          <span className="text-xs font-black text-amber-400 bg-black/60 px-3 py-1 rounded-full border border-amber-400/30">
            العربة المختارة: {selectedTruck.name}
          </span>
          {destructionMeter >= 100 && (
            <span className="text-xs font-black text-red-400 bg-red-950/80 px-3 py-1 rounded-full border border-red-500 animate-bounce">
              🔥 دمار شامل 100%! الحلبة اتدغدغت!
            </span>
          )}
        </div>

        {/* Action Animation Stage */}
        <div className="relative flex-1 flex items-center justify-center my-2">
          {/* Truck 1 (Left) */}
          <div
            className={`text-6xl sm:text-8xl transition-all duration-300 filter drop-shadow-2xl ${
              isCrashing
                ? "translate-x-20 rotate-45 scale-110"
                : "-translate-x-12"
            }`}
          >
            {selectedTruck.icon}
          </div>

          {/* Crash Center Point */}
          {isCrashing && (
            <div className="absolute z-20 text-6xl sm:text-8xl animate-ping">
              💥
            </div>
          )}

          {/* Victim Obstacle / Rival Car (Right) */}
          <div
            className={`text-6xl sm:text-8xl transition-all duration-300 filter drop-shadow-2xl ${
              isCrashing
                ? "-translate-x-20 -rotate-90 scale-90 opacity-80"
                : "translate-x-12"
            }`}
          >
            {destructionMeter > 50 ? "🚗" : "🚙"}
          </div>
        </div>

        {/* Banner Announcement */}
        {crashType && (
          <div className="relative z-10 text-center bg-black/75 backdrop-blur border border-amber-500/50 py-1.5 px-3 rounded-xl mb-1 text-xs sm:text-sm font-black text-yellow-300 animate-bounce">
            {crashType}
          </div>
        )}

        {/* Bottom Arena Controls */}
        <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-2">
          <button
            onClick={() => triggerCrash("smash")}
            disabled={isCrashing}
            className="py-2.5 px-2 bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white font-black text-xs rounded-xl shadow-md active:scale-95 transition flex items-center justify-center gap-1"
          >
            <span>💥 صدمة 200 كم/س</span>
          </button>

          <button
            onClick={() => triggerCrash("flip")}
            disabled={isCrashing}
            className="py-2.5 px-2 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white font-black text-xs rounded-xl shadow-md active:scale-95 transition flex items-center justify-center gap-1"
          >
            <span>🔄 شقلبة 360°</span>
          </button>

          <button
            onClick={() => triggerCrash("wall")}
            disabled={isCrashing}
            className="py-2.5 px-2 bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-orange-500 hover:to-yellow-500 text-white font-black text-xs rounded-xl shadow-md active:scale-95 transition flex items-center justify-center gap-1"
          >
            <span>🧱 دغدغة جدار الطوب</span>
          </button>

          <button
            onClick={() => triggerCrash("barrel")}
            disabled={isCrashing}
            className="py-2.5 px-2 bg-gradient-to-r from-purple-700 to-red-600 hover:from-purple-600 hover:to-red-500 text-white font-black text-xs rounded-xl shadow-md active:scale-95 transition flex items-center justify-center gap-1"
          >
            <span>💣 تفجير البراميل</span>
          </button>
        </div>
      </div>

      {/* Select Truck Picker */}
      <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2 overflow-x-auto pb-1">
          <span className="text-xs font-black text-slate-400">اختر وحشك:</span>
          {VEHICLES.map((v) => (
            <button
              key={v.id}
              onClick={() => {
                sounds.playMahraganBeat();
                setSelectedTruck(v);
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1 border ${
                selectedTruck.id === v.id
                  ? "bg-amber-500 text-slate-950 border-white shadow-md font-black"
                  : "bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700"
              }`}
            >
              <span>{v.icon}</span>
              <span>{v.name}</span>
            </button>
          ))}
        </div>

        <button
          onClick={handleReset}
          className="flex items-center gap-1 text-xs text-slate-400 hover:text-white bg-slate-800 px-3 py-1.5 rounded-xl border border-slate-700 transition"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>تصفير الحلبة</span>
        </button>
      </div>
    </div>
  );
}
