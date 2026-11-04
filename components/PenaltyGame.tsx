"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Flame, Trophy, Volume2, RotateCcw, Zap, Sparkles } from "lucide-react";
import { sounds } from "@/lib/sounds";

interface GoalTarget {
  id: string;
  label: string;
  x: string; // css percentage
  y: string;
  speed: number;
}

const TARGETS: GoalTarget[] = [
  { id: "top_left", label: "في المقص الشمال 🚀", x: "12%", y: "15%", speed: 135 },
  { id: "top_right", label: "في المقص اليمين 🚀", x: "88%", y: "15%", speed: 140 },
  { id: "top_mid", label: "صاروخ في العارضة 💥", x: "50%", y: "12%", speed: 130 },
  { id: "bot_left", label: "أرضية زاحفة شمال 🎯", x: "15%", y: "82%", speed: 110 },
  { id: "bot_right", label: "أرضية زاحفة يمين 🎯", x: "85%", y: "82%", speed: 115 },
  { id: "panenka", label: "بانينكا من فوق الحارس 🎩", x: "50%", y: "50%", speed: 85 },
];

export default function PenaltyGame() {
  const [score, setScore] = useState<number>(0);
  const [attempts, setAttempts] = useState<number>(0);
  const [lastShot, setLastShot] = useState<GoalTarget | null>(null);
  const [isShooting, setIsShooting] = useState<boolean>(false);
  const [isGoal, setIsGoal] = useState<boolean>(false);
  const [keeperDive, setKeeperDive] = useState<string>("center");

  const handleShoot = async (target: GoalTarget) => {
    if (isShooting) return;
    setIsShooting(true);
    setLastShot(target);
    setAttempts((prev) => prev + 1);

    sounds.playKick();

    // Goalkeeper dives randomly
    const dives = ["left", "right", "center"];
    const randomDive = dives[Math.floor(Math.random() * dives.length)];
    setKeeperDive(randomDive);

    // Goal calculation (Zoz is a superstar, 85% goal rate!)
    const goalScored = !(
      (randomDive === "left" && (target.id === "top_left" || target.id === "bot_left") && Math.random() < 0.2) ||
      (randomDive === "right" && (target.id === "top_right" || target.id === "bot_right") && Math.random() < 0.2)
    );

    setTimeout(async () => {
      setIsGoal(goalScored);
      if (goalScored) {
        setScore((prev) => prev + 1);
        sounds.cheerGoal();

        try {
          await fetch("/api/goals", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              strikerName: "الكابتن زين (الزوز) ⚽",
              goalType: target.label,
              speedKmh: target.speed,
              stadium: "استاد الزوز الدولي 🏟️",
            }),
          });
        } catch (e) {}
      } else {
        sounds.playWhistle();
      }

      setTimeout(() => {
        setIsShooting(false);
      }, 1500);
    }, 600);
  };

  return (
    <div className="relative bg-slate-900/95 backdrop-blur rounded-3xl p-4 md:p-6 shadow-2xl border-4 border-cyan-500 text-white">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between border-b border-slate-700 pb-3 mb-4 gap-2">
        <div className="flex items-center gap-2.5">
          <div className="p-2 bg-cyan-500/20 text-cyan-400 rounded-2xl border border-cyan-400/40">
            <span className="text-2xl">⚽</span>
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-black text-cyan-300 flex items-center gap-2">
              <span>ملعب الزوز ومباراة ضربات الجزاء السوبر</span>
              <Flame className="w-5 h-5 text-amber-400 animate-bounce" />
            </h2>
            <p className="text-xs text-slate-300 font-bold">
              شوط صواريخ في المقص واهزم الحارس مع سارينات الملاعب وهتاف الجماهير!
            </p>
          </div>
        </div>

        {/* Score Board */}
        <div className="flex items-center gap-3 bg-slate-800/90 px-4 py-2 rounded-2xl border border-cyan-400/30">
          <div className="text-center">
            <span className="text-[10px] text-slate-400 font-bold block">الأهداف ⚽</span>
            <span className="text-xl font-black text-cyan-400">{score}</span>
          </div>
          <div className="w-px h-8 bg-slate-700" />
          <div className="text-center">
            <span className="text-[10px] text-slate-400 font-bold block">التسديدات</span>
            <span className="text-xl font-black text-amber-400">{attempts}</span>
          </div>
        </div>
      </div>

      {/* Goal Stadium Arena Viewport */}
      <div className="relative w-full h-[380px] sm:h-[420px] rounded-3xl overflow-hidden border-4 border-cyan-500/60 shadow-2xl bg-gradient-to-b from-slate-950 via-slate-900 to-emerald-950 flex flex-col justify-between p-4">
        {/* Stadium Lights & Crowd Silhouette */}
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-cyan-900/30 to-transparent pointer-events-none flex justify-between px-6 pt-2">
          <div className="w-16 h-16 bg-cyan-400/20 blur-xl rounded-full" />
          <div className="text-xs font-black text-cyan-300/60 tracking-widest uppercase">
            ZOZ STADIUM 🏟️
          </div>
          <div className="w-16 h-16 bg-amber-400/20 blur-xl rounded-full" />
        </div>

        {/* Goal Net Frame */}
        <div className="relative w-full max-w-xl mx-auto h-[240px] sm:h-[260px] border-8 border-white/90 rounded-t-3xl shadow-inner bg-emerald-900/40 backdrop-blur-xs flex items-center justify-center overflow-hidden">
          {/* Net Grid pattern */}
          <div
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          />

          {/* Goalkeeper Animated */}
          <div
            className={`absolute bottom-2 text-6xl sm:text-7xl transition-all duration-500 filter drop-shadow-xl ${
              keeperDive === "left"
                ? "translate-x-32 rotate-45"
                : keeperDive === "right"
                ? "-translate-x-32 -rotate-45"
                : "translate-x-0"
            }`}
          >
            🧤🧍‍♂️🧤
          </div>

          {/* Interactive Target Buttons inside the Net */}
          {TARGETS.map((t) => (
            <button
              key={t.id}
              onClick={() => handleShoot(t)}
              disabled={isShooting}
              className={`absolute p-2.5 rounded-full border-2 transition active:scale-90 flex items-center justify-center font-black text-xs ${
                lastShot?.id === t.id && isShooting
                  ? "bg-amber-400 border-white text-slate-950 scale-125 animate-ping"
                  : "bg-cyan-500/30 hover:bg-cyan-400/70 border-cyan-300 text-white shadow-lg"
              }`}
              style={{
                top: t.y,
                left: t.x,
                transform: "translate(-50%, -50%)",
              }}
              title={t.label}
            >
              <Zap className="w-4 h-4 text-yellow-300" />
            </button>
          ))}

          {/* Ball Animation when shot */}
          {isShooting && lastShot && (
            <div
              className="absolute text-4xl sm:text-5xl transition-all duration-500 animate-spin z-20 filter drop-shadow-2xl"
              style={{
                top: lastShot.y,
                left: lastShot.x,
                transform: "translate(-50%, -50%)",
              }}
            >
              ⚽
            </div>
          )}

          {/* Goal Explosion Banner */}
          {isShooting && isGoal && (
            <div className="absolute inset-0 bg-cyan-600/60 backdrop-blur-xs flex flex-col items-center justify-center z-30 animate-bounce">
              <span className="text-4xl sm:text-6xl font-black text-yellow-300 drop-shadow-md">
                جوووووووووول! ⚽🔥
              </span>
              <span className="text-base sm:text-xl font-bold text-white mt-1">
                {lastShot?.label} بسرعة {lastShot?.speed} كم/س!
              </span>
            </div>
          )}
        </div>

        {/* Striker Hero Bar (Zein at bottom) */}
        <div className="relative z-10 flex items-center justify-between bg-slate-950/80 backdrop-blur rounded-2xl px-4 py-2 border border-slate-700">
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-cyan-400 shadow-md">
              <Image src="/zoz-face.jpg" alt="Zein" fill className="object-cover" />
            </div>
            <div>
              <p className="text-xs font-black text-cyan-300">الكابتن زين (الزوز) ⚽</p>
              <p className="text-[10px] text-slate-400 font-bold">الهداف التاريخي • اضغط على أي دائرة للتسديد</p>
            </div>
          </div>

          <button
            onClick={() => sounds.cheerGoal()}
            className="flex items-center gap-1.5 bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 font-black text-xs px-3.5 py-2 rounded-xl shadow-md active:scale-95 transition"
          >
            <Volume2 className="w-4 h-4" />
            <span>سارينة الجووول 📢</span>
          </button>
        </div>
      </div>
    </div>
  );
}
