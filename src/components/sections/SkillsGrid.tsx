"use client";

import { motion } from "framer-motion";
import { Skill } from "@/types";

interface SkillsGridProps {
  skills: Skill[];
  category?: string;
}

export function SkillsGrid({ skills, category }: SkillsGridProps) {
  const filtered = category && category !== "all"
    ? skills.filter((s) => s.category === category)
    : skills;

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {filtered.map((skill, index) => (
        <motion.div
          key={skill.name}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
          whileHover={{ y: -4 }}
          className="group rounded-xl glow-border glow-border-hover bg-card/80 backdrop-blur-sm p-4"
        >
          <div className="flex items-center gap-3">
            <span className="text-2xl">{skill.icon}</span>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between">
                <p className="font-medium font-mono text-sm truncate">{skill.name}</p>
                <span className="text-xs font-mono text-accent ml-2 shrink-0">{skill.level}%</span>
              </div>
              <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-muted/60">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 + index * 0.05 }}
                  className="h-full rounded-full bg-gradient-to-r from-accent to-accent-secondary shadow-[0_0_8px_var(--glow)]"
                />
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
