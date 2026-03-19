"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Send } from "lucide-react";
import Link from "next/link";
import { useLocale } from "@/hooks/useLocale";
import { Particles } from "@/components/ui/Particles";
import { TypeWriter } from "@/components/ui/TypeWriter";

export function Hero() {
  const { t } = useLocale();

  const roles = t.hero.roles;

  return (
    <section className="relative flex min-h-screen items-center justify-center px-6 scanline">
      {/* Animated particles */}
      <Particles count={45} />

      {/* Dot grid background */}
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-40 dark:opacity-20" />

      {/* Gradient orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ x: [0, 30, -20, 0], y: [0, -20, 15, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-accent/20 blur-[120px]"
        />
        <motion.div
          animate={{ x: [0, -25, 20, 0], y: [0, 25, -10, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-accent-secondary/15 blur-[120px]"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-accent/10 blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-sm font-mono font-medium text-accent shadow-[0_0_10px_-3px_var(--glow)]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-secondary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-secondary" />
            </span>
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

        {/* Typewriter subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-4 h-10 flex items-center justify-center"
        >
          <TypeWriter
            words={roles}
            className="text-xl sm:text-2xl font-mono font-medium gradient-text"
            typingSpeed={70}
            deletingSpeed={35}
            pauseDuration={2500}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground sm:text-xl"
        >
          {t.site.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-white shadow-[0_0_20px_-5px_var(--glow)] transition-all hover:bg-accent-dark hover:shadow-[0_0_30px_-5px_var(--glow)] hover:-translate-y-0.5"
          >
            <Send className="h-4 w-4" />
            {t.hero.cta}
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-xl border border-accent/20 bg-card/80 backdrop-blur-sm px-6 py-3 text-sm font-semibold glow-border-hover transition-all hover:-translate-y-0.5"
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
          <ArrowDown className="h-5 w-5 neon-text" />
        </motion.div>
      </motion.div>
    </section>
  );
}
