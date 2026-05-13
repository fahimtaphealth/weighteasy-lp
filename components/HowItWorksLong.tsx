"use client";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const steps = [
  {
    n: "1.",
    title: "Download the app",
    body: "Available on iOS and Android. Setup takes 2 minutes — no account, no card.",
  },
  {
    n: "2.",
    title: "Tell us about you",
    body: "Your dose, sleep window, food preferences, and goal. Six questions. The coach starts learning from question one.",
  },
  {
    n: "3.",
    title: "Get your personalized plan",
    body: "Meals, daily 3 things, dose-bump prep, and the symptom forecast — all built around you, all on day one.",
  },
  {
    n: "4.",
    title: "Track and watch the plateaus break",
    body: "By week one, most people see their first 'how did it know' moment. By month three, they don't recognize their old anxiety around the scale.",
  },
];

export default function HowItWorksLong() {
  return (
    <section
      id="how-it-works"
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
            You&apos;ll see a result in under a week.
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
            From download to first &ldquo;how did it know that&rdquo; — about six days.
          </p>
        </motion.div>

        <div
          className="hiwl-list"
          style={{
            marginTop: 56,
            maxWidth: 820,
            margin: "56px auto 0",
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          {steps.map((s, i) => (
            <motion.article
              key={s.n}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease }}
              style={{
                display: "grid",
                gridTemplateColumns: "80px 1fr",
                gap: 24,
                alignItems: "start",
                padding: "24px 28px",
                borderRadius: 20,
                background: "var(--color-paper)",
                border: "0.5px solid var(--border-default)",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-marketing)",
                  fontSize: "clamp(36px, 4.4vw, 52px)",
                  fontWeight: 700,
                  color: "var(--color-brand-blue)",
                  letterSpacing: "-0.02em",
                  lineHeight: 1,
                }}
              >
                {s.n}
              </div>
              <div>
                <h3
                  style={{
                    fontFamily: "var(--font-marketing)",
                    fontSize: "clamp(20px, 2.4vw, 26px)",
                    fontWeight: 700,
                    color: "var(--color-ink-900)",
                    margin: 0,
                    letterSpacing: "-0.015em",
                    textWrap: "balance",
                  }}
                >
                  {s.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-marketing)",
                    fontSize: 16,
                    lineHeight: 1.55,
                    color: "var(--color-ink-700)",
                    margin: "8px 0 0",
                    textWrap: "pretty",
                  }}
                >
                  {s.body}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
