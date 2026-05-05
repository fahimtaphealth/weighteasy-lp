"use client";
import { motion } from "framer-motion";
import { Eyebrow, SectionTitle, SectionLede } from "./primitives";

const ease = [0.16, 1, 0.3, 1] as const;

const cards = [
  {
    n: "01",
    title: "Learns your nausea pattern",
    body: "After 3 shots, WeightEasy knows exactly when your nausea hits.",
    quote: "Your last 3 shots: nausea peaked at hour 13, 15, 14. Block 12–4pm Wednesday. Bone broth ready by 11.",
  },
  {
    n: "02",
    title: "Reads your hunger curve",
    body: "By day 10, it knows your real hunger windows on this dose — and protects them.",
    quote: "You hit protein when lunch lands by 12:40. After 1:15, you skip it 70% of the time. Eat at noon today.",
  },
  {
    n: "03",
    title: "Predicts plateaus before the scale does",
    body: "Cross-references your dose week, sleep, and 247 peers on the same protocol.",
    quote: "Plateau likely Day 41–48. Don't change anything. We'll tell you the day it breaks.",
  },
  {
    n: "04",
    title: "Coaches every dose bump",
    body: "Remembers how your body handled the last titration and adjusts the prep.",
    quote: "Last bump: 5 rough days. This time start electrolytes 48hrs early — should cut it to 3.",
  },
  {
    n: "05",
    title: "Protects your muscle in real time",
    body: "Reads protein vs. lean-mass risk daily — not weekly.",
    quote: "Protein hit 2 of 7 days. At this rate, ~38% of next month's loss is muscle. Add 25g at breakfast.",
  },
  {
    n: "06",
    title: "Knows your “quit moments”",
    body: "Learns the hours you've considered stopping, and shows up before the thought does.",
    quote: "It's 9pm Sunday. The last 2 weeks were hard. Here's what changes by Friday.",
  },
];

export default function CoachDifference() {
  return (
    <section
      id="coach-difference"
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
        <Eyebrow>The difference</Eyebrow>
        <SectionTitle>Trackers ask you questions. WeightEasy answers them.</SectionTitle>
        <SectionLede>
          Most GLP-1 apps hand you a chart and wish you luck. WeightEasy reads your patterns,
          predicts what&apos;s coming, and tells you the one thing to do about it today.
        </SectionLede>
      </motion.div>

      <div
        className="coach-grid"
        style={{
          marginTop: 56,
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 20,
        }}
      >
        {cards.map((c, i) => (
          <motion.article
            key={c.n}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: (i % 3) * 0.08, ease }}
            whileHover={{ y: -4 }}
            style={{
              padding: 28,
              borderRadius: 24,
              background: "var(--color-paper)",
              border: "0.5px solid var(--border-default)",
              display: "flex",
              flexDirection: "column",
              gap: 14,
              minHeight: 280,
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-marketing)",
                fontSize: 13,
                fontWeight: 700,
                color: "var(--color-brand-blue)",
                letterSpacing: "0.08em",
              }}
            >
              {c.n}
            </div>
            <h3
              style={{
                fontFamily: "var(--font-marketing)",
                fontSize: 22,
                fontWeight: 700,
                lineHeight: 1.2,
                color: "var(--color-ink-900)",
                margin: 0,
                letterSpacing: "-0.015em",
                textWrap: "balance",
              }}
            >
              {c.title}
            </h3>
            <p
              style={{
                fontFamily: "var(--font-marketing)",
                fontSize: 15.5,
                lineHeight: 1.5,
                color: "var(--color-ink-700)",
                margin: 0,
                textWrap: "pretty",
              }}
            >
              {c.body}
            </p>
            <div
              style={{
                marginTop: "auto",
                padding: "14px 16px",
                borderRadius: 14,
                background: "var(--primary-container)",
                fontFamily: "var(--font-marketing)",
                fontStyle: "italic",
                fontSize: 14,
                lineHeight: 1.45,
                color: "var(--color-ink-800)",
              }}
            >
              &ldquo;{c.quote}&rdquo;
            </div>
          </motion.article>
        ))}
      </div>

      <style>{`
        @media (max-width: 980px) {
          .coach-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .coach-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
