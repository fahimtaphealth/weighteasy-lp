"use client";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const moments = [
  {
    time: "7:00 AM",
    title: "Log your morning in 10 seconds",
    body: "Tap how you slept, your mood, your morning weight if you want. That's it.",
  },
  {
    time: "9:00 AM",
    title: "Coach flags yesterday's protein",
    body: "\"You hit 48g — your floor is 92g. Add 25g at breakfast tomorrow and you'll feel the difference.\"",
  },
  {
    time: "12:30 PM",
    title: "Hunger window opens",
    body: "\"This is when you actually want food on this dose. Lunch by 1pm or you'll skip it. Suggested: salmon bowl.\"",
  },
  {
    time: "3:00 PM",
    title: "Nausea prep, before it hits",
    body: "\"Wednesday peaks for you at 3:14. Bone broth ready. We'll text you again at 2:45.\"",
  },
  {
    time: "7:00 PM",
    title: "Eight-minute resistance routine",
    body: "Just enough to protect lean mass on this dose. No 30-day shred plans. Built around your energy today.",
  },
  {
    time: "9:30 PM",
    title: "Tomorrow's prep, today's win",
    body: "A small thing you did right today, the one thing to remember tomorrow, and lights out by 10:30.",
  },
];

export default function DayInLife() {
  return (
    <section
      style={{
        padding: "120px 32px",
        background: "var(--color-ink-900)",
        color: "var(--color-paper)",
      }}
    >
      <div style={{ maxWidth: 1080, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease }}
          style={{ textAlign: "center", maxWidth: 820, margin: "0 auto" }}
        >
          <div
            style={{
              fontFamily: "var(--font-marketing)",
              fontSize: 12,
              fontWeight: 700,
              color: "var(--color-brand-blue-500)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            A day in the life
          </div>
          <h2
            style={{
              fontFamily: "var(--font-marketing)",
              fontSize: "clamp(38px, 5.4vw, 60px)",
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.025em",
              color: "var(--color-paper)",
              margin: 0,
              textWrap: "balance",
            }}
          >
            Your day with WeightEasy.
          </h2>
          <p
            style={{
              fontFamily: "var(--font-marketing)",
              fontSize: 19,
              lineHeight: 1.55,
              color: "rgba(253,253,253,0.7)",
              marginTop: 18,
              textWrap: "pretty",
            }}
          >
            The coach quietly shows up at the right times. Never more than three things to do.
          </p>
        </motion.div>

        <div
          style={{
            marginTop: 64,
            position: "relative",
            maxWidth: 720,
            margin: "64px auto 0",
          }}
        >
          {/* vertical line */}
          <div
            style={{
              position: "absolute",
              left: 86,
              top: 14,
              bottom: 14,
              width: 1,
              background: "rgba(255,255,255,0.18)",
            }}
            aria-hidden
          />
          {moments.map((m, i) => (
            <motion.div
              key={m.time}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease }}
              style={{
                display: "grid",
                gridTemplateColumns: "78px 22px 1fr",
                gap: 16,
                alignItems: "flex-start",
                padding: "18px 0",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-marketing)",
                  fontSize: 13,
                  fontWeight: 700,
                  color: "var(--color-brand-blue-500)",
                  letterSpacing: "0.04em",
                  paddingTop: 4,
                }}
              >
                {m.time}
              </div>
              <div
                style={{
                  width: 14,
                  height: 14,
                  borderRadius: 999,
                  background: "var(--color-brand-blue)",
                  border: "3px solid var(--color-ink-900)",
                  marginTop: 8,
                  marginLeft: 4,
                  boxShadow: "0 0 0 1px rgba(255,255,255,0.18)",
                }}
                aria-hidden
              />
              <div>
                <h3
                  style={{
                    fontFamily: "var(--font-marketing)",
                    fontSize: 19,
                    fontWeight: 700,
                    color: "var(--color-paper)",
                    margin: 0,
                    letterSpacing: "-0.01em",
                    textWrap: "balance",
                  }}
                >
                  {m.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-marketing)",
                    fontSize: 15,
                    lineHeight: 1.55,
                    color: "rgba(253,253,253,0.75)",
                    margin: "6px 0 0",
                    textWrap: "pretty",
                  }}
                >
                  {m.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
