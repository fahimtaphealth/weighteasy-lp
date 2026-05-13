"use client";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { Eyebrow } from "./primitives";
import { PhoneFrame, StatusBar } from "./phones/PhoneFrame";

const ease = [0.16, 1, 0.3, 1] as const;

/* ---------- Compact phone mockups, sized to peek out of feature cards ---------- */

function MiniSymptomPhone() {
  return (
    <PhoneFrame width={208} height={420}>
      <StatusBar />
      <div style={{ padding: "4px 14px 14px" }}>
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
          Forecast · This week
        </div>
        <div
          style={{
            marginTop: 12,
            padding: 14,
            borderRadius: 14,
            background: "var(--color-paper)",
            border: "0.5px solid var(--border-default)",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-product)",
              fontSize: 10,
              fontWeight: 700,
              color: "var(--color-brand-blue)",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            Nausea peak
          </div>
          <div
            style={{
              fontFamily: "var(--font-marketing)",
              fontSize: 24,
              fontWeight: 700,
              color: "var(--color-ink-900)",
              marginTop: 4,
              letterSpacing: "-0.02em",
              lineHeight: 1,
            }}
          >
            Wed · 3:14 PM
          </div>
          <div style={{ marginTop: 12, display: "flex", gap: 4, alignItems: "flex-end", height: 44 }}>
            {[10, 18, 32, 60, 48, 28, 14].map((h, i) => (
              <div
                key={i}
                style={{
                  flex: 1,
                  height: `${h}%`,
                  borderRadius: 4,
                  background: i === 3 ? "var(--color-brand-blue)" : "var(--primary-container)",
                }}
              />
            ))}
          </div>
        </div>
        <div
          style={{
            marginTop: 10,
            padding: 10,
            borderRadius: 12,
            background: "var(--color-ink-900)",
            color: "var(--color-paper)",
            fontFamily: "var(--font-marketing)",
            fontSize: 11.5,
            lineHeight: 1.45,
          }}
        >
          Bone broth ready by 12. Reminder set.
        </div>
      </div>
    </PhoneFrame>
  );
}

function MiniMealPhone() {
  return (
    <PhoneFrame width={208} height={420}>
      <StatusBar />
      <div style={{ padding: "4px 14px 14px" }}>
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
          Lunch · 12:30
        </div>
        <div
          style={{
            marginTop: 12,
            padding: 14,
            borderRadius: 14,
            background: "var(--color-paper)",
            border: "0.5px solid var(--border-default)",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-product)",
              fontSize: 10,
              fontWeight: 700,
              color: "var(--color-brand-blue)",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            Protein floor · 92g
          </div>
          <div
            style={{
              fontFamily: "var(--font-marketing)",
              fontSize: 18,
              fontWeight: 700,
              color: "var(--color-ink-900)",
              marginTop: 4,
              letterSpacing: "-0.015em",
              lineHeight: 1.2,
            }}
          >
            Salmon bowl, brown rice
          </div>
          <div
            style={{
              fontFamily: "var(--font-product)",
              fontSize: 11,
              color: "var(--color-ink-500)",
              marginTop: 4,
            }}
          >
            480 kcal · 36g protein
          </div>
        </div>
        {["Greek yogurt + walnuts", "Chicken + roasted veg"].map((m) => (
          <div
            key={m}
            style={{
              marginTop: 8,
              padding: "8px 12px",
              borderRadius: 12,
              background: "var(--surface-container-low)",
              border: "0.5px solid var(--border-default)",
              fontFamily: "var(--font-product)",
              fontSize: 11.5,
              fontWeight: 500,
              color: "var(--color-ink-800)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
              {m}
            </span>
            <span
              style={{
                color: "var(--color-brand-blue)",
                fontSize: 11,
                fontWeight: 700,
              }}
            >
              ✓
            </span>
          </div>
        ))}
      </div>
    </PhoneFrame>
  );
}

function MiniChatPhone() {
  return (
    <PhoneFrame width={208} height={420}>
      <StatusBar />
      <div style={{ padding: "4px 14px 14px" }}>
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
          9:42 PM · Sunday
        </div>
        <div style={{ marginTop: 14, display: "flex", flexDirection: "column", gap: 8 }}>
          <div
            style={{
              alignSelf: "flex-end",
              maxWidth: "82%",
              padding: "8px 12px",
              borderRadius: 14,
              borderBottomRightRadius: 4,
              background: "var(--color-brand-blue)",
              color: "var(--color-paper)",
              fontFamily: "var(--font-marketing)",
              fontSize: 12.5,
              lineHeight: 1.4,
            }}
          >
            Scale jumped 1.2 lb. Should I worry?
          </div>
          <div
            style={{
              alignSelf: "flex-start",
              maxWidth: "88%",
              padding: "8px 12px",
              borderRadius: 14,
              borderBottomLeftRadius: 4,
              background: "var(--surface-container-low)",
              border: "0.5px solid var(--border-default)",
              fontFamily: "var(--font-marketing)",
              fontSize: 12.5,
              lineHeight: 1.45,
              color: "var(--color-ink-900)",
            }}
          >
            Three nights under 6 hours of sleep. It&apos;s water. Sleep tonight is the goal.
          </div>
          <div
            style={{
              alignSelf: "flex-start",
              padding: "6px 10px",
              borderRadius: 12,
              background: "var(--primary-container)",
              border: "0.5px solid var(--border-default)",
              fontFamily: "var(--font-product)",
              fontSize: 10.5,
              fontWeight: 700,
              color: "var(--color-brand-blue)",
            }}
          >
            ✓ Sleep reminder set
          </div>
        </div>
      </div>
    </PhoneFrame>
  );
}

/* ---------- Section ---------- */

type Card = { eyebrow: string; title: string; body: string; phone: ReactNode };

const cards: Card[] = [
  {
    eyebrow: "Symptom tracking",
    title: "We learn your nausea pattern.",
    body: "By your third shot we know when it peaks — within ±24 hours.",
    phone: <MiniSymptomPhone />,
  },
  {
    eyebrow: "Meal plans",
    title: "Food you'll actually eat.",
    body: "Built around what stays down on this dose, and your protein floor.",
    phone: <MiniMealPhone />,
  },
  {
    eyebrow: "24x7 AI coach",
    title: "An expert in your pocket.",
    body: "Answers grounded in your data, at 9pm on Sunday — not next week.",
    phone: <MiniChatPhone />,
  },
];

export default function Features() {
  return (
    <section
      id="features"
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
          <Eyebrow>Features</Eyebrow>
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
            Your personal GLP-1 coach, built for the journey.
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
            Three things WeightEasy does that no tracker can.
          </p>
        </motion.div>

        <div
          className="features-grid"
          style={{
            marginTop: 56,
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 20,
          }}
        >
          {cards.map((c, i) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease }}
              style={{
                padding: "32px 28px 0",
                borderRadius: 24,
                background: "var(--primary-container)",
                border: "0.5px solid var(--border-default)",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                gap: 12,
                minHeight: 460,
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-marketing)",
                  fontSize: 11.5,
                  fontWeight: 700,
                  color: "var(--color-brand-blue)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                0{i + 1} · {c.eyebrow}
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
                  fontSize: 14.5,
                  lineHeight: 1.5,
                  color: "var(--color-ink-700)",
                  margin: 0,
                  textWrap: "pretty",
                  maxWidth: 280,
                }}
              >
                {c.body}
              </p>

              {/* Phone mockup — clipped by the card's overflow:hidden */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.9, delay: 0.2 + i * 0.1, ease }}
                style={{
                  marginTop: "auto",
                  marginBottom: -80,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {c.phone}
              </motion.div>
            </motion.article>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 920px) {
          .features-grid { grid-template-columns: 1fr !important; gap: 24px !important; }
        }
      `}</style>
    </section>
  );
}
