"use client";

import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { useMemo, useState, type FormEvent } from "react";
import { Loader2, Send, Sparkles } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";
import styles from "./AIConsultant.module.css";

const WELCOME =
  "Hi! I'm Peter's AI assistant.\n\nTell me about your business and I'll suggest ways software or AI could save you time or generate more revenue.";

const SUGGESTIONS = [
  "I run a small local business",
  "I need a new business website",
  "I want AI for my service business",
];

function messageText(message: {
  parts?: Array<{ type: string; text?: string }>;
}): string {
  if (!message.parts?.length) return "";
  return message.parts
    .filter((part) => part.type === "text" && part.text)
    .map((part) => part.text as string)
    .join("");
}

export function AIConsultant() {
  const [input, setInput] = useState("");
  const transport = useMemo(
    () => new DefaultChatTransport({ api: "/api/consultant" }),
    []
  );

  const { messages, sendMessage, status, error, clearError } = useChat({
    transport,
  });

  const isLoading = status === "submitted" || status === "streaming";

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const text = input.trim();
    if (!text || isLoading) return;
    clearError();
    sendMessage({ text });
    setInput("");
  };

  const handleSuggestion = (text: string) => {
    if (isLoading) return;
    clearError();
    sendMessage({ text });
  };

  return (
    <Section id="ai-consultant" variant="elevated" aria-labelledby="ai-heading">
      <Container>
        <SectionHeader
          eyebrow="AI Showcase"
          title="Try the AI business consultant"
          description="Ask about your business and get practical ideas for websites, automation, and AI — then start a project if it fits."
          id="ai-heading"
        />

        <FadeIn>
          <div className={styles.panel}>
            <div className={styles.panelHeader}>
              <div className={styles.badge}>
                <Sparkles size={16} aria-hidden="true" />
                <span>Live demo</span>
              </div>
              <p className={styles.panelNote}>
                Powered by Groq. Your message is processed securely through this
                site — not a third-party chat widget.
              </p>
            </div>

            <div className={styles.messages} role="log" aria-live="polite">
              <div className={`${styles.bubble} ${styles.assistant}`}>
                <p className={styles.role}>Peter&apos;s AI assistant</p>
                <p className={styles.text}>{WELCOME}</p>
              </div>

              {messages.map((message) => {
                const text = messageText(message);
                if (!text) return null;
                const isUser = message.role === "user";
                return (
                  <div
                    key={message.id}
                    className={`${styles.bubble} ${
                      isUser ? styles.user : styles.assistant
                    }`}
                  >
                    <p className={styles.role}>
                      {isUser ? "You" : "Peter\u2019s AI assistant"}
                    </p>
                    <p className={styles.text}>{text}</p>
                  </div>
                );
              })}

              {isLoading && (
                <div className={`${styles.bubble} ${styles.assistant}`}>
                  <p className={styles.role}>Peter&apos;s AI assistant</p>
                  <p className={styles.thinking}>
                    <Loader2 size={16} className={styles.spinner} />
                    Thinking…
                  </p>
                </div>
              )}
            </div>

            {error && (
              <p className={styles.error} role="alert">
                {(() => {
                  const msg = error.message.toLowerCase();
                  if (msg.includes("503") || msg.includes("configured")) {
                    return "The AI consultant isn’t configured yet. Use the contact form below and I’ll get back to you.";
                  }
                  if (
                    msg.includes("quota") ||
                    msg.includes("rate") ||
                    msg.includes("429") ||
                    msg.includes("resource_exhausted")
                  ) {
                    return "The free AI quota is temporarily exhausted. Please try again in a minute, or use the contact form below.";
                  }
                  return "Something went wrong. Please try again, or use the contact form below.";
                })()}
              </p>
            )}

            <div className={styles.suggestions}>
              {SUGGESTIONS.map((suggestion) => (
                <button
                  key={suggestion}
                  type="button"
                  className={styles.suggestion}
                  onClick={() => handleSuggestion(suggestion)}
                  disabled={isLoading}
                >
                  {suggestion}
                </button>
              ))}
            </div>

            <form className={styles.form} onSubmit={handleSubmit}>
              <label htmlFor="consultant-input" className="sr-only">
                Message the AI consultant
              </label>
              <input
                id="consultant-input"
                className={styles.input}
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Describe your business…"
                disabled={isLoading}
                autoComplete="off"
              />
              <Button type="submit" variant="primary" disabled={isLoading || !input.trim()}>
                {isLoading ? (
                  <Loader2 size={16} className={styles.spinner} />
                ) : (
                  <Send size={16} aria-hidden="true" />
                )}
                Send
              </Button>
            </form>

            <p className={styles.footerCta}>
              Ready to talk with Peter?{" "}
              <a href="#contact">Schedule a free consultation</a>
            </p>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}
