"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Lock, Unlock, Trophy, Heart, Volume2, X, Star, Sparkles, ShieldCheck, CheckCircle2 } from "lucide-react";
import { sounds } from "@/lib/sounds";

interface TrophyItem {
  id: number;
  title: string;
  category: string;
  icon: string;
  description: string;
  unlockedAt: string;
}

interface GoalItem {
  id: number;
  strikerName: string;
  goalType: string;
  speedKmh: number;
  stadium: string;
  createdAt: string;
}

interface SecretClubModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SecretClubModal({ isOpen, onClose }: SecretClubModalProps) {
  const [pin, setPin] = useState<string>("");
  const [isUnlocked, setIsUnlocked] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [trophies, setTrophies] = useState<TrophyItem[]>([]);
  const [goals, setGoals] = useState<GoalItem[]>([]);
  const [isPlayingDad, setIsPlayingDad] = useState<boolean>(false);

  // Check saved state in session
  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = sessionStorage.getItem("zoz_unlocked");
      if (saved === "true") {
        setIsUnlocked(true);
        fetchClubData();
      }
    }
  }, []);

  const fetchClubData = async () => {
    try {
      const [trophiesRes, goalsRes] = await Promise.all([
        fetch("/api/trophies"),
        fetch("/api/goals"),
      ]);

      if (trophiesRes.ok) {
        const data = await trophiesRes.json();
        if (data.trophies) setTrophies(data.trophies);
      }

      if (goalsRes.ok) {
        const data = await goalsRes.json();
        if (data.goals) setGoals(data.goals);
      }
    } catch (e) {
      console.warn("Failed to load club data:", e);
    }
  };

  const handleCharClick = (char: string) => {
    sounds.playKick();
    if (pin.length < 5) {
      const newPin = pin + char;
      setPin(newPin);
      if (newPin.toLowerCase() === "zoz") {
        verifyPin(newPin);
      }
    }
  };

  const handleBackspace = () => {
    sounds.playKick();
    setPin((p) => p.slice(0, -1));
    setErrorMsg("");
  };

  const handleClear = () => {
    sounds.playWhistle();
    setPin("");
    setErrorMsg("");
  };

  const verifyPin = async (codeToVerify?: string) => {
    const targetPin = (codeToVerify || pin).trim().toLowerCase();
    setLoading(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/auth/pin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pin: targetPin }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        sounds.playAirhorn();
        setIsUnlocked(true);
        if (typeof window !== "undefined") {
          sessionStorage.setItem("zoz_unlocked", "true");
        }
        fetchClubData();
      } else {
        sounds.playCrash();
        setErrorMsg(data.message || "كود الدخول غير صحيح! حروف اسمك zoz");
      }
    } catch (err: any) {
      setErrorMsg("حدث خطأ أثناء التأكد من الكود");
    } finally {
      setLoading(false);
    }
  };

  const handlePlayDadAudio = () => {
    setIsPlayingDad(true);
    sounds.cheerDad();
    setTimeout(() => {
      setIsPlayingDad(false);
    }, 8000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto bg-slate-950 border-4 border-amber-500 rounded-3xl p-5 md:p-8 text-white shadow-2xl shadow-amber-500/20">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition"
        >
          <X className="w-6 h-6" />
        </button>

        {!isUnlocked ? (
          /* PIN LOCK SCREEN */
          <div className="flex flex-col items-center text-center py-4">
            <div className="w-20 h-20 rounded-3xl bg-gradient-to-tr from-amber-500 to-yellow-300 p-1 shadow-lg shadow-amber-500/30 mb-4 animate-bounce">
              <div className="w-full h-full bg-slate-900 rounded-[22px] flex items-center justify-center">
                <Lock className="w-10 h-10 text-amber-400" />
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-black text-amber-400 mb-2">
              نادي الكابتن زين السري ⚽🔐
            </h2>
            <p className="text-sm text-slate-300 max-w-sm mb-6">
              منطقة سرية خاصة بالبطل الزوز فقط! اكتب بين كود اسمك للدخول:
            </p>

            {/* PIN Display */}
            <div className="flex gap-3 mb-6">
              {["Z", "O", "Z"].map((letter, i) => (
                <div
                  key={i}
                  className={`w-14 h-16 rounded-2xl flex items-center justify-center text-3xl font-black border-2 transition-all duration-200 ${
                    pin.length > i
                      ? "bg-amber-500 border-amber-400 text-slate-950 scale-105 shadow-lg shadow-amber-500/40"
                      : "bg-slate-900 border-slate-700 text-slate-600"
                  }`}
                >
                  {pin.length > i ? pin[i].toUpperCase() : "•"}
                </div>
              ))}
            </div>

            {errorMsg && (
              <div className="mb-4 text-xs md:text-sm font-bold text-red-400 bg-red-950/60 border border-red-500/50 rounded-xl px-4 py-2">
                {errorMsg}
              </div>
            )}

            {/* Quick Letter Keypad */}
            <div className="grid grid-cols-3 gap-3 w-full max-w-xs mb-6">
              {["Z", "O", "Z"].map((letter, idx) => (
                <button
                  key={idx}
                  onClick={() => handleCharClick(letter.toLowerCase())}
                  className="h-14 rounded-2xl bg-gradient-to-b from-slate-800 to-slate-900 border-2 border-slate-700 hover:border-amber-400 active:scale-95 text-2xl font-black text-amber-300 shadow-md transition"
                >
                  {letter}
                </button>
              ))}
            </div>

            {/* Keypad controls */}
            <div className="flex gap-3 w-full max-w-xs mb-6">
              <button
                onClick={handleBackspace}
                className="flex-1 py-2.5 rounded-xl bg-slate-800 border border-slate-700 hover:bg-slate-700 text-sm font-bold text-slate-300 transition"
              >
                مسح حرف ⌫
              </button>
              <button
                onClick={handleClear}
                className="flex-1 py-2.5 rounded-xl bg-slate-800 border border-slate-700 hover:bg-slate-700 text-sm font-bold text-slate-300 transition"
              >
                إعادة ضبط 🔄
              </button>
            </div>

            {/* Submit Button */}
            <button
              onClick={() => verifyPin()}
              disabled={loading || pin.length === 0}
              className="w-full max-w-xs py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 text-slate-950 font-black text-lg shadow-xl shadow-amber-500/30 hover:scale-105 active:scale-95 transition disabled:opacity-50"
            >
              {loading ? "جاري الفتح..." : "افتح الخزنة السرية! 🚀"}
            </button>
          </div>
        ) : (
          /* UNLOCKED CLUB VIEW */
          <div className="space-y-6 pt-2">
            {/* VIP Champion Banner */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-amber-600/30 via-slate-900 to-cyan-900/30 border-2 border-amber-500/50 p-5 flex flex-col md:flex-row items-center gap-5">
              <div className="relative w-24 h-24 rounded-2xl overflow-hidden border-3 border-amber-400 shadow-xl shadow-amber-500/40 shrink-0">
                <Image
                  src="/zoz-face.jpg"
                  alt="الكابتن زين"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-center md:text-right">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-bold mb-1.5">
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                  عضوية كابتن الجيل الذهبي — VIP
                </div>
                <h3 className="text-2xl font-black text-amber-300">
                  أهلاً بك يا كابتن زين (الزوز)! ⚽👑
                </h3>
                <p className="text-xs md:text-sm text-slate-300 mt-1">
                  نجم النجوم وسلطان المشاكسة والشغب الكروي والتكسير رقم #1!
                </p>
              </div>
            </div>

            {/* Dad's Personal Voice Message */}
            <div className="bg-gradient-to-br from-red-950/50 via-slate-900 to-slate-900 border-2 border-red-500/50 rounded-2xl p-4 md:p-5 shadow-lg">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-xl bg-red-600/30 border border-red-500 flex items-center justify-center text-xl">
                    ❤️
                  </div>
                  <div>
                    <h4 className="text-base font-black text-white flex items-center gap-2">
                      رسالة خاصة ومباشرة من بابا
                      <Heart className="w-4 h-4 text-red-500 fill-red-500" />
                    </h4>
                    <p className="text-xs text-slate-400">بصوت ومحبة بابا الغالي</p>
                  </div>
                </div>

                <button
                  onClick={handlePlayDadAudio}
                  className={`px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 transition ${
                    isPlayingDad
                      ? "bg-amber-500 text-slate-950 animate-pulse"
                      : "bg-red-600 hover:bg-red-500 text-white shadow-lg shadow-red-600/30"
                  }`}
                >
                  <Volume2 className="w-4 h-4" />
                  {isPlayingDad ? "شغالة الآن 🔊" : "اسمع صوت بابا 📢"}
                </button>
              </div>

              <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-3 text-sm text-amber-200/90 leading-relaxed italic">
                &ldquo;يا حبيبي يا زوز.. يا أعظم وأشطر كابتن في الدنيا! ربنا يحفظك يا حبيب قلبي وتفضل دايماً فخرنا ومنور حياتنا كلها بشقاوتك وضحكتك اللي بالدنيا!&rdquo;
              </div>
            </div>

            {/* Trophy Cabinet */}
            <div>
              <h4 className="text-lg font-black text-amber-400 mb-3 flex items-center gap-2">
                <Trophy className="w-5 h-5 text-amber-400" />
                خزانة الكؤوس والبطولات الذهبية 🏆
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  {
                    icon: "🥇",
                    title: "الحذاء الذهبي",
                    desc: "هداف الدوري بـ 150 صاروخ",
                  },
                  {
                    icon: "🏆",
                    title: "كأس السوبر العالمي",
                    desc: "بطل ديربي التكسير والشغب",
                  },
                  {
                    icon: "🌟",
                    title: "الكرة الذهبية 2026",
                    desc: "أفضل لاعب مشاكس في التاريخ",
                  },
                  {
                    icon: "🎧",
                    title: "مايك المهرجانات",
                    desc: "سلطان الدي جي وهز الاستاد",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-900 border border-amber-500/30 rounded-2xl p-3 text-center hover:border-amber-400 transition"
                  >
                    <div className="text-3xl mb-1.5">{item.icon}</div>
                    <div className="text-xs font-bold text-amber-300">{item.title}</div>
                    <div className="text-[10px] text-slate-400 mt-1">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Lock Again / Actions */}
            <div className="flex flex-wrap items-center justify-between border-t border-slate-800 pt-4 gap-3">
              <div className="text-xs text-slate-400">
                كود سري محفوظ: <span className="font-mono text-amber-400 font-bold">zoz</span>
              </div>
              <button
                onClick={() => {
                  sounds.playWhistle();
                  setIsUnlocked(false);
                  setPin("");
                  if (typeof window !== "undefined") {
                    sessionStorage.removeItem("zoz_unlocked");
                  }
                }}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-300 transition flex items-center gap-1.5"
              >
                <Lock className="w-4 h-4 text-amber-400" />
                قفل النادي السري 🔒
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
