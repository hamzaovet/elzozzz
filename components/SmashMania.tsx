"use client";

import React, { useState, useEffect } from "react";
import { Hammer, Sparkles, Trophy, Zap, Flame, RotateCcw } from "lucide-react";
import { sounds } from "@/lib/sounds";

interface SmashItem {
  id: number;
  emoji: string;
  name: string;
  points: number;
  health: number;
  maxHealth: number;
  isBroken: boolean;
}

const INITIAL_ITEMS = [
  { emoji: "🧱", name: "طوبة حديدية", points: 10, maxHealth: 1 },
  { emoji: "📦", name: "صندوق خشب", points: 15, maxHealth: 2 },
  { emoji: "📺", name: "تلفزيون قديم", points: 25, maxHealth: 2 },
  { emoji: "🛢️", name: "برميل بترول", points: 40, maxHealth: 3 },
  { emoji: "🗿", name: "تمثال صخري", points: 50, maxHealth: 3 },
  { emoji: "🚗", name: "عربية سكراب", points: 70, maxHealth: 4 },
];

export default function SmashMania() {
  const [score, setScore] = useState<number>(0);
  const [combo, setCombo] = useState<number>(0);
  const [maxCombo, setMaxCombo] = useState<number>(0);
  const [timeLeft, setTimeLeft] = useState<number>(30);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [highScore, setHighScore] = useState<number>(0);
  const [activeItems, setActiveItems] = useState<SmashItem[]>([]);
  const [lastSmashMsg, setLastSmashMsg] = useState<string>("");
  const [shake, setShake] = useState<boolean>(false);

  // Generate 6 random items
  const generateGrid = () => {
    return Array.from({ length: 6 }).map((_, idx) => {
      const template = INITIAL_ITEMS[Math.floor(Math.random() * INITIAL_ITEMS.length)];
      return {
        id: Date.now() + idx,
        emoji: template.emoji,
        name: template.name,
        points: template.points,
        health: template.maxHealth,
        maxHealth: template.maxHealth,
        isBroken: false,
      };
    });
  };

  const startGame = () => {
    sounds.playAirhorn();
    setScore(0);
    setCombo(0);
    setTimeLeft(30);
    setIsPlaying(true);
    setActiveItems(generateGrid());
    setLastSmashMsg("يلا يا بطل.. دغدغ كل حاجة قدامك! 🔥");
  };

  // Timer countdown
  useEffect(() => {
    if (!isPlaying) return;
    if (timeLeft <= 0) {
      setIsPlaying(false);
      sounds.cheerGoal();
      setLastSmashMsg(`🏁 انتهى الوقت! مجموعك الأسطوري: ${score} نقطة!`);
      if (score > highScore) {
        setHighScore(score);
        // Save to backend
        fetch("/api/scores", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            game: "smash",
            score: score,
            combo: maxCombo,
          }),
        }).catch(() => {});
      }
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((t) => t - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [isPlaying, timeLeft, score, highScore, maxCombo]);

  const handleSmash = (index: number) => {
    if (!isPlaying) return;

    sounds.playCrash();
    setShake(true);
    setTimeout(() => setShake(false), 200);

    setActiveItems((prev) => {
      const copy = [...prev];
      const target = copy[index];
      if (!target || target.isBroken) return prev;

      const newHealth = target.health - 1;
      if (newHealth <= 0) {
        target.isBroken = true;
        const newCombo = combo + 1;
        setCombo(newCombo);
        if (newCombo > maxCombo) setMaxCombo(newCombo);

        const pts = target.points * Math.max(1, Math.floor(newCombo / 3) + 1);
        setScore((s) => s + pts);

        const cheers = [
          `💥 دغدغت ${target.name}! (+${pts})`,
          `🔥 وحش التكسير يا زوووز! (+${pts})`,
          `🚀 عاش الصاروخ.. فرمت الصخر! (+${pts})`,
        ];
        setLastSmashMsg(cheers[Math.floor(Math.random() * cheers.length)]);

        if (newCombo % 5 === 0) {
          sounds.playAirhorn();
        }

        // Respawn item after brief delay
        setTimeout(() => {
          setActiveItems((curr) => {
            const next = [...curr];
            const template = INITIAL_ITEMS[Math.floor(Math.random() * INITIAL_ITEMS.length)];
            next[index] = {
              id: Date.now() + Math.random(),
              emoji: template.emoji,
              name: template.name,
              points: template.points,
              health: template.maxHealth,
              maxHealth: template.maxHealth,
              isBroken: false,
            };
            return next;
          });
        }, 350);
      } else {
        target.health = newHealth;
        setLastSmashMsg(`🔨 خبطة جامدة! لسة فاضل ضربة!`);
      }
      return copy;
    });
  };

  return (
    <div
      className={`relative bg-slate-900/95 backdrop-blur rounded-3xl p-4 md:p-6 shadow-2xl border-4 border-red-500 text-white transition-transform ${
        shake ? "scale-[0.99] -rotate-1" : ""
      }`}
    >
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between border-b border-slate-700 pb-3 mb-4 gap-2">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-red-500 to-orange-600 flex items-center justify-center text-2xl shadow-lg shadow-red-500/40">
            🔨
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-black text-amber-400 flex items-center gap-2">
              سماش مانيا — حلبة التكسير والدغدغة
              <Flame className="w-6 h-6 text-orange-500 animate-pulse" />
            </h2>
            <p className="text-xs md:text-sm text-slate-300">
              اضغط بأسرع ما عندك ودغدغ الحجارة والبراميل قبل ما الوقت يخلص!
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="bg-slate-800/80 px-4 py-2 rounded-xl border border-amber-500/40 flex items-center gap-2">
            <Trophy className="w-5 h-5 text-amber-400" />
            <span className="text-xs text-slate-400">أعلى رقم:</span>
            <span className="text-base font-black text-amber-300">{highScore}</span>
          </div>
        </div>
      </div>

      {/* Dashboard Stats */}
      <div className="grid grid-cols-3 gap-3 mb-5">
        <div className="bg-gradient-to-b from-slate-800 to-slate-900 border-2 border-red-500/40 rounded-2xl p-3 text-center shadow-lg">
          <div className="text-xs text-slate-400 mb-1">السكور الحالي 💥</div>
          <div className="text-2xl md:text-3xl font-black text-red-400 tracking-wider">
            {score}
          </div>
        </div>
        <div className="bg-gradient-to-b from-slate-800 to-slate-900 border-2 border-amber-500/40 rounded-2xl p-3 text-center shadow-lg">
          <div className="text-xs text-slate-400 mb-1">كومبو الشغب 🔥</div>
          <div className="text-2xl md:text-3xl font-black text-amber-400 tracking-wider">
            x{combo}
          </div>
        </div>
        <div className="bg-gradient-to-b from-slate-800 to-slate-900 border-2 border-cyan-500/40 rounded-2xl p-3 text-center shadow-lg">
          <div className="text-xs text-slate-400 mb-1">الوقت المتبقي ⏳</div>
          <div
            className={`text-2xl md:text-3xl font-black tracking-wider ${
              timeLeft <= 5 ? "text-red-500 animate-ping" : "text-cyan-400"
            }`}
          >
            {timeLeft}s
          </div>
        </div>
      </div>

      {/* Smash Arena Grid */}
      {isPlaying ? (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-5">
          {activeItems.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => handleSmash(idx)}
              disabled={item.isBroken}
              className={`relative h-32 md:h-36 rounded-2xl p-3 flex flex-col items-center justify-center transition-all duration-100 select-none active:scale-90 active:rotate-3 shadow-xl ${
                item.isBroken
                  ? "bg-slate-800/40 border-2 border-slate-700/50 opacity-40 scale-95"
                  : "bg-gradient-to-b from-slate-800 to-slate-950 border-3 border-amber-500/60 hover:border-amber-400 hover:shadow-amber-500/20 active:border-red-500"
              }`}
            >
              {/* Target Emoji */}
              <div
                className={`text-4xl md:text-5xl transition-transform ${
                  item.isBroken ? "scale-75 blur-[1px] rotate-12" : "hover:scale-110"
                }`}
              >
                {item.isBroken ? "💥" : item.emoji}
              </div>

              <div className="mt-2 text-xs md:text-sm font-bold text-slate-200">
                {item.name}
              </div>

              {/* Health Indicator */}
              {!item.isBroken && item.maxHealth > 1 && (
                <div className="flex gap-1 mt-1">
                  {Array.from({ length: item.maxHealth }).map((_, hIdx) => (
                    <div
                      key={hIdx}
                      className={`w-3 h-1.5 rounded-full ${
                        hIdx < item.health ? "bg-red-500" : "bg-slate-700"
                      }`}
                    />
                  ))}
                </div>
              )}

              {/* Point badge */}
              <div className="absolute top-2 right-2 text-[10px] font-black bg-red-600/80 text-white px-1.5 py-0.5 rounded-md">
                +{item.points}
              </div>
            </button>
          ))}
        </div>
      ) : (
        <div className="bg-slate-800/70 border-2 border-dashed border-slate-600 rounded-2xl p-8 text-center my-4">
          <div className="text-6xl mb-3 animate-bounce">🔨</div>
          <h3 className="text-xl font-black text-amber-400 mb-2">
            مستعد للتكسير والدغدغة يا زوز؟
          </h3>
          <p className="text-sm text-slate-300 max-w-md mx-auto mb-5">
            عندك 30 ثانية تدغدغ فيها كل الصخور، الصناديق والبراميل بأقصى سرعة ممكنة.. كل ما تجمع كومبو أعلى السكور بيتضاعف!
          </p>
          <button
            onClick={startGame}
            className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-red-600 via-orange-500 to-amber-500 text-white font-black text-lg shadow-xl shadow-red-600/40 hover:scale-105 active:scale-95 transition-transform flex items-center gap-2 mx-auto"
          >
            <Zap className="w-6 h-6 text-yellow-300 fill-yellow-300" />
            ابدأ معركة التكسير الآن!
          </button>
        </div>
      )}

      {/* Action Banner Message */}
      {lastSmashMsg && (
        <div className="bg-gradient-to-r from-red-950/60 via-slate-900 to-red-950/60 border border-red-500/50 rounded-2xl p-3 text-center text-sm md:text-base font-black text-amber-300 flex items-center justify-center gap-2 shadow-inner">
          <Sparkles className="w-5 h-5 text-amber-400 animate-spin" />
          <span>{lastSmashMsg}</span>
        </div>
      )}
    </div>
  );
}
