"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

type Item = { q: string; a: string };

const faqs: Item[] = [
  {
    q: "What does WeightEasy do?",
    a: "WeightEasy is a coach for your GLP-1 journey. It learns your dose, symptoms, sleep, and patterns — then quietly tells you the one or two things to do today. No charts to decode, no plans to second-guess. Just someone in your corner.",
  },
  {
    q: "Do I need a prescription to use WeightEasy?",
    a: "Yes. WeightEasy is designed to work alongside a GLP-1 medication you already have prescribed. We don't prescribe or sell medication.",
  },
  {
    q: "Do I get symptom dependent guidance on the platform?",
    a: "Yes. The more you log, the more it tunes to you — nausea windows, fatigue patterns, food aversions, the whole thing. By week two, the guidance you see is shaped around your body, not a generic protocol.",
  },
  {
    q: "How does the fitness plan work on the platform?",
    a: "It starts gentle and follows your energy. We protect lean mass with light resistance work and small daily wins, and we back off on the days your body needs rest. You won't see a 30-day shred plan here — that's not how GLP-1 bodies respond.",
  },
  {
    q: "How can the AI coach help me in my journey?",
    a: "It pays attention. It catches the bad sleep before the scale jumps, preps you 48 hours before a dose bump, and reminds you that a plateau on day 6 is supposed to break by day 9. Less doom-scrolling forums at midnight, more knowing what's coming.",
  },
  {
    q: "How does the meal plan work?",
    a: "Meals are built around what you'll actually keep down on this dose, your protein floor, and your cycle if it's relevant. It learns the meals you skipped and the ones that landed — and quietly stops suggesting the ones that didn't.",
  },
  {
    q: "How does the free trial work?",
    a: "The yearly plan starts with a 7-day free trial — full access, no half-features. You won't be charged until day 7, and we'll remind you the day before so it's never a surprise. Cancel anytime in one tap.",
  },
  {
    q: "Is my health data private?",
    a: "Yes. Your data is yours. We don't sell it, share it with advertisers, or train external models on it. You can export or delete everything from inside the app, any time.",
  },
];

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <span
      style={{
        width: 28,
        height: 28,
        borderRadius: 999,
        background: open ? "var(--color-brand-blue)" : "var(--primary-container)",
        color: open ? "var(--color-paper)" : "var(--color-brand-blue)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "background 200ms ease, color 200ms ease",
        flexShrink: 0,
      }}
      aria-hidden
    >
      <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
        {open ? (
          <line x1="2" y1="5.5" x2="9" y2="5.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        ) : (
          <>
            <line x1="2" y1="5.5" x2="9" y2="5.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            <line x1="5.5" y1="2" x2="5.5" y2="9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </>
        )}
      </svg>
    </span>
  );
}

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number>(1); // "Do I need a prescription" open by default, like the reference

  return (
    <section
      id="faq"
      style={{
        padding: "120px 32px",
        maxWidth: 920,
        margin: "0 auto",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease }}
        style={{ textAlign: "center" }}
      >
        <span
          style={{
            display: "inline-block",
            padding: "6px 14px",
            borderRadius: 999,
            background: "var(--primary-container)",
            color: "var(--color-brand-blue)",
            fontFamily: "var(--font-marketing)",
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: 20,
          }}
        >
          FAQ
        </span>
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
          Every question we hear.
        </h2>
      </motion.div>

      <div style={{ marginTop: 56 }}>
        {faqs.map((item, i) => {
          const open = openIdx === i;
          return (
            <motion.div
              key={item.q}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.04, ease }}
              style={{
                borderTop: i === 0 ? "0.5px solid var(--border-default)" : "none",
                borderBottom: "0.5px solid var(--border-default)",
              }}
            >
              <button
                onClick={() => setOpenIdx(open ? -1 : i)}
                aria-expanded={open}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 16,
                  padding: "22px 4px",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                  fontFamily: "var(--font-marketing)",
                  fontSize: "clamp(16px, 1.6vw, 18px)",
                  fontWeight: 700,
                  color: "var(--color-ink-900)",
                  letterSpacing: "-0.01em",
                }}
              >
                <span style={{ textWrap: "balance" }}>{item.q}</span>
                <ChevronIcon open={open} />
              </button>
              <AnimatePresence initial={false}>
                {open && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease }}
                    style={{ overflow: "hidden" }}
                  >
                    <p
                      style={{
                        fontFamily: "var(--font-marketing)",
                        fontSize: 16.5,
                        lineHeight: 1.6,
                        color: "var(--color-ink-700)",
                        margin: 0,
                        padding: "0 60px 24px 4px",
                        textWrap: "pretty",
                      }}
                    >
                      {item.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
