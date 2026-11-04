import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { pin } = await req.json();
    const cleanPin = (pin || "").toString().trim().toLowerCase();

    if (cleanPin === "zoz" || cleanPin === "2026") {
      return NextResponse.json({
        success: true,
        message: "Welcome to El-Zoz Champion Club! ⚽🔥",
        role: "champion",
      });
    }

    return NextResponse.json(
      { success: false, message: "رمز غير صحيح! كود الدخول هو حروف اسمك: zoz" },
      { status: 401 }
    );
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
