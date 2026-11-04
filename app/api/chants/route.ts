import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const chants = await prisma.voiceChant.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json({ success: true, chants });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
