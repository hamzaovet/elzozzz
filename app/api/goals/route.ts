import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const goals = await prisma.goalRecord.findMany({
      orderBy: { createdAt: "desc" },
      take: 20,
    });
    return NextResponse.json({ success: true, goals });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const { strikerName, goalType, speedKmh, stadium } = await req.json();

    const goal = await prisma.goalRecord.create({
      data: {
        strikerName: strikerName || "الكابتن زين (الزوز) ⚽",
        goalType: goalType || "صاروخ في المقص 🚀",
        speedKmh: Number(speedKmh) || 125,
        stadium: stadium || "استاد الزوز الدولي 🏟️",
      },
    });

    return NextResponse.json({ success: true, goal });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
