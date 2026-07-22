"use client";

import { useState, type FormEvent } from "react";
import { Send, CheckCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import styles from "./ContactForm.module.css";

interface FormData {
  name: string;
  email: string;
  message: string;
  company: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
  form?: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
    company: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate() || isSubmitting) return;

    if (formData.company) {
      setSubmitted(true);
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          company: formData.company,
        }),
      });

      const result = (await response.json()) as {
        ok?: boolean;
        message?: string;
      };

      if (!response.ok || !result.ok) {
        setErrors({
          form:
            result.message ||
            "Unable to send right now. Please email me directly at peterara89@gmail.com.",
        });
        return;
      }

      setSubmitted(true);
    } catch {
      setErrors({
        form: "Unable to reach the email service. Please email me directly at peterara89@gmail.com.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors] || errors.form) {
      setErrors((prev) => ({
        ...prev,
        [field]: undefined,
        form: undefined,
      }));
    }
  };

  if (submitted) {
    return (
      <div className={styles.success} role="status">
        <CheckCircle size={32} className={styles.successIcon} aria-hidden="true" />
        <h3 className={styles.successTitle}>Message sent!</h3>
        <p className={styles.successText}>
          Thank you for reaching out. I&apos;ll get back to you within 1–2 business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form} noValidate>
      <div className={styles.honeypot} aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input
          id="company"
          type="text"
          name="company"
          value={formData.company}
          onChange={(e) => handleChange("company", e.target.value)}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="name" className={styles.label}>
          Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          value={formData.name}
          onChange={(e) => handleChange("name", e.target.value)}
          className={`${styles.input} ${errors.name ? styles.inputError : ""}`}
          aria-describedby={errors.name ? "name-error" : undefined}
          aria-invalid={!!errors.name}
          autoComplete="name"
          disabled={isSubmitting}
        />
        {errors.name && (
          <p id="name-error" className={styles.error} role="alert">
            {errors.name}
          </p>
        )}
      </div>

      <div className={styles.field}>
        <label htmlFor="email" className={styles.label}>
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={(e) => handleChange("email", e.target.value)}
          className={`${styles.input} ${errors.email ? styles.inputError : ""}`}
          aria-describedby={errors.email ? "email-error" : undefined}
          aria-invalid={!!errors.email}
          autoComplete="email"
          disabled={isSubmitting}
        />
        {errors.email && (
          <p id="email-error" className={styles.error} role="alert">
            {errors.email}
          </p>
        )}
      </div>

      <div className={styles.field}>
        <label htmlFor="message" className={styles.label}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={(e) => handleChange("message", e.target.value)}
          rows={5}
          className={`${styles.textarea} ${errors.message ? styles.inputError : ""}`}
          aria-describedby={errors.message ? "message-error" : undefined}
          aria-invalid={!!errors.message}
          disabled={isSubmitting}
        />
        {errors.message && (
          <p id="message-error" className={styles.error} role="alert">
            {errors.message}
          </p>
        )}
      </div>

      {errors.form && (
        <p className={styles.error} role="alert">
          {errors.form}
        </p>
      )}

      <Button
        type="submit"
        variant="primary"
        className={styles.submit}
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            Sending…
            <Loader2 size={16} className={styles.spinner} aria-hidden="true" />
          </>
        ) : (
          <>
            Send Message
            <Send size={16} aria-hidden="true" />
          </>
        )}
      </Button>
    </form>
  );
}
