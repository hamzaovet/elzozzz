"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Volume2,
  VolumeX,
  Flame,
  Trophy,
  Lock,
  QrCode,
  Sparkles,
  Zap,
  Bomb,
  Radio,
} from "lucide-react";
import PenaltyGame from "@/components/PenaltyGame";
import CarCrashArena from "@/components/CarCrashArena";
import MahraganDJ from "@/components/MahraganDJ";
import SmashMania from "@/components/SmashMania";
import SecretClubModal from "@/components/SecretClubModal";
import { sounds } from "@/lib/sounds";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<"penalty" | "crash" | "dj" | "smash">("penalty");
  const [isSecretClubOpen, setIsSecretClubOpen] = useState<boolean>(false);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [isRumbling, setIsRumbling] = useState<boolean>(false);

  const toggleSound = () => {
    const nextState = sounds.toggleSound();
    setSoundEnabled(nextState);
    if (nextState) {
      sounds.playKick();
    }
  };

  const triggerSirenRumble = () => {
    sounds.playAirhorn();
    sounds.vibrate([100, 50, 150, 50, 200]);
    setIsRumbling(true);
    setTimeout(() => {
      setIsRumbling(false);
    }, 600);
  };

  return (
    <div className={`space-y-6 ${isRumbling ? "animate-screen-rumble" : ""}`}>
      {/* Top Navigation Bar */}
      <header className="sticky top-2 z-40 bg-slate-900/90 backdrop-blur-md border-2 border-amber-500/50 rounded-3xl p-3 md:p-4 shadow-xl shadow-amber-500/10 flex flex-wrap items-center justify-between gap-3">
        {/* Brand Profile */}
        <div className="flex items-center gap-3">
          <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-2xl overflow-hidden border-2 border-amber-400 shadow-lg shadow-amber-500/30">
            <Image
              src="/zoz-face.jpg"
              alt="الكابتن زين"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div>
            <h1 className="text-lg md:text-2xl font-black text-amber-400 flex items-center gap-1.5 tracking-tight">
              عالم الزوز — El Zozzz
              <Flame className="w-5 h-5 text-orange-500 animate-pulse" />
            </h1>
            <p className="text-[11px] md:text-xs text-slate-300 font-semibold">
              مملكة الكابتن زين الأسطورية ⚽ (8 سنوات من الشغب والبطولات)
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 flex-wrap">
          {/* Siren Button */}
          <button
            onClick={triggerSirenRumble}
            title="سارينة الشغب وهز الشاشة"
            className="px-3 py-2 md:px-4 md:py-2.5 rounded-2xl bg-gradient-to-r from-red-600 to-orange-500 text-white font-black text-xs md:text-sm shadow-lg shadow-red-600/30 hover:scale-105 active:scale-95 transition flex items-center gap-1.5"
          >
            <Radio className="w-4 h-4 animate-spin text-yellow-300" />
            <span>سارينة الشغب! 📢</span>
          </button>

          {/* VIP Card Link */}
          <Link
            href="/card"
            className="px-3 py-2 md:px-4 md:py-2.5 rounded-2xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-black text-xs md:text-sm shadow-lg shadow-cyan-600/30 hover:scale-105 active:scale-95 transition flex items-center gap-1.5"
          >
            <QrCode className="w-4 h-4 text-cyan-200" />
            <span>كارت الكابتن 🎴</span>
          </Link>

          {/* Secret Club Button */}
          <button
            onClick={() => {
              sounds.playWhistle();
              setIsSecretClubOpen(true);
            }}
            className="px-3 py-2 md:px-4 md:py-2.5 rounded-2xl bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 font-black text-xs md:text-sm shadow-lg shadow-amber-500/30 hover:scale-105 active:scale-95 transition flex items-center gap-1.5"
          >
            <Lock className="w-4 h-4 text-slate-950" />
            <span>النادي السري 🔐</span>
          </button>

          {/* Sound Toggle */}
          <button
            onClick={toggleSound}
            aria-label="تبديل الصوت"
            className="p-2.5 rounded-2xl bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition"
          >
            {soundEnabled ? (
              <Volume2 className="w-5 h-5 text-amber-400" />
            ) : (
              <VolumeX className="w-5 h-5 text-slate-500" />
            )}
          </button>
        </div>
      </header>

      {/* Hero Stadium Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border-3 border-amber-500/60 p-5 md:p-8 shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-right max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-black mb-3">
              <Sparkles className="w-4 h-4 text-amber-400" />
              النسخة الذهبية الرسمية الحصرية للكابتن زين
            </div>
            <h2 className="text-2xl md:text-4xl font-black text-white leading-tight">
              أهلاً بكم في معقل{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-red-500">
                الكابتن زين (الزوز)
              </span>{" "}
              💥
            </h2>
            <p className="text-sm md:text-base text-slate-300 mt-3 leading-relaxed">
              رمز الشغب والمشاكسة، سلطان كورة القدم، مدغدغ العربيات الخارقة، وملك إيقاعات المهرجانات اللي بتلم الجيران! اختار لعبتك المفضلة تحت وانزل الملعب!
            </p>

            {/* Badges Bar */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5 mt-5">
              <div className="px-3 py-1.5 rounded-xl bg-slate-800/80 border border-slate-700 text-xs font-bold text-amber-300 flex items-center gap-1.5">
                ⚽ هداف الصواريخ
              </div>
              <div className="px-3 py-1.5 rounded-xl bg-slate-800/80 border border-slate-700 text-xs font-bold text-orange-400 flex items-center gap-1.5">
                🚜 تكسير سيارات 360°
              </div>
              <div className="px-3 py-1.5 rounded-xl bg-slate-800/80 border border-slate-700 text-xs font-bold text-cyan-300 flex items-center gap-1.5">
                🎧 دي جي وسارينات
              </div>
              <div className="px-3 py-1.5 rounded-xl bg-slate-800/80 border border-slate-700 text-xs font-bold text-red-400 flex items-center gap-1.5">
                🔨 دغدغة وسماش
              </div>
            </div>
          </div>

          {/* Hero Portrait Photo */}
          <div className="relative shrink-0">
            <div className="w-44 h-56 md:w-56 md:h-72 rounded-3xl overflow-hidden border-4 border-amber-400 shadow-2xl shadow-amber-500/40 relative">
              <Image
                src="/zoz.jpg"
                alt="الكابتن زين"
                fill
                className="object-cover object-top"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-2 inset-x-0 text-center">
                <span className="bg-amber-500 text-slate-950 font-black text-xs px-3 py-1 rounded-full shadow-md">
                  الكابتن زين — 8 سنوات 🏆
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Game Tabs Navigation */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5">
        <button
          onClick={() => {
            sounds.playKick();
            setActiveTab("penalty");
          }}
          className={`py-3.5 px-4 rounded-2xl font-black text-sm md:text-base flex items-center justify-center gap-2 transition-all ${
            activeTab === "penalty"
              ? "bg-gradient-to-r from-emerald-600 to-green-500 text-white shadow-lg shadow-emerald-600/40 scale-102 border-2 border-emerald-400"
              : "bg-slate-900/80 border-2 border-slate-800 text-slate-300 hover:border-emerald-500/40 hover:text-white"
          }`}
        >
          <span>⚽</span>
          <span>ضربات الجزاء والصواريخ</span>
        </button>

        <button
          onClick={() => {
            sounds.playCrash();
            setActiveTab("crash");
          }}
          className={`py-3.5 px-4 rounded-2xl font-black text-sm md:text-base flex items-center justify-center gap-2 transition-all ${
            activeTab === "crash"
              ? "bg-gradient-to-r from-amber-600 to-orange-500 text-white shadow-lg shadow-amber-600/40 scale-102 border-2 border-amber-400"
              : "bg-slate-900/80 border-2 border-slate-800 text-slate-300 hover:border-amber-500/40 hover:text-white"
          }`}
        >
          <span>🚜</span>
          <span>تكسير ودغدغة العربيات</span>
        </button>

        <button
          onClick={() => {
            sounds.playAirhorn();
            setActiveTab("dj");
          }}
          className={`py-3.5 px-4 rounded-2xl font-black text-sm md:text-base flex items-center justify-center gap-2 transition-all ${
            activeTab === "dj"
              ? "bg-gradient-to-r from-cyan-600 to-blue-500 text-white shadow-lg shadow-cyan-600/40 scale-102 border-2 border-cyan-400"
              : "bg-slate-900/80 border-2 border-slate-800 text-slate-300 hover:border-cyan-500/40 hover:text-white"
          }`}
        >
          <span>🎧</span>
          <span>دي جي وشغب المهرجانات</span>
        </button>

        <button
          onClick={() => {
            sounds.playCrash();
            setActiveTab("smash");
          }}
          className={`py-3.5 px-4 rounded-2xl font-black text-sm md:text-base flex items-center justify-center gap-2 transition-all ${
            activeTab === "smash"
              ? "bg-gradient-to-r from-red-600 to-rose-500 text-white shadow-lg shadow-red-600/40 scale-102 border-2 border-red-400"
              : "bg-slate-900/80 border-2 border-slate-800 text-slate-300 hover:border-red-500/40 hover:text-white"
          }`}
        >
          <span>🔨</span>
          <span>سماش مانيا والدغدغة</span>
        </button>
      </div>

      {/* Active Game Section */}
      <section className="transition-opacity duration-200">
        {activeTab === "penalty" && <PenaltyGame />}
        {activeTab === "crash" && <CarCrashArena />}
        {activeTab === "dj" && <MahraganDJ />}
        {activeTab === "smash" && <SmashMania />}
      </section>

      {/* Secret Club Modal */}
      <SecretClubModal
        isOpen={isSecretClubOpen}
        onClose={() => setIsSecretClubOpen(false)}
      />
    </div>
  );
}
