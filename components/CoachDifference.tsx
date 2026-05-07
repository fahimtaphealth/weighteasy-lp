"use client";
import { motion } from "framer-motion";
import { Eyebrow, SectionTitle, SectionLede } from "./primitives";

const ease = [0.16, 1, 0.3, 1] as const;

const cards = [
  {
    n: "01",
    title: "Learns when your nausea hits",
    body: "By the third shot, it has your pattern. So you can plan around it instead of being surprised by it.",
    quote: "Your last 3 shots: nausea peaked at hour 13, 15, 14. Block 12–4pm Wednesday. Bone broth ready by 11.",
  },
  {
    n: "02",
    title: "Catches your real hunger windows",
    body: "By day 10 it knows when you actually want food on this dose — and quietly protects that window.",
    quote: "You hit protein when lunch lands by 12:40. After 1:15, you skip it 70% of the time. Eat at noon today.",
  },
  {
    n: "03",
    title: "Sees a plateau coming before the scale does",
    body: "Reads your dose week, sleep, and people who've walked this same path. So you don't panic on day 6.",
    quote: "Plateau likely Day 41–48. Don't change anything. We'll tell you the day it breaks.",
  },
  {
    n: "04",
    title: "Helps you handle the next dose bump",
    body: "Remembers how the last titration went, and gets you ready a couple of days early so it lands softer.",
    quote: "Last bump: 5 rough days. This time start electrolytes 48hrs early — should cut it to 3.",
  },
  {
    n: "05",
    title: "Watches your muscle, not just the scale",
    body: "Looks at protein and lean-mass risk daily — because nobody told you GLP-1 weight loss can hit muscle hard.",
    quote: "Protein hit 2 of 7 days. At this rate, ~38% of next month's loss is muscle. Add 25g at breakfast.",
  },
  {
    n: "06",
    title: "Shows up on the hard nights",
    body: "Learns when the doubts hit — Sunday night, the day after a slip — and gets there before the thought does.",
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
        <Eyebrow>What it actually does</Eyebrow>
        <SectionTitle>Most apps hand you a chart. We sit with you through it.</SectionTitle>
        <SectionLede>
          The hard parts of GLP-1 — the nausea windows, the plateaus, the dose bumps — aren&apos;t random.
          WeightEasy learns yours, and quietly tells you the one thing to do today.
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
