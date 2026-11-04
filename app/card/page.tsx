"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import QRCode from "qrcode";
import {
  Trophy,
  Flame,
  Share2,
  Printer,
  ArrowRight,
  Download,
  Smartphone,
  Globe,
  Lock,
  Sparkles,
  Zap,
} from "lucide-react";
import { sounds } from "@/lib/sounds";

export default function ZozCardPage() {
  const [webQr, setWebQr] = useState<string>("");
  const [apkQr, setApkQr] = useState<string>("");
  const [copied, setCopied] = useState<boolean>(false);

  useEffect(() => {
    const origin =
      typeof window !== "undefined"
        ? window.location.origin
        : process.env.NEXT_PUBLIC_APP_URL || "https://elzozzz.vercel.app";

    const webUrl = origin;
    const apkUrl = `${origin}/api/download/apk`;

    // High-contrast sporty gold & cyan QR codes
    QRCode.toDataURL(webUrl, {
      width: 320,
      margin: 1,
      color: { dark: "#0f172a", light: "#ffffff" },
    }).then(setWebQr);

    QRCode.toDataURL(apkUrl, {
      width: 320,
      margin: 1,
      color: { dark: "#083344", light: "#ffffff" },
    }).then(setApkQr);
  }, []);

  const handleShare = async () => {
    sounds.playAirhorn();
    const shareUrl =
      typeof window !== "undefined"
        ? window.location.origin
        : "https://elzozzz.vercel.app";
    if (navigator.share) {
      try {
        await navigator.share({
          title: "كارت عضوية الكابتن زين (الزوز) VIP ⚽💥",
          text: "امسح الكيو ار كود والعب مع الكابتن زين أقوى ماتشات ضربات جزاء وتكسير سيارات وشغب مهرجانات! كود الدخول السري: zoz",
          url: shareUrl,
        });
      } catch (e) {}
    } else {
      await navigator.clipboard.writeText(
        `امسح الكيو ار كود والعب مع الكابتن زين (الزوز)! ${shareUrl} — كود الدخول السري: zoz`
      );
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handlePrint = () => {
    sounds.playWhistle();
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <div className="min-h-screen py-4 md:py-8 max-w-4xl mx-auto space-y-6">
      {/* Top Navigation */}
      <div className="flex items-center justify-between no-print px-2">
        <Link
          href="/"
          onClick={() => sounds.playKick()}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-slate-900 border border-slate-700 hover:border-amber-400 text-slate-200 text-sm font-bold transition"
        >
          <ArrowRight className="w-4 h-4 text-amber-400" />
          الرجوع للملعب والألعاب ⚽
        </Link>

        <div className="flex items-center gap-2">
          <button
            onClick={handleShare}
            className="px-4 py-2 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-black text-sm shadow-lg shadow-amber-500/20 hover:scale-105 active:scale-95 transition flex items-center gap-1.5"
          >
            <Share2 className="w-4 h-4" />
            <span>{copied ? "تم النسخ بنجاح! ✓" : "مشاركة الكارت 📢"}</span>
          </button>
          <button
            onClick={handlePrint}
            className="px-4 py-2 rounded-2xl bg-slate-800 border border-slate-700 text-white font-bold text-sm hover:bg-slate-700 transition flex items-center gap-1.5"
          >
            <Printer className="w-4 h-4 text-cyan-400" />
            <span>طباعة 🖨️</span>
          </button>
        </div>
      </div>

      {/* Official Printable VIP Card */}
      <div
        id="zoz-vip-card"
        className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border-4 border-amber-500 shadow-2xl p-6 md:p-8 text-white max-w-2xl mx-auto"
      >
        {/* Glow Effects */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />

        {/* Card Header */}
        <div className="flex items-center justify-between border-b-2 border-amber-500/40 pb-4 mb-5">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500 animate-ping" />
            <span className="text-xs md:text-sm font-black tracking-widest text-amber-400 uppercase">
              EL-ZOZZZ VIP CHAMPION CARD
            </span>
          </div>
          <div className="flex items-center gap-1 text-xs font-black bg-amber-500/20 border border-amber-400/50 px-3 py-1 rounded-full text-amber-300">
            <Trophy className="w-4 h-4 text-amber-400" />
            <span>كابتن الجيل الذهبي 🏆</span>
          </div>
        </div>

        {/* Card Body Profile */}
        <div className="flex flex-col sm:flex-row items-center gap-5 mb-6 text-center sm:text-right">
          <div className="relative w-28 h-36 md:w-32 md:h-40 rounded-2xl overflow-hidden border-3 border-amber-400 shadow-xl shadow-amber-500/30 shrink-0">
            <Image
              src="/zoz.jpg"
              alt="الكابتن زين"
              fill
              className="object-cover object-top"
              priority
            />
          </div>

          <div className="space-y-1.5 flex-1">
            <h2 className="text-2xl md:text-3xl font-black text-amber-300">
              الكابتن زين (الزوز) ⚽👑
            </h2>
            <div className="text-sm font-bold text-cyan-300 flex items-center justify-center sm:justify-start gap-1.5">
              <Flame className="w-4 h-4 text-orange-500" />
              <span>8 سنوات — رمز الشغب والمشاكسة والبطولات</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed pt-1">
              هداف الصواريخ الكروية • بطل ديربي تكسير السيارات • سلطان شغب المهرجانات وسارينات الاستاد!
            </p>

            <div className="inline-flex items-center gap-2 bg-slate-900 border border-amber-500/40 px-3 py-1 rounded-xl text-xs font-mono font-black text-amber-400 mt-2">
              <Lock className="w-3.5 h-3.5 text-amber-400" />
              <span>كود النادي السري: zoz</span>
            </div>
          </div>
        </div>

        {/* TWO QR CODES SECTION */}
        <div className="grid grid-cols-2 gap-4 bg-slate-900/90 border-2 border-slate-800 rounded-2xl p-4 mb-5">
          {/* QR 1: Website */}
          <div className="flex flex-col items-center text-center">
            <div className="text-xs font-black text-amber-400 mb-1.5 flex items-center gap-1">
              <Globe className="w-3.5 h-3.5" />
              <span>الموقع أونلاين 🌐</span>
            </div>
            <div className="bg-white p-2 rounded-xl shadow-md border-2 border-amber-400/50">
              {webQr ? (
                <img
                  src={webQr}
                  alt="QR كود الموقع"
                  className="w-24 h-24 md:w-28 md:h-28 object-contain"
                />
              ) : (
                <div className="w-24 h-24 md:w-28 md:h-28 bg-slate-200 animate-pulse rounded-lg" />
              )}
            </div>
            <span className="text-[10px] text-slate-400 mt-1 font-semibold">
              امسح للعب بالمتصفح
            </span>
          </div>

          {/* QR 2: APK Download */}
          <div className="flex flex-col items-center text-center">
            <div className="text-xs font-black text-cyan-400 mb-1.5 flex items-center gap-1">
              <Smartphone className="w-3.5 h-3.5" />
              <span>تحميل الأبليكيشن 📲</span>
            </div>
            <div className="bg-white p-2 rounded-xl shadow-md border-2 border-cyan-400/50">
              {apkQr ? (
                <img
                  src={apkQr}
                  alt="QR كود تحميل APK"
                  className="w-24 h-24 md:w-28 md:h-28 object-contain"
                />
              ) : (
                <div className="w-24 h-24 md:w-28 md:h-28 bg-slate-200 animate-pulse rounded-lg" />
              )}
            </div>
            <span className="text-[10px] text-slate-400 mt-1 font-semibold">
              امسح لتنزيل APK مباشر
            </span>
          </div>
        </div>

        {/* Direct APK Download Button */}
        <div className="no-print mb-5 text-center">
          <a
            href="/api/download/apk"
            onClick={() => sounds.playAirhorn()}
            download
            className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-2xl bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-600 text-white font-black text-sm shadow-xl shadow-emerald-600/30 hover:scale-[1.02] active:scale-98 transition"
          >
            <Download className="w-5 h-5 animate-bounce" />
            <span>تحميل تطبيق الأندرويد مباشرة (APK) — نسخة الزوز الرسمية 🚀</span>
          </a>
        </div>

        {/* Official Card Watermark */}
        <div className="border-t border-slate-800 pt-3 text-center text-[11px] text-slate-400 font-medium">
          تم التطوير بحب للكابتن <span className="text-amber-400 font-bold">زين</span> بواسطة{" "}
          <span className="text-cyan-400 font-bold">شركة أوركا لتقنية المعلومات</span> — 01018671000 🚀
        </div>
      </div>

      {/* Standalone Card Download Option */}
      <div className="text-center no-print pt-2">
        <a
          href="/zoz-official-card.png"
          download="zoz-official-card.png"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-slate-800 hover:bg-slate-700 border border-amber-500/50 text-amber-300 font-bold text-sm shadow-lg transition"
        >
          <Download className="w-4 h-4" />
          <span>تحميل صورة الكارت عالية الجودة منفصلة (PNG) 🖼️</span>
        </a>
      </div>
    </div>
  );
}
