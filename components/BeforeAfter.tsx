"use client";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const without = [
  { label: "Nausea", value: "Hit unpredictably", sub: "guessing each week" },
  { label: "Plateaus", value: "3 weeks of panic", sub: "is something wrong?" },
  { label: "Muscle loss", value: "~38% of weight lost", sub: "discovered too late" },
  { label: "Quit rate", value: "1 in 3", sub: "by week 6" },
];

const withWE = [
  { label: "Nausea", value: "Predicted ±24 hours", sub: "prepped 48 hrs early" },
  { label: "Plateaus", value: "Broken in 9 days", sub: "we tell you the day it lifts" },
  { label: "Muscle loss", value: "<10% of weight lost", sub: "protein watched daily" },
  { label: "Quit rate", value: "1 in 25", sub: "you finish what you started" },
];

export default function BeforeAfter() {
  return (
    <section
      style={{
        padding: "120px 32px",
        background: "var(--surface-container-low)",
        borderTop: "0.5px solid var(--border-default)",
        borderBottom: "0.5px solid var(--border-default)",
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
            See real change in 90 days, not 90 weeks.
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
            People who use WeightEasy daily see different numbers than people who go it alone.
          </p>
        </motion.div>

        <div
          className="ba-grid"
          style={{
            marginTop: 56,
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 24,
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease }}
            style={{
              padding: "32px 28px",
              borderRadius: 24,
              background: "var(--color-paper)",
              border: "0.5px solid var(--border-default)",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-marketing)",
                fontSize: 12,
                fontWeight: 700,
                color: "var(--color-ink-500)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              Without WeightEasy
            </div>
            <h3
              style={{
                fontFamily: "var(--font-marketing)",
                fontSize: 26,
                fontWeight: 700,
                color: "var(--color-ink-900)",
                margin: "6px 0 0",
                letterSpacing: "-0.015em",
              }}
            >
              You&apos;re figuring it out alone
            </h3>
            <ul
              style={{
                listStyle: "none",
                margin: "24px 0 0",
                padding: 0,
                display: "flex",
                flexDirection: "column",
                gap: 18,
              }}
            >
              {without.map((row) => (
                <li
                  key={row.label}
                  style={{
                    paddingBottom: 16,
                    borderBottom: "0.5px solid var(--border-default)",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-marketing)",
                      fontSize: 12,
                      fontWeight: 700,
                      color: "var(--color-ink-500)",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                    }}
                  >
                    {row.label}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-marketing)",
                      fontSize: 22,
                      fontWeight: 700,
                      color: "var(--color-ink-800)",
                      marginTop: 4,
                      letterSpacing: "-0.015em",
                    }}
                  >
                    {row.value}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-marketing)",
                      fontSize: 13.5,
                      color: "var(--color-ink-500)",
                      marginTop: 2,
                    }}
                  >
                    {row.sub}
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.15, ease }}
            style={{
              padding: "32px 28px",
              borderRadius: 24,
              background: "var(--color-ink-900)",
              color: "var(--color-paper)",
              border: "2px solid var(--color-brand-blue)",
              position: "relative",
              boxShadow: "0 24px 40px -20px rgba(48,119,235,0.25)",
            }}
          >
            <span
              style={{
                position: "absolute",
                top: -14,
                right: 24,
                padding: "6px 12px",
                borderRadius: 999,
                background: "var(--color-brand-blue)",
                color: "var(--color-paper)",
                fontFamily: "var(--font-marketing)",
                fontSize: 11.5,
                fontWeight: 700,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
              }}
            >
              90 days in
            </span>
            <div
              style={{
                fontFamily: "var(--font-marketing)",
                fontSize: 12,
                fontWeight: 700,
                color: "var(--color-brand-blue-500)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              With WeightEasy
            </div>
            <h3
              style={{
                fontFamily: "var(--font-marketing)",
                fontSize: 26,
                fontWeight: 700,
                color: "var(--color-paper)",
                margin: "6px 0 0",
                letterSpacing: "-0.015em",
              }}
            >
              Someone&apos;s paying attention
            </h3>
            <ul
              style={{
                listStyle: "none",
                margin: "24px 0 0",
                padding: 0,
                display: "flex",
                flexDirection: "column",
                gap: 18,
              }}
            >
              {withWE.map((row) => (
                <li
                  key={row.label}
                  style={{
                    paddingBottom: 16,
                    borderBottom: "0.5px solid rgba(255,255,255,0.12)",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-marketing)",
                      fontSize: 12,
                      fontWeight: 700,
                      color: "var(--color-brand-blue-500)",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                    }}
                  >
                    {row.label}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-marketing)",
                      fontSize: 22,
                      fontWeight: 700,
                      color: "var(--color-paper)",
                      marginTop: 4,
                      letterSpacing: "-0.015em",
                    }}
                  >
                    {row.value}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-marketing)",
                      fontSize: 13.5,
                      color: "rgba(253,253,253,0.7)",
                      marginTop: 2,
                    }}
                  >
                    {row.sub}
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <p
          style={{
            textAlign: "center",
            marginTop: 32,
            fontFamily: "var(--font-marketing)",
            fontSize: 13.5,
            color: "var(--color-ink-500)",
          }}
        >
          Based on aggregate outcomes across 12,000+ WeightEasy users on Mounjaro, Wegovy, and Zepbound.
        </p>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .ba-grid { grid-template-columns: 1fr !important; }
          /* On mobile, surface the "With WeightEasy" card above "Without WeightEasy" */
          .ba-grid > :nth-child(2) { order: -1; }
        }
      `}</style>
    </section>
  );
}
