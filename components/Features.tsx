"use client";
import { motion } from "framer-motion";
import { Eyebrow } from "./primitives";
import { PhoneFrame, StatusBar } from "./phones/PhoneFrame";

const ease = [0.16, 1, 0.3, 1] as const;

function PhoneSymptomTracker() {
  return (
    <PhoneFrame width={280} height={580}>
      <StatusBar />
      <div style={{ padding: "8px 18px 18px" }}>
        <div
          style={{
            fontFamily: "var(--font-product)",
            fontSize: 13,
            fontWeight: 700,
            color: "var(--color-ink-700)",
          }}
        >
          Symptoms
        </div>
        <div
          style={{
            marginTop: 14,
            padding: 16,
            borderRadius: 16,
            background: "var(--color-paper)",
            border: "0.5px solid var(--border-default)",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-product)",
              fontSize: 11,
              fontWeight: 700,
              color: "var(--color-brand-blue)",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
            }}
          >
            Nausea forecast
          </div>
          <div
            style={{
              fontFamily: "var(--font-marketing)",
              fontSize: 28,
              fontWeight: 700,
              color: "var(--color-ink-900)",
              marginTop: 6,
              letterSpacing: "-0.02em",
            }}
          >
            Wed · 3:00 PM
          </div>
          <div
            style={{
              fontFamily: "var(--font-product)",
              fontSize: 12,
              color: "var(--color-ink-500)",
              marginTop: 4,
            }}
          >
            Your peak window, like the last 3 weeks
          </div>
          <div style={{ marginTop: 14, display: "flex", gap: 6, alignItems: "flex-end", height: 60 }}>
            {[10, 18, 32, 60, 48, 28, 14].map((h, i) => (
              <div
                key={i}
                style={{
                  flex: 1,
                  height: `${h}%`,
                  borderRadius: 6,
                  background: i === 3 ? "var(--color-brand-blue)" : "var(--primary-container)",
                }}
              />
            ))}
          </div>
        </div>
        <div
          style={{
            marginTop: 12,
            padding: 14,
            borderRadius: 16,
            background: "var(--color-ink-900)",
            color: "var(--color-paper)",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-product)",
              fontSize: 11,
              fontWeight: 700,
              opacity: 0.6,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
            }}
          >
            Prep for Wednesday
          </div>
          <div
            style={{
              fontFamily: "var(--font-marketing)",
              fontSize: 14,
              fontWeight: 500,
              marginTop: 6,
              lineHeight: 1.5,
            }}
          >
            Bone broth in the fridge by 12. Block 2:30–4:30. We&apos;ll text you a reminder.
          </div>
        </div>
      </div>
    </PhoneFrame>
  );
}

function PhoneMealPlan() {
  return (
    <PhoneFrame width={280} height={580}>
      <StatusBar />
      <div style={{ padding: "8px 18px 18px" }}>
        <div
          style={{
            fontFamily: "var(--font-product)",
            fontSize: 13,
            fontWeight: 700,
            color: "var(--color-ink-700)",
          }}
        >
          Today&apos;s meals
        </div>
        <div
          style={{
            marginTop: 14,
            padding: 16,
            borderRadius: 16,
            background: "var(--color-paper)",
            border: "0.5px solid var(--border-default)",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-product)",
              fontSize: 11,
              fontWeight: 700,
              color: "var(--color-brand-blue)",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
            }}
          >
            Protein floor · 92g
          </div>
          <div
            style={{
              fontFamily: "var(--font-marketing)",
              fontSize: 22,
              fontWeight: 700,
              color: "var(--color-ink-900)",
              marginTop: 6,
              letterSpacing: "-0.015em",
            }}
          >
            Built for this dose
          </div>
        </div>
        {[
          { title: "Greek yogurt + walnuts", kcal: 320, p: "28g" },
          { title: "Salmon bowl, brown rice", kcal: 480, p: "36g" },
          { title: "Chicken + roasted veg", kcal: 410, p: "34g" },
        ].map((m) => (
          <div
            key={m.title}
            style={{
              marginTop: 10,
              padding: 12,
              borderRadius: 14,
              background: "var(--surface-container-low)",
              border: "0.5px solid var(--border-default)",
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            <div
              style={{
                width: 34,
                height: 34,
                borderRadius: 10,
                background: "var(--primary-container)",
              }}
            />
            <div style={{ flex: 1 }}>
              <div
                style={{
                  fontFamily: "var(--font-product)",
                  fontSize: 13,
                  fontWeight: 600,
                  color: "var(--color-ink-900)",
                }}
              >
                {m.title}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-product)",
                  fontSize: 11,
                  color: "var(--color-ink-500)",
                  marginTop: 2,
                }}
              >
                {m.kcal} kcal · {m.p} protein
              </div>
            </div>
            <span
              style={{
                fontFamily: "var(--font-product)",
                fontSize: 11,
                fontWeight: 700,
                color: "var(--color-brand-blue)",
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

function PhoneChat() {
  return (
    <PhoneFrame width={280} height={580}>
      <StatusBar />
      <div style={{ padding: "8px 18px 18px" }}>
        <div
          style={{
            fontFamily: "var(--font-product)",
            fontSize: 13,
            fontWeight: 700,
            color: "var(--color-ink-700)",
          }}
        >
          Ask your coach
        </div>

        <div style={{ marginTop: 16, display: "flex", flexDirection: "column", gap: 10 }}>
          <div
            style={{
              alignSelf: "flex-end",
              maxWidth: "78%",
              padding: "10px 14px",
              borderRadius: 16,
              borderBottomRightRadius: 4,
              background: "var(--color-brand-blue)",
              color: "var(--color-paper)",
              fontFamily: "var(--font-marketing)",
              fontSize: 13,
              lineHeight: 1.4,
            }}
          >
            Lost 3lb this week, but I&apos;m exhausted. Should I worry?
          </div>
          <div
            style={{
              alignSelf: "flex-start",
              maxWidth: "85%",
              padding: "10px 14px",
              borderRadius: 16,
              borderBottomLeftRadius: 4,
              background: "var(--surface-container-low)",
              border: "0.5px solid var(--border-default)",
              fontFamily: "var(--font-marketing)",
              fontSize: 13,
              lineHeight: 1.45,
              color: "var(--color-ink-900)",
            }}
          >
            Not yet. Your protein hit 2/7 days this week, sleep was &lt; 6 hrs four nights. That&apos;s the
            real cause — not the dose. Let&apos;s fix protein tomorrow and check back Friday.
          </div>
          <div
            style={{
              alignSelf: "flex-start",
              padding: "8px 12px",
              borderRadius: 14,
              background: "var(--primary-container)",
              border: "0.5px solid var(--border-default)",
              fontFamily: "var(--font-product)",
              fontSize: 11.5,
              color: "var(--color-brand-blue)",
              fontWeight: 600,
            }}
          >
            ✓ Reminder set: 25g at breakfast
          </div>
        </div>
      </div>
    </PhoneFrame>
  );
}

const features = [
  {
    eyebrow: "Symptom tracking",
    title: "We learn your nausea pattern, so you can plan around it.",
    body:
      "By your third shot we know when your nausea peaks — within ±24 hours. So you can stock the bone broth and block the calendar before it lands, not after.",
    phone: <PhoneSymptomTracker />,
    reverse: false,
  },
  {
    eyebrow: "Meal plans",
    title: "Food you'll actually eat, that hits your protein.",
    body:
      "Plans built around what stays down on this dose — and your protein floor. We learn what you skipped and quietly stop suggesting it. Real food, real portions.",
    phone: <PhoneMealPlan />,
    reverse: true,
  },
  {
    eyebrow: "24x7 AI coach",
    title: "An expert in your pocket, at 9pm on Sunday.",
    body:
      "Ask anything — the weird symptom, the panic about a plateau, the question you didn't want to bother your doctor with. Answers grounded in your data, not generic advice.",
    phone: <PhoneChat />,
    reverse: false,
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

        <div style={{ marginTop: 64 }}>
          {features.map((f, i) => (
            <div
              key={f.title}
              className="feat-row"
              style={{
                display: "grid",
                gridTemplateColumns: f.reverse ? "0.95fr 1fr" : "1fr 0.95fr",
                gap: 56,
                alignItems: "center",
                padding: "48px 0",
              }}
            >
              {!f.reverse && (
                <motion.div
                  initial={{ opacity: 0, x: -28, rotate: -2 }}
                  whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.9, ease }}
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  {f.phone}
                </motion.div>
              )}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.1, ease }}
              >
                <div
                  style={{
                    display: "inline-block",
                    padding: "6px 14px",
                    borderRadius: 999,
                    background: "var(--primary-container)",
                    color: "var(--color-brand-blue)",
                    fontFamily: "var(--font-marketing)",
                    fontSize: 11.5,
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    marginBottom: 16,
                  }}
                >
                  0{i + 1} · {f.eyebrow}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-marketing)",
                    fontSize: "clamp(28px, 3.4vw, 42px)",
                    fontWeight: 700,
                    lineHeight: 1.1,
                    letterSpacing: "-0.02em",
                    color: "var(--color-ink-900)",
                    margin: 0,
                    textWrap: "balance",
                  }}
                >
                  {f.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-marketing)",
                    fontSize: 17,
                    lineHeight: 1.55,
                    color: "var(--color-ink-700)",
                    margin: "16px 0 0",
                    maxWidth: 480,
                    textWrap: "pretty",
                  }}
                >
                  {f.body}
                </p>
              </motion.div>
              {f.reverse && (
                <motion.div
                  initial={{ opacity: 0, x: 28, rotate: 2 }}
                  whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.9, ease }}
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  {f.phone}
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 920px) {
          .feat-row { grid-template-columns: 1fr !important; gap: 36px !important; padding: 36px 0 !important; }
        }
      `}</style>
    </section>
  );
}
