import { NextResponse } from "next/server";
import { db } from "@/db";
import { privacyAuditLogs } from "@/db/schema";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { strictlyNecessary, functional, analytics, marketing } = body;

    await db.insert(privacyAuditLogs).values({
      sessionId: `sess_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      strictlyNecessary: Boolean(strictlyNecessary),
      functionalAccepted: Boolean(functional),
      analyticsAccepted: Boolean(analytics),
      marketingAccepted: Boolean(marketing),
      action: "consent_recorded",
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Privacy consent log error:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
