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

  const inputClasses =
    "w-full rounded-xl border border-accent/20 bg-card/80 backdrop-blur-sm px-4 py-3 text-sm transition-all placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent focus:shadow-[0_0_15px_-3px_var(--glow)]";

  if (status === "sent") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center rounded-2xl glow-border bg-card/80 backdrop-blur-sm p-12 text-center"
      >
        <CheckCircle className="h-12 w-12 text-accent-secondary" />
        <h3 className="mt-4 text-xl font-semibold">{t.contact.sentTitle}</h3>
        <p className="mt-2 text-muted-foreground">{t.contact.sentText}</p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-mono text-accent hover:underline"
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
          <label htmlFor="name" className="mb-2 block text-xs font-mono uppercase tracking-wider text-muted-foreground">
            {t.contact.name}
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder={t.contact.namePlaceholder}
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-xs font-mono uppercase tracking-wider text-muted-foreground">
            {t.contact.emailLabel}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder={t.contact.emailPlaceholder}
            className={inputClasses}
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="mb-2 block text-xs font-mono uppercase tracking-wider text-muted-foreground">
          {t.contact.subject}
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          placeholder={t.contact.subjectPlaceholder}
          className={inputClasses}
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-xs font-mono uppercase tracking-wider text-muted-foreground">
          {t.contact.message}
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          placeholder={t.contact.messagePlaceholder}
          className={`${inputClasses} resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-white shadow-[0_0_20px_-5px_var(--glow)] transition-all hover:bg-accent-dark hover:shadow-[0_0_30px_-5px_var(--glow)] disabled:opacity-70 sm:w-auto"
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
