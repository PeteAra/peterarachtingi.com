"use server";

import { site } from "@/content/site";

export interface ContactPayload {
  name: string;
  email: string;
  message: string;
}

export interface ContactResult {
  ok: boolean;
  message: string;
}

export async function sendContactMessage(
  payload: ContactPayload
): Promise<ContactResult> {
  const name = payload.name.trim();
  const email = payload.email.trim();
  const message = payload.message.trim();

  if (!name || !email || !message) {
    return { ok: false, message: "Please fill in all fields." };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, message: "Please enter a valid email address." };
  }

  if (message.length < 10) {
    return {
      ok: false,
      message: "Message must be at least 10 characters.",
    };
  }

  try {
    const origin =
      process.env.NEXT_PUBLIC_SITE_URL ??
      site.url ??
      "https://peterarachtingi.vercel.app";

    const response = await fetch(
      `https://formsubmit.co/ajax/${encodeURIComponent(site.email)}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Origin: origin,
          Referer: `${origin}/`,
        },
        body: JSON.stringify({
          name,
          email,
          message,
          _replyto: email,
          _subject: `Portfolio contact from ${name}`,
          _template: "table",
        }),
        cache: "no-store",
      }
    );

    const result = (await response.json()) as {
      success?: boolean | string;
      message?: string;
    };

    if (result.success === false || result.success === "false") {
      const detail = (result.message ?? "").toLowerCase();

      if (detail.includes("activation") || detail.includes("activate")) {
        return {
          ok: false,
          message:
            "Almost there — FormSubmit emailed peterara89@gmail.com an “Activate Form” link. Click it once, then submit again.",
        };
      }

      return {
        ok: false,
        message:
          result.message ||
          "Unable to send right now. Please email me directly at peterara89@gmail.com.",
      };
    }

    if (!response.ok) {
      return {
        ok: false,
        message:
          result.message ||
          "Unable to send right now. Please email me directly at peterara89@gmail.com.",
      };
    }

    return {
      ok: true,
      message: "Message sent successfully.",
    };
  } catch {
    return {
      ok: false,
      message:
        "Unable to reach the email service. Please email me directly at peterara89@gmail.com.",
    };
  }
}
