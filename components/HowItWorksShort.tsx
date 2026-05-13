"use client";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { PhoneFrame, StatusBar } from "./phones/PhoneFrame";

const ease = [0.16, 1, 0.3, 1] as const;

/* ---------- Compact phone mockups, one per step ---------- */

function PhoneOnboarding() {
  return (
    <PhoneFrame width={232} height={460}>
      <StatusBar />
      <div style={{ padding: "4px 16px 16px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontFamily: "var(--font-product)",
            fontSize: 11,
            fontWeight: 600,
            color: "var(--color-ink-500)",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
          }}
        >
          <span>Question 3 / 6</span>
          <span style={{ color: "var(--color-brand-blue)" }}>•••○○○</span>
        </div>

        <div
          style={{
            fontFamily: "var(--font-marketing)",
            fontSize: 17,
            fontWeight: 700,
            color: "var(--color-ink-900)",
            marginTop: 14,
            letterSpacing: "-0.015em",
            lineHeight: 1.2,
          }}
        >
          What&apos;s your current dose?
        </div>

        <div
          style={{
            marginTop: 16,
            display: "flex",
            flexDirection: "column",
            gap: 8,
          }}
        >
          {[
            { label: "0.5 mg", selected: false },
            { label: "1.0 mg", selected: false },
            { label: "2.5 mg", selected: true },
            { label: "5.0 mg", selected: false },
          ].map((d) => (
            <div
              key={d.label}
              style={{
                padding: "12px 14px",
                borderRadius: 14,
                border: d.selected
                  ? "2px solid var(--color-brand-blue)"
                  : "0.5px solid var(--border-default)",
                background: d.selected ? "var(--primary-container)" : "var(--color-paper)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                fontFamily: "var(--font-product)",
                fontSize: 13,
                fontWeight: d.selected ? 700 : 500,
                color: "var(--color-ink-900)",
              }}
            >
              {d.label}
              {d.selected && (
                <span
                  style={{
                    width: 18,
                    height: 18,
                    borderRadius: 999,
                    background: "var(--color-brand-blue)",
                    color: "var(--color-paper)",
                    fontSize: 10,
                    fontWeight: 700,
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  ✓
                </span>
              )}
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: 16,
            padding: "10px 14px",
            borderRadius: 999,
            background: "var(--color-ink-900)",
            color: "var(--color-paper)",
            textAlign: "center",
            fontFamily: "var(--font-product)",
            fontSize: 12,
            fontWeight: 700,
          }}
        >
          Continue
        </div>
      </div>
    </PhoneFrame>
  );
}

function PhoneDailyPlan() {
  return (
    <PhoneFrame width={232} height={460}>
      <StatusBar />
      <div style={{ padding: "4px 16px 16px" }}>
        <div
          style={{
            fontFamily: "var(--font-product)",
            fontSize: 11,
            fontWeight: 600,
            color: "var(--color-ink-500)",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
          }}
        >
          Wednesday · Day 14
        </div>
        <div
          style={{
            fontFamily: "var(--font-marketing)",
            fontSize: 17,
            fontWeight: 700,
            color: "var(--color-ink-900)",
            marginTop: 4,
            letterSpacing: "-0.015em",
          }}
        >
          Today, just 3 things
        </div>

        <div
          style={{
            marginTop: 14,
            display: "flex",
            flexDirection: "column",
            gap: 8,
          }}
        >
          {[
            { g: "💧", t: "25g protein at breakfast", s: "Greek yogurt + walnuts" },
            { g: "🚶", t: "10-min walk after lunch", s: "Best for your sugar" },
            { g: "🛏", t: "Lights out by 10:30", s: "Sleep does the work" },
          ].map((r) => (
            <div
              key={r.t}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "10px 12px",
                borderRadius: 14,
                background: "var(--surface-container-low)",
                border: "0.5px solid var(--border-default)",
              }}
            >
              <div
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 8,
                  background: "var(--color-paper)",
                  display: "grid",
                  placeItems: "center",
                  fontSize: 15,
                }}
              >
                {r.g}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div
                  style={{
                    fontFamily: "var(--font-product)",
                    fontSize: 12,
                    fontWeight: 600,
                    color: "var(--color-ink-900)",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {r.t}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-product)",
                    fontSize: 10.5,
                    color: "var(--color-ink-500)",
                    marginTop: 1,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {r.s}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: 12,
            padding: "10px 12px",
            borderRadius: 12,
            background: "var(--primary-container)",
            fontFamily: "var(--font-product)",
            fontSize: 11,
            color: "var(--color-brand-blue)",
            fontWeight: 600,
            textAlign: "center",
          }}
        >
          Plan built for your 2.5mg dose
        </div>
      </div>
    </PhoneFrame>
  );
}

function PhoneCoachInsight() {
  return (
    <PhoneFrame width={232} height={460}>
      <StatusBar />
      <div style={{ padding: "4px 16px 16px" }}>
        <div
          style={{
            fontFamily: "var(--font-product)",
            fontSize: 11,
            fontWeight: 700,
            color: "var(--color-brand-blue)",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          What we noticed
        </div>
        <div
          style={{
            fontFamily: "var(--font-marketing)",
            fontSize: 16,
            fontWeight: 700,
            color: "var(--color-ink-900)",
            marginTop: 6,
            letterSpacing: "-0.015em",
            lineHeight: 1.3,
          }}
        >
          You skip lunch when it lands after 1:15.
        </div>

        <div
          style={{
            marginTop: 12,
            padding: 12,
            borderRadius: 14,
            background: "var(--color-paper)",
            border: "0.5px solid var(--border-default)",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-product)",
              fontSize: 10.5,
              fontWeight: 700,
              color: "var(--color-ink-500)",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
            }}
          >
            Lunch protein this week
          </div>
          <div
            style={{
              display: "flex",
              gap: 5,
              alignItems: "flex-end",
              height: 50,
              marginTop: 10,
            }}
          >
            {[80, 55, 90, 18, 30, 75, 22].map((h, i) => (
              <div
                key={i}
                style={{
                  flex: 1,
                  height: `${h}%`,
                  borderRadius: 4,
                  background:
                    h < 40 ? "var(--color-warning-container)" : "var(--color-brand-blue)",
                }}
              />
            ))}
          </div>
          <div
            style={{
              fontFamily: "var(--font-product)",
              fontSize: 10,
              color: "var(--color-ink-500)",
              marginTop: 6,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span>M</span>
            <span>T</span>
            <span>W</span>
            <span>T</span>
            <span>F</span>
            <span>S</span>
            <span>S</span>
          </div>
        </div>

        <div
          style={{
            marginTop: 12,
            padding: "10px 12px",
            borderRadius: 12,
            background: "var(--color-ink-900)",
            color: "var(--color-paper)",
            fontFamily: "var(--font-marketing)",
            fontSize: 12.5,
            lineHeight: 1.45,
          }}
        >
          <div style={{ fontWeight: 700, opacity: 0.6, fontSize: 10, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 4 }}>
            Suggested
          </div>
          Set a 12:30 protein reminder for tomorrow?
        </div>
      </div>
    </PhoneFrame>
  );
}

/* ---------- Section ---------- */

const steps: { n: string; title: string; body: string; phone: ReactNode }[] = [
  {
    n: "Step 1",
    title: "Tell us about you in 6 questions",
    body: "Your medication, dose, sleep, body, and goal. Two minutes flat.",
    phone: <PhoneOnboarding />,
  },
  {
    n: "Step 2",
    title: "Your personal plan is built around you",
    body: "Meals you'll actually eat, the 3 things to do today, dose-bump prep when it matters.",
    phone: <PhoneDailyPlan />,
  },
  {
    n: "Step 3",
    title: "The coach learns you every day",
    body: "Each log makes the next nudge sharper. By week two, the advice feels like it knows you.",
    phone: <PhoneCoachInsight />,
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
            marginTop: 72,
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
            alignItems: "stretch",
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
                padding: "28px 24px 28px",
                borderRadius: 24,
                background: "var(--primary-container)",
                border: "0.5px solid var(--border-default)",
                display: "flex",
                flexDirection: "column",
                gap: 14,
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

              {/* Phone mockup */}
              <motion.div
                initial={{ opacity: 0, y: 16, rotate: -2 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.9, delay: 0.2 + i * 0.1, ease }}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: 16,
                  marginBottom: 4,
                }}
              >
                {s.phone}
              </motion.div>

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
          .hiws-grid { grid-template-columns: 1fr !important; gap: 28px !important; }
        }
      `}</style>
    </section>
  );
}
