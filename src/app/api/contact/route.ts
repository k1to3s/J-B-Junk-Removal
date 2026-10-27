import { NextResponse } from "next/server";
import { db } from "@/db";
import { contactMessages } from "@/db/schema";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, phone, email, subject, message, honeypot } = body;

    // Honeypot spam trap
    if (honeypot && String(honeypot).trim().length > 0) {
      return NextResponse.json({ success: true, message: "Message received." });
    }

    const errors: Record<string, string> = {};
    if (!fullName || fullName.trim().length < 2) {
      errors.fullName = "Please enter your name.";
    }
    if (!phone || String(phone).replace(/\D/g, "").length < 10) {
      errors.phone = "Please enter a valid 10-digit phone number.";
    }
    if (!message || message.trim().length < 10) {
      errors.message = "Please write a message of at least 10 characters.";
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ success: false, errors }, { status: 400 });
    }

    await db.insert(contactMessages).values({
      fullName: fullName.trim(),
      phone: phone.trim(),
      email: email ? email.trim() : null,
      subject: subject || "General Inquiry",
      message: message.trim(),
    });

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for contacting J&B Junk Removal. We will respond to your inquiry as soon as possible.",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Contact message error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send message. Please call us directly." },
      { status: 500 }
    );
  }
}
