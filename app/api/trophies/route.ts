import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const trophies = await prisma.secretClubTrophy.findMany({
      orderBy: { id: "asc" },
    });
    return NextResponse.json({ success: true, trophies });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
