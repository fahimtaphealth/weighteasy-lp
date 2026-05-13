"use client";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const steps = [
  {
    n: "01",
    title: "Download the app",
    body: "Available on iOS and Android. 2-minute setup — no account, no card.",
  },
  {
    n: "02",
    title: "Tell us about you",
    body: "Your dose, sleep, food preferences, and goal. Six questions. The coach starts learning from question one.",
  },
  {
    n: "03",
    title: "Get your personalized plan",
    body: "Meals, daily 3 things, dose-bump prep, and the symptom forecast — all built around you, on day one.",
  },
  {
    n: "04",
    title: "Track and watch the plateaus break",
    body: "By week one, most people see their first “how did it know” moment. By month three, the scale anxiety is gone.",
  },
];

export default function HowItWorksLong() {
  return (
    <section
      id="how-it-works"
      style={{
        padding: "96px 24px",
        background: "var(--surface-default)",
      }}
    >
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease }}
          style={{ textAlign: "center", margin: "0 auto" }}
        >
          <h2
            style={{
              fontFamily: "var(--font-marketing)",
              fontSize: "clamp(30px, 4.4vw, 48px)",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.025em",
              color: "var(--color-ink-900)",
              margin: 0,
              textWrap: "balance",
            }}
          >
            You&apos;ll see a result in under a week.
          </h2>
          <p
            style={{
              fontFamily: "var(--font-marketing)",
              fontSize: 16,
              lineHeight: 1.5,
              color: "var(--color-ink-700)",
              marginTop: 12,
              textWrap: "pretty",
            }}
          >
            From download to first &ldquo;how did it know that&rdquo; — about six days.
          </p>
        </motion.div>

        <ol
          style={{
            margin: "40px 0 0",
            padding: 0,
            listStyle: "none",
            display: "flex",
            flexDirection: "column",
            gap: 10,
          }}
        >
          {steps.map((s, i) => (
            <motion.li
              key={s.n}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.07, ease }}
              style={{
                display: "grid",
                gridTemplateColumns: "40px 1fr",
                gap: 16,
                alignItems: "flex-start",
                padding: "16px 18px",
                borderRadius: 16,
                background: "var(--color-paper)",
                border: "0.5px solid var(--border-default)",
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 999,
                  background: "var(--primary-container)",
                  color: "var(--color-brand-blue)",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "var(--font-marketing)",
                  fontSize: 14,
                  fontWeight: 700,
                  letterSpacing: "-0.005em",
                  flexShrink: 0,
                }}
              >
                {s.n}
              </div>
              <div style={{ minWidth: 0 }}>
                <h3
                  style={{
                    fontFamily: "var(--font-marketing)",
                    fontSize: 17,
                    fontWeight: 700,
                    color: "var(--color-ink-900)",
                    margin: 0,
                    letterSpacing: "-0.012em",
                    lineHeight: 1.3,
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
                    margin: "4px 0 0",
                    textWrap: "pretty",
                  }}
                >
                  {s.body}
                </p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
