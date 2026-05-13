"use client";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const problems = [
  {
    title: "Nobody warned you about week 3.",
    body: "The nausea, the food noise going quiet, the hair in the shower. Most people quit right before it gets better.",
  },
  {
    title: "Generic apps just track. They don't coach.",
    body: "You log your weight, the app makes a chart. Cool — but what do you do tomorrow when the scale jumps after a bad night's sleep?",
  },
  {
    title: "Your doctor isn't there at 9pm on Sunday.",
    body: "The hardest moments don't happen in clinic hours. You shouldn't have to wait two weeks for an answer.",
  },
];

export default function Problem() {
  return (
    <section
      style={{
        padding: "120px 32px",
        background: "var(--surface-default)",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease }}
          style={{ textAlign: "center", maxWidth: 780, margin: "0 auto" }}
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
            GLP-1 has been hard.
          </h2>
          <p
            style={{
              fontFamily: "var(--font-marketing)",
              fontSize: 19,
              lineHeight: 1.55,
              color: "var(--color-ink-700)",
              marginTop: 18,
              textWrap: "pretty",
            }}
          >
            Three things almost every person on GLP-1 quietly admits.
          </p>
        </motion.div>

        <div
          className="problem-grid"
          style={{
            marginTop: 56,
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 20,
          }}
        >
          {problems.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease }}
              style={{
                padding: 28,
                borderRadius: 24,
                background: "var(--color-paper)",
                border: "0.5px solid var(--border-default)",
                display: "flex",
                flexDirection: "column",
                gap: 12,
                minHeight: 220,
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  background: "var(--primary-container)",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 4,
                }}
                aria-hidden
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="8.5" stroke="var(--color-brand-blue)" strokeWidth="1.5" />
                  <path d="M10 6V11" stroke="var(--color-brand-blue)" strokeWidth="1.8" strokeLinecap="round" />
                  <circle cx="10" cy="14" r="0.9" fill="var(--color-brand-blue)" />
                </svg>
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-marketing)",
                  fontSize: 22,
                  fontWeight: 700,
                  lineHeight: 1.2,
                  color: "var(--color-ink-900)",
                  letterSpacing: "-0.015em",
                  margin: 0,
                  textWrap: "balance",
                }}
              >
                {p.title}
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
                {p.body}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 920px) {
          .problem-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
