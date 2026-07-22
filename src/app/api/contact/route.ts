import { NextResponse } from "next/server";
import { site } from "@/content/site";

interface ContactBody {
  name?: string;
  email?: string;
  message?: string;
  company?: string;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactBody;

    // Honeypot
    if (body.company) {
      return NextResponse.json({ ok: true });
    }

    const name = body.name?.trim() ?? "";
    const email = body.email?.trim() ?? "";
    const message = body.message?.trim() ?? "";

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, message: "Please fill in all fields." },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { ok: false, message: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (message.length < 10) {
      return NextResponse.json(
        { ok: false, message: "Message must be at least 10 characters." },
        { status: 400 }
      );
    }

    const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      return NextResponse.json(
        {
          ok: false,
          message:
            "Contact form is not configured yet. Please email me directly at peterara89@gmail.com.",
        },
        { status: 500 }
      );
    }

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: accessKey,
        name,
        email,
        message,
        subject: `Portfolio contact from ${name}`,
        from_name: "Peter Arachtingi Portfolio",
        replyto: email,
        to: site.email,
      }),
    });

    const text = await response.text();
    let result: { success?: boolean; message?: string } = {};
    try {
      result = JSON.parse(text) as { success?: boolean; message?: string };
    } catch {
      return NextResponse.json(
        {
          ok: false,
          message: `Email service returned an unexpected response (${response.status}).`,
        },
        { status: 502 }
      );
    }

    if (!response.ok || !result.success) {
      return NextResponse.json(
        {
          ok: false,
          message:
            result.message ||
            "Unable to send right now. Please email me directly at peterara89@gmail.com.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    const detail = error instanceof Error ? error.message : "Unknown error";
    console.error("[contact]", detail);
    return NextResponse.json(
      {
        ok: false,
        message: `Unable to reach the email service (${detail}). Please email me directly at peterara89@gmail.com.`,
      },
      { status: 500 }
    );
  }
}
