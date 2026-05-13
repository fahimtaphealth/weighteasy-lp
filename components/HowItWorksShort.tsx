"use client";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const steps = [
  {
    n: "Step 1",
    title: "Tell us about you in 6 questions",
    body: "Your medication, dose, sleep, body, and goal. Two minutes flat.",
  },
  {
    n: "Step 2",
    title: "Your personal plan is built around you",
    body: "Meals you'll actually eat, the 3 things to do today, dose-bump prep when it matters.",
  },
  {
    n: "Step 3",
    title: "The coach learns you every day",
    body: "Each log makes the next nudge sharper. By week two, the advice feels like it knows you.",
  },
];

export default function HowItWorksShort() {
  return (
    <section
      style={{
        padding: "120px 32px",
        background: "var(--surface-default)",
      }}
    >
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease }}
          style={{ textAlign: "center", maxWidth: 820, margin: "0 auto" }}
        >
          <h2
            style={{
              fontFamily: "var(--font-marketing)",
              fontSize: "clamp(38px, 5.4vw, 60px)",
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.025em",
              color: "var(--color-ink-900)",
              margin: 0,
              textWrap: "balance",
            }}
          >
            Smart GLP-1 coaching in 3 easy steps.
          </h2>
        </motion.div>

        <div
          className="hiws-grid"
          style={{
            marginTop: 64,
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 20,
          }}
        >
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease }}
              style={{
                position: "relative",
                padding: 28,
                borderRadius: 24,
                background: "var(--primary-container)",
                border: "0.5px solid var(--border-default)",
                display: "flex",
                flexDirection: "column",
                gap: 14,
                minHeight: 220,
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: -16,
                  left: 24,
                  padding: "6px 14px",
                  borderRadius: 999,
                  background: "var(--color-brand-blue)",
                  color: "var(--color-paper)",
                  fontFamily: "var(--font-marketing)",
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                {s.n}
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-marketing)",
                  fontSize: 22,
                  fontWeight: 700,
                  lineHeight: 1.2,
                  color: "var(--color-ink-900)",
                  margin: "12px 0 0",
                  letterSpacing: "-0.015em",
                  textWrap: "balance",
                }}
              >
                {s.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-marketing)",
                  fontSize: 15.5,
                  lineHeight: 1.55,
                  color: "var(--color-ink-700)",
                  margin: 0,
                  textWrap: "pretty",
                }}
              >
                {s.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 920px) {
          .hiws-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
