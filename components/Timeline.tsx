"use client";
import { motion } from "framer-motion";
import { Eyebrow, SectionTitle, SectionLede } from "./primitives";

const ease = [0.16, 1, 0.3, 1] as const;

const steps = [
  {
    milestone: "Day 1",
    title: "Onboarded in 6 questions.",
    body: "Knows your medication, dose, start date, sleep window, body, and goal. That's it.",
  },
  {
    milestone: "Week 1",
    title: "~20 data points logged.",
    body: "Predicts your nausea peak within ±1 day. Picks your 3 daily things.",
  },
  {
    milestone: "Week 4",
    title: "Full symptom signature.",
    body: "Suggests meals based on what you keep down — not a generic plan.",
  },
  {
    milestone: "Week 12",
    title: "Pattern locked.",
    body: "Knows your plateau rhythm, titration response, and weekend drift.",
  },
  {
    milestone: "Month 6",
    title: "Maintenance mode.",
    body: "The coach now knows you better than your last three doctors.",
  },
];

export default function Timeline() {
  return (
    <section
      id="timeline"
      style={{
        padding: "120px 32px",
        maxWidth: 1180,
        margin: "0 auto",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease }}
        style={{ maxWidth: 820 }}
      >
        <Eyebrow>Intelligence timeline</Eyebrow>
        <SectionTitle>The coach you have on day 90 is not the coach you started with.</SectionTitle>
        <SectionLede>
          Every log, every weigh-in, every &ldquo;rough morning&rdquo; sharpens it. WeightEasy compounds.
        </SectionLede>
      </motion.div>

      <div style={{ marginTop: 64, position: "relative" }}>
        {/* horizontal connector line, hidden on tablet/mobile */}
        <div
          className="timeline-line"
          style={{
            position: "absolute",
            top: 22,
            left: "8%",
            right: "8%",
            height: 2,
            background: "linear-gradient(to right, transparent, var(--color-brand-blue) 15%, var(--color-brand-blue) 85%, transparent)",
            opacity: 0.4,
            pointerEvents: "none",
          }}
        />

        <div
          className="timeline-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: 20,
            position: "relative",
          }}
        >
          {steps.map((s, i) => (
            <motion.div
              key={s.milestone}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.12, ease }}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: 14,
                padding: "0 4px",
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 999,
                  background: "var(--color-paper)",
                  border: "2px solid var(--color-brand-blue)",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "var(--font-marketing)",
                  fontSize: 14,
                  fontWeight: 700,
                  color: "var(--color-brand-blue)",
                  letterSpacing: "-0.01em",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                {i + 1}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-marketing)",
                  fontSize: 12,
                  fontWeight: 700,
                  color: "var(--color-brand-blue)",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                {s.milestone}
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-marketing)",
                  fontSize: 19,
                  fontWeight: 700,
                  lineHeight: 1.25,
                  color: "var(--color-ink-900)",
                  margin: 0,
                  letterSpacing: "-0.01em",
                  textWrap: "balance",
                }}
              >
                {s.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-marketing)",
                  fontSize: 14.5,
                  lineHeight: 1.5,
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
        @media (max-width: 980px) {
          .timeline-line { display: none !important; }
          .timeline-grid { grid-template-columns: repeat(2, 1fr) !important; row-gap: 36px !important; }
        }
        @media (max-width: 600px) {
          .timeline-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
