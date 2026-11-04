import type { Metadata, Viewport } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-cairo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "عالم الزوز — El Zozzz | ملعب ومملكة الكابتن زين ⚽💥",
  description: "الموقع واللعبة الرسمية للكابتن زين (الزوز) — ضربات جزاء، شغب المهرجانات، وتكسير ودغدغة السيارات الخارقة!",
  manifest: "/manifest.json",
  icons: {
    icon: "/app-icon.png",
    apple: "/app-icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
  themeColor: "#030712",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className={cairo.variable}>
      <head>
        <link rel="icon" href="/app-icon.png" />
      </head>
      <body className="bg-slate-950 text-slate-100 min-h-screen flex flex-col font-sans antialiased selection:bg-amber-500 selection:text-slate-950">
        <main className="flex-1 w-full max-w-7xl mx-auto px-3 sm:px-6 py-4">
          {children}
        </main>

        {/* Global Footer & Orca Watermark */}
        <footer className="w-full bg-slate-900/90 border-t border-slate-800 py-4 text-center text-xs md:text-sm text-slate-400">
          <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
            <div>
              ⚽ جميع الحقوق محفوظة للكابتن <span className="text-amber-400 font-bold">زين (الزوز)</span> 2026
            </div>
            <div className="text-slate-400 font-medium">
              تم التطوير بحب بواسطة <span className="text-cyan-400 font-bold">شركة أوركا لتقنية المعلومات</span> — 01018671000 🚀
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
