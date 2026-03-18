"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Send } from "lucide-react";
import Link from "next/link";
import { useLocale } from "@/hooks/useLocale";

export function Hero() {
  const { t } = useLocale();

  return (
    <section className="relative flex min-h-screen items-center justify-center px-6">
      {/* Background gradient orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-accent/20 blur-[100px]" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-accent-light/20 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-4 inline-block rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent">
            {t.hero.badge}
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
        >
          {t.hero.greeting}{" "}
          <span className="gradient-text">{t.site.name}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl"
        >
          {t.site.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/25 transition-all hover:bg-accent-dark hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-0.5"
          >
            <Send className="h-4 w-4" />
            {t.hero.cta}
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-6 py-3 text-sm font-semibold transition-all hover:bg-muted hover:-translate-y-0.5"
          >
            <Download className="h-4 w-4" />
            {t.hero.viewProjects}
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="h-5 w-5 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
}
