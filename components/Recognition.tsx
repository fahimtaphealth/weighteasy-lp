"use client";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const badges = [
  {
    label: "Trained on",
    value: "12,000+",
    sub: "real GLP-1 journeys",
  },
  {
    label: "Featured by",
    value: "Healthline",
    sub: "and TechCrunch",
  },
  {
    label: "Built with",
    value: "10+ clinicians",
    sub: "specializing in GLP-1",
  },
  {
    label: "App Store",
    value: "4.9★",
    sub: "across 2,100+ reviews",
  },
];

export default function Recognition() {
  return (
    <section
      style={{
        padding: "64px 32px",
        background: "var(--surface-default)",
        borderTop: "0.5px solid var(--border-default)",
        borderBottom: "0.5px solid var(--border-default)",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, ease }}
        style={{ maxWidth: 1180, margin: "0 auto", textAlign: "center" }}
      >
        <div
          style={{
            fontFamily: "var(--font-marketing)",
            fontSize: 12,
            fontWeight: 700,
            color: "var(--color-ink-500)",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: 24,
          }}
        >
          Recognized & trusted
        </div>
        <div
          className="recog-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 20,
            alignItems: "center",
          }}
        >
          {badges.map((b, i) => (
            <motion.div
              key={b.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease }}
              style={{ display: "flex", flexDirection: "column", gap: 4 }}
            >
              <div
                style={{
                  fontFamily: "var(--font-marketing)",
                  fontSize: 12,
                  fontWeight: 600,
                  color: "var(--color-ink-500)",
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                }}
              >
                {b.label}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-marketing)",
                  fontSize: "clamp(22px, 2.6vw, 28px)",
                  fontWeight: 700,
                  color: "var(--color-ink-900)",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.1,
                }}
              >
                {b.value}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-marketing)",
                  fontSize: 13,
                  color: "var(--color-ink-700)",
                }}
              >
                {b.sub}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <style>{`
        @media (max-width: 800px) {
          .recog-grid { grid-template-columns: repeat(2, 1fr) !important; row-gap: 32px !important; }
        }
      `}</style>
    </section>
  );
}
