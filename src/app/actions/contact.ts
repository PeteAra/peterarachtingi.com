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

  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;

  if (!accessKey) {
    return {
      ok: false,
      message:
        "Contact form is not configured yet. Please email me directly at peterara89@gmail.com.",
    };
  }

  try {
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
      cache: "no-store",
    });

    const result = (await response.json()) as {
      success?: boolean;
      message?: string;
    };

    if (!response.ok || !result.success) {
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
