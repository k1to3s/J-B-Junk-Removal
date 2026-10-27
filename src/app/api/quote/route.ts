import { NextResponse } from "next/server";
import { db } from "@/db";
import { quotes } from "@/db/schema";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      fullName,
      phone,
      email,
      zipCode,
      serviceType,
      preferredDate,
      preferredTime,
      description,
      estimatedVolume,
      photoUrls,
      honeypot, // Spam trap
    } = body;

    // 1. Honeypot check: if filled, silently reject spam bots
    if (honeypot && String(honeypot).trim().length > 0) {
      return NextResponse.json(
        { success: true, message: "Quote request received." },
        { status: 200 }
      );
    }

    // 2. Server-side validation
    const errors: Record<string, string> = {};

    if (!fullName || typeof fullName !== "string" || fullName.trim().length < 2) {
      errors.fullName = "Please provide your full name (at least 2 characters).";
    }

    // Clean and validate phone (at least 10 digits)
    const cleanedPhone = phone ? String(phone).replace(/\D/g, "") : "";
    if (!phone || cleanedPhone.length < 10) {
      errors.phone = "Please enter a valid 10-digit phone number.";
    }

    // Validate ZIP code (5 digits)
    const cleanedZip = zipCode ? String(zipCode).trim() : "";
    if (!cleanedZip || !/^\d{5}$/.test(cleanedZip)) {
      errors.zipCode = "Please enter a valid 5-digit California ZIP code (e.g. 92591).";
    }

    // Validate description
    if (!description || typeof description !== "string" || description.trim().length < 5) {
      errors.description = "Please provide a brief description of the items or junk to be hauled.";
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        { success: false, errors, message: "Validation failed. Please correct the highlighted fields." },
        { status: 400 }
      );
    }

    // 3. Database Insertion via Drizzle ORM
    const [inserted] = await db
      .insert(quotes)
      .values({
        fullName: fullName.trim(),
        phone: phone.trim(),
        email: email ? email.trim() : null,
        zipCode: cleanedZip,
        serviceType: serviceType || "general-junk-removal",
        preferredDate: preferredDate || null,
        preferredTime: preferredTime || null,
        description: description.trim(),
        estimatedVolume: estimatedVolume || "unspecified",
        photoUrls: Array.isArray(photoUrls) ? JSON.stringify(photoUrls) : null,
        status: "pending",
      })
      .returning({ id: quotes.id, createdAt: quotes.createdAt });

    return NextResponse.json(
      {
        success: true,
        quoteId: inserted.id,
        message: "Thank you! Your quote request has been received. Our Temecula dispatch team will contact you shortly with your free estimate.",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Quote submission error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "An unexpected error occurred while processing your quote. Please call us directly at (951) 555-5865.",
      },
      { status: 500 }
    );
  }
}
