"use client";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const stats = [
  { value: "40+", label: "signals tracked daily" },
  { value: "±24h", label: "nausea-peak prediction by week 2" },
  { value: "81%", label: "predicted plateaus break in 14 days" },
  { value: "3", label: "things on your list today. Never more." },
  { value: "41s", label: "average daily check-in" },
  { value: "12k+", label: "GLP-1 journeys learned from" },
];

export default function Stats() {
  return (
    <section
      style={{
        background: "var(--color-ink-900)",
        color: "var(--color-paper)",
        padding: "72px 32px",
      }}
    >
      <div
        className="stats-grid"
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(6, 1fr)",
          gap: 24,
        }}
      >
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: i * 0.06, ease }}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 8,
              textAlign: "left",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-marketing)",
                fontSize: "clamp(36px, 4vw, 52px)",
                fontWeight: 700,
                lineHeight: 1,
                letterSpacing: "-0.02em",
                color: "var(--color-brand-blue-500)",
              }}
            >
              {s.value}
            </div>
            <div
              style={{
                fontFamily: "var(--font-marketing)",
                fontSize: 13.5,
                lineHeight: 1.4,
                color: "rgba(253,253,253,0.72)",
                textWrap: "pretty",
              }}
            >
              {s.label}
            </div>
          </motion.div>
        ))}
      </div>
      <style>{`
        @media (max-width: 1000px) {
          .stats-grid { grid-template-columns: repeat(3, 1fr) !important; row-gap: 36px !important; }
        }
        @media (max-width: 600px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
