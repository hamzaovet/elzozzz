import { NextResponse, NextRequest } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const releaseUrl =
    "https://github.com/hamzaovet/elzozzz/releases/download/v1.0.0/elzozzz.apk";
  const downloadUrl =
    process.env.APK_DOWNLOAD_URL ||
    releaseUrl ||
    new URL("/downloads/elzozzz.apk", req.url).toString();

  return NextResponse.redirect(downloadUrl, {
    status: 302,
    headers: {
      "Cache-Control": "no-store, max-age=0",
      "Content-Disposition": 'attachment; filename="elzozzz.apk"',
    },
  });
}
