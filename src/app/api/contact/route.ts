import { NextResponse } from "next/server";

type ContactPayload = {
  fullName?: string;
  email?: string;
  phone?: string;
  message?: string;
};

const TO_EMAIL = "chriss1@shining-blue.com";
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;
    const fullName = body.fullName?.trim() ?? "";
    const email = body.email?.trim() ?? "";
    const phone = body.phone?.trim() ?? "";
    const message = body.message?.trim() ?? "";

    if (!fullName || !email || !message) {
      return NextResponse.json(
        { error: "Full Name, Email, and Message are required." },
        { status: 400 },
      );
    }

    if (!EMAIL_PATTERN.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const fromEmail = process.env.CONTACT_FROM_EMAIL;

    if (!resendApiKey || !fromEmail) {
      return NextResponse.json(
        { error: "Server email is not configured." },
        { status: 500 },
      );
    }

    const text = [
      "New website contact submission",
      "",
      `Full Name: ${fullName}`,
      `Email: ${email}`,
      `Phone: ${phone || "N/A"}`,
      "",
      "Message:",
      message,
    ].join("\n");

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [TO_EMAIL],
        reply_to: email,
        subject: "Website Consultation Request",
        text,
      }),
    });

    if (!resendResponse.ok) {
      const resendError = await resendResponse.text();
      console.error("Resend API error:", resendError);
      return NextResponse.json(
        { error: "Unable to send your message right now. Please try again." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact submission error:", error);
    return NextResponse.json(
      { error: "Unable to send your message right now. Please try again." },
      { status: 500 },
    );
  }
}
