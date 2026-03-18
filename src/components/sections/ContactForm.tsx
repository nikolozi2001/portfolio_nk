"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, Loader2, CheckCircle } from "lucide-react";
import { useLocale } from "@/hooks/useLocale";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const { t } = useLocale();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center rounded-2xl border border-border bg-card p-12 text-center"
      >
        <CheckCircle className="h-12 w-12 text-green-500" />
        <h3 className="mt-4 text-xl font-semibold">{t.contact.sentTitle}</h3>
        <p className="mt-2 text-muted-foreground">{t.contact.sentText}</p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm text-accent hover:underline"
        >
          {t.contact.sendAnother}
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            {t.contact.name}
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder={t.contact.namePlaceholder}
            className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm transition-colors placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium">
            {t.contact.emailLabel}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder={t.contact.emailPlaceholder}
            className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm transition-colors placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="mb-2 block text-sm font-medium">
          {t.contact.subject}
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          placeholder={t.contact.subjectPlaceholder}
          className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm transition-colors placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium">
          {t.contact.message}
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          placeholder={t.contact.messagePlaceholder}
          className="w-full resize-none rounded-xl border border-border bg-card px-4 py-3 text-sm transition-colors placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/25 transition-all hover:bg-accent-dark hover:shadow-xl disabled:opacity-70 sm:w-auto"
      >
        {status === "sending" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            {t.contact.sending}
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            {t.contact.send}
          </>
        )}
      </button>
    </form>
  );
}
