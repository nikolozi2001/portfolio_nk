import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Code, Coffee, MapPin, GraduationCap } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about Nika Kachibaia — Full Stack Developer",
};

const stats = [
  { icon: Code, label: "Years in IT", value: "7+" },
  { icon: GraduationCap, label: "Education", value: "CS @ Ilia State" },
  { icon: Coffee, label: "Projects Built", value: "80+" },
  { icon: MapPin, label: "Based in", value: "Tbilisi, GE" },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeading
        title="About Me"
        subtitle="A passionate developer building real-world systems for data, maps, and the web."
      />

      <div className="mt-16 grid gap-12 lg:grid-cols-5">
        {/* Photo */}
        <AnimatedSection className="lg:col-span-2">
          <div className="aspect-square overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-accent/20 to-accent-light/20">
            <div className="flex h-full items-center justify-center">
              <span className="text-8xl font-bold text-accent/30">NK</span>
            </div>
          </div>
        </AnimatedSection>

        {/* Bio */}
        <AnimatedSection className="lg:col-span-3 space-y-6" delay={0.1}>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I&apos;m Nika Kachibaia — a Full Stack Developer based in Tbilisi,
              Georgia. I currently work at the <strong className="text-foreground">National Statistics Office
              of Georgia (GeoStat)</strong> where I build and maintain web
              applications, database systems, GIS platforms, and statistical
              data portals.
            </p>
            <p>
              I studied <strong className="text-foreground">Computer Engineering</strong> at
              Ilia State University and have completed additional training in
              React, Python, JavaScript, Linux administration, Google Cloud,
              and cybersecurity. My skill set spans frontend (React, Next.js,
              TypeScript), backend (Node.js, PHP, SQL), and GIS technologies
              (GeoServer, OpenLayers).
            </p>
            <p>
              With 7+ years of total IT experience, I&apos;ve worked on everything
              from interactive data visualization portals and AI chatbots to
              mobile apps and e-commerce platforms. I&apos;m passionate about
              building tools that make data accessible and useful.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 pt-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-border bg-card p-4"
              >
                <stat.icon className="h-5 w-5 text-accent" />
                <p className="mt-2 text-2xl font-bold">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
