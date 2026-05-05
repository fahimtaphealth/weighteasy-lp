"use client";
import { motion } from "framer-motion";
import { Eyebrow, SectionTitle, SectionLede } from "./primitives";
import PhoneMessage from "./phones/PhoneMessage";

const ease = [0.16, 1, 0.3, 1] as const;

const examples = [
  {
    header: "Week 4 · Tuesday 7:42am",
    message:
      "You've slept under 6 hours three nights in a row. That's why the scale jumped 1.2 lb today. It's water. Ignore it. Sleep tonight is the actual goal.",
    caption: "Pattern recognition",
    tone: "blue" as const,
    rotate: -1.5,
  },
  {
    header: "Dose bump in 36 hours",
    message:
      "Friday you move to 5mg. Starting tomorrow: extra electrolytes, lighter dinners, no new workouts. We've done this with you before — you'll be fine by Wednesday.",
    caption: "Pre-emptive coaching",
    tone: "warning" as const,
    rotate: 0,
  },
  {
    header: "Plateau · Day 6",
    message:
      "Last plateau, you cut calories and lost muscle. Don't repeat that. Hold the line — Day 9 is the breakthrough day for your pattern. We'll check in Tuesday.",
    caption: "Behavioral memory",
    tone: "success" as const,
    rotate: 1.5,
  },
];

export default function CoachInAction() {
  return (
    <section
      id="coach-in-action"
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
        style={{ maxWidth: 760 }}
      >
        <Eyebrow>Examples</Eyebrow>
        <SectionTitle>Three messages most apps would never send.</SectionTitle>
        <SectionLede>
          This is what coaching actually looks like. Specific, in-time, and based on your data.
        </SectionLede>
      </motion.div>

      <div
        className="coach-action-grid"
        style={{
          marginTop: 64,
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 32,
          alignItems: "start",
          justifyItems: "center",
        }}
      >
        {examples.map((e, i) => (
          <motion.div
            key={e.header}
            initial={{ opacity: 0, y: 32, rotate: e.rotate * 1.4 }}
            whileInView={{ opacity: 1, y: 0, rotate: e.rotate }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, delay: i * 0.12, ease }}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 18,
            }}
          >
            <PhoneMessage header={e.header} message={e.message} tone={e.tone} />
            <div
              style={{
                fontFamily: "var(--font-marketing)",
                fontStyle: "italic",
                fontSize: 14,
                color: "var(--color-ink-700)",
                textAlign: "center",
              }}
            >
              {e.caption}
            </div>
          </motion.div>
        ))}
      </div>

      <style>{`
        @media (max-width: 980px) {
          .coach-action-grid { grid-template-columns: 1fr !important; gap: 56px !important; }
        }
      `}</style>
    </section>
  );
}
