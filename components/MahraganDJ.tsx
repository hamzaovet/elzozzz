"use client";

import React, { useState } from "react";
import { Disc, Radio, Volume2, Sparkles, Flame, Play, Square } from "lucide-react";
import { sounds } from "@/lib/sounds";

interface DJPad {
  id: string;
  name: string;
  subtitle: string;
  icon: string;
  color: string;
  border: string;
  action: () => void;
}

export default function MahraganDJ() {
  const [activePad, setActivePad] = useState<string | null>(null);
  const [isLooping, setIsLooping] = useState<boolean>(false);
  const [loopInterval, setLoopInterval] = useState<any>(null);

  const triggerPad = (pad: DJPad) => {
    setActivePad(pad.id);
    pad.action();
    setTimeout(() => {
      setActivePad(null);
    }, 300);
  };

  const toggleLoop = () => {
    if (isLooping) {
      if (loopInterval) clearInterval(loopInterval);
      setLoopInterval(null);
      setIsLooping(false);
    } else {
      sounds.playAirhorn();
      setIsLooping(true);
      const interval = setInterval(() => {
        sounds.playMahraganBeat();
      }, 350);
      setLoopInterval(interval);
    }
  };

  const PADS: DJPad[] = [
    {
      id: "airhorn",
      name: "سارينة المهرجانات 📢",
      subtitle: "طووووووووووووط!",
      icon: "📢",
      color: "from-amber-500 to-yellow-500 text-slate-950",
      border: "border-yellow-400",
      action: () => sounds.playAirhorn(),
    },
    {
      id: "goal",
      name: "جوووووووول في المقص! ⚽",
      subtitle: "هدف عالمي لا يصد ولا يرد",
      icon: "⚽",
      color: "from-emerald-500 to-cyan-500 text-white",
      border: "border-emerald-400",
      action: () => sounds.cheerGoal(),
    },
    {
      id: "crash",
      name: "دغدغة وتكسير صاج 💥",
      subtitle: "صدمة عربيات وشقلبة",
      icon: "💥",
      color: "from-red-600 to-orange-600 text-white",
      border: "border-red-400",
      action: () => sounds.cheerCrash(),
    },
    {
      id: "beat",
      name: "طبلة دي جي ومقسوم 🥁",
      subtitle: "بيز تكنو شعبي جامد",
      icon: "🥁",
      color: "from-purple-600 to-indigo-600 text-white",
      border: "border-purple-400",
      action: () => sounds.playMahraganBeat(),
    },
    {
      id: "whistle",
      name: "صفارة الحكم تيت تيت 🗣️",
      subtitle: "ضربة جزاء للزوز!",
      icon: "🗣️",
      color: "from-sky-500 to-blue-600 text-white",
      border: "border-sky-400",
      action: () => sounds.playWhistle(),
    },
    {
      id: "legend",
      name: "الزوز جه والكل يوسع! 🦁",
      subtitle: "هتاف الحتة وشيخ الشباب",
      icon: "🦁",
      color: "from-fuchsia-600 to-pink-600 text-white",
      border: "border-fuchsia-400",
      action: () => sounds.cheerMahragan(),
    },
    {
      id: "smash",
      name: "تكسير حيطان وصخور 🔨",
      subtitle: "فرقعة وصدمات حديد",
      icon: "🔨",
      color: "from-orange-500 to-amber-600 text-white",
      border: "border-orange-400",
      action: () => {
        sounds.playCrash();
        sounds.playMp3("smash_mania.mp3");
      },
    },
    {
      id: "dad",
      name: "رسالة حب من بابا 👨‍👦",
      subtitle: "فخور بيك يا أرجل زوز!",
      icon: "💖",
      color: "from-rose-500 to-pink-500 text-white",
      border: "border-pink-400",
      action: () => sounds.cheerDad(),
    },
  ];

  return (
    <div className="relative bg-slate-900/95 backdrop-blur rounded-3xl p-4 md:p-6 shadow-2xl border-4 border-fuchsia-500 text-white">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between border-b border-slate-700 pb-3 mb-4 gap-2">
        <div className="flex items-center gap-2.5">
          <div className="p-2 bg-fuchsia-500/20 text-fuchsia-400 rounded-2xl border border-fuchsia-400/40">
            <Disc className="w-6 h-6 animate-spin" />
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-black text-fuchsia-300 flex items-center gap-2">
              <span>دي جي ومهرجانات الزوز الشعبية 🎧🔥</span>
            </h2>
            <p className="text-xs text-slate-300 font-bold">
              اضغط على أزرار الدي جي، ولّع السارينات ولم علينا الجيران زي ما بتحب!
            </p>
          </div>
        </div>

        {/* Continuous Loop Player */}
        <button
          onClick={toggleLoop}
          className={`flex items-center gap-2 px-4 py-2 rounded-2xl font-black text-xs transition active:scale-95 shadow-lg border-2 ${
            isLooping
              ? "bg-red-600 border-red-400 text-white animate-pulse"
              : "bg-fuchsia-600 hover:bg-fuchsia-500 border-fuchsia-400 text-white"
          }`}
        >
          {isLooping ? <Square className="w-4 h-4 fill-white" /> : <Play className="w-4 h-4 fill-white" />}
          <span>{isLooping ? "وقف المهرجان 🛑" : "شغل إيقاع المهرجان 🎶"}</span>
        </button>
      </div>

      {/* DJ Launchpad Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {PADS.map((pad) => (
          <button
            key={pad.id}
            onClick={() => triggerPad(pad)}
            className={`relative h-28 sm:h-32 rounded-3xl p-3 border-4 flex flex-col justify-between items-center text-center transition-all duration-100 transform active:scale-90 shadow-xl bg-gradient-to-br ${
              pad.color
            } ${pad.border} ${
              activePad === pad.id
                ? "scale-105 brightness-125 ring-4 ring-white shadow-2xl"
                : "hover:brightness-110"
            }`}
          >
            <span className="text-3xl sm:text-4xl filter drop-shadow">{pad.icon}</span>
            <div>
              <p className="text-xs sm:text-sm font-black drop-shadow">{pad.name}</p>
              <p className="text-[10px] opacity-90 font-bold mt-0.5">{pad.subtitle}</p>
            </div>
          </button>
        ))}
      </div>

      <div className="mt-4 text-center text-xs text-fuchsia-400 font-bold flex items-center justify-center gap-1.5">
        <Sparkles className="w-4 h-4" />
        <span>كل الأصوات بتشتغل فوراً وبأعلى نقاء داخل الأبلكيشن والموبايل!</span>
      </div>
    </div>
  );
}
