"use client";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const moments = [
  {
    time: "7:00 AM",
    title: "Log your morning in 10 seconds",
    body: "Tap how you slept, your mood, your morning weight if you want.",
    img:
      "https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?w=600&h=900&fit=crop&q=80",
    alt: "Woman waking up in morning light",
  },
  {
    time: "9:00 AM",
    title: "Coach flags yesterday's protein",
    body: "You hit 48g — your floor is 92g. Add 25g at breakfast.",
    img:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=900&fit=crop&q=80",
    alt: "Person at breakfast checking phone",
  },
  {
    time: "12:30 PM",
    title: "Hunger window opens",
    body: "Lunch by 1pm or you'll skip it. Suggested: salmon bowl.",
    img:
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&h=900&fit=crop&q=80",
    alt: "Healthy lunch bowl",
  },
  {
    time: "3:00 PM",
    title: "Nausea prep, before it hits",
    body: "Wednesday peaks at 3:14. Bone broth ready, calendar blocked.",
    img:
      "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=600&h=900&fit=crop&crop=faces&q=80",
    alt: "Woman resting at home in the afternoon",
  },
  {
    time: "7:00 PM",
    title: "Eight-minute resistance routine",
    body: "Just enough to protect lean mass on this dose. Built around your energy today.",
    img:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=900&fit=crop&q=80",
    alt: "Person doing a light strength routine at home",
  },
  {
    time: "9:30 PM",
    title: "Tomorrow's prep, today's win",
    body: "A small thing you did right today, and the one thing to remember tomorrow.",
    img:
      "https://images.unsplash.com/photo-1493673272479-a20888bcee10?w=600&h=900&fit=crop&q=80",
    alt: "Cozy evening at home, warm lamp light",
  },
];

export default function DayInLife() {
  return (
    <section
      style={{
        padding: "96px 0",
        background: "var(--surface-container-low)",
        overflow: "hidden",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease }}
        style={{
          maxWidth: 820,
          textAlign: "center",
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-marketing)",
            fontSize: 12,
            fontWeight: 700,
            color: "var(--color-brand-blue)",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: 14,
          }}
        >
          A day in the life
        </div>
        <h2
          style={{
            fontFamily: "var(--font-marketing)",
            fontSize: "clamp(32px, 4.8vw, 52px)",
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: "-0.025em",
            color: "var(--color-ink-900)",
            margin: 0,
            textWrap: "balance",
          }}
        >
          Your day with{" "}
          <span style={{ color: "var(--color-brand-blue)" }}>WeightEasy.</span>
        </h2>
        <p
          style={{
            fontFamily: "var(--font-marketing)",
            fontSize: 16,
            lineHeight: 1.55,
            color: "var(--color-ink-700)",
            marginTop: 14,
            textWrap: "pretty",
          }}
        >
          The coach quietly shows up at the right times — never more than three things to do.
        </p>
      </motion.div>

      <div
        className="day-scroller"
        style={{
          marginTop: 40,
          display: "flex",
          gap: 14,
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
          padding: "8px 24px 24px",
          scrollbarWidth: "none",
        }}
      >
        {moments.map((m, i) => (
          <motion.article
            key={m.time}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.06, ease }}
            style={{
              flex: "0 0 auto",
              width: 240,
              aspectRatio: "2/3",
              position: "relative",
              borderRadius: 20,
              overflow: "hidden",
              scrollSnapAlign: "start",
              background: "var(--color-ink-900)",
              boxShadow: "0 18px 40px -22px rgba(12,12,13,0.32)",
            }}
          >
            <img
              src={m.img}
              alt={m.alt}
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />

            {/* Dark gradient overlay for legibility */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to top, rgba(12,12,13,0.92) 0%, rgba(12,12,13,0.55) 38%, rgba(12,12,13,0.05) 70%, rgba(12,12,13,0) 100%)",
              }}
            />

            {/* Time badge */}
            <span
              style={{
                position: "absolute",
                top: 12,
                left: 12,
                padding: "5px 10px",
                borderRadius: 999,
                background: "rgba(12,12,13,0.55)",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
                color: "var(--color-paper)",
                fontFamily: "var(--font-marketing)",
                fontSize: 11.5,
                fontWeight: 700,
                letterSpacing: "0.04em",
              }}
            >
              {m.time}
            </span>

            {/* Title + body at bottom */}
            <div
              style={{
                position: "absolute",
                left: 16,
                right: 16,
                bottom: 16,
                color: "var(--color-paper)",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-marketing)",
                  fontSize: 18,
                  fontWeight: 700,
                  lineHeight: 1.2,
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
                  fontSize: 12.5,
                  lineHeight: 1.45,
                  color: "rgba(253,253,253,0.85)",
                  margin: "6px 0 0",
                  textWrap: "pretty",
                }}
              >
                {m.body}
              </p>
            </div>
          </motion.article>
        ))}
      </div>

      <div
        style={{
          textAlign: "center",
          marginTop: 4,
          fontFamily: "var(--font-marketing)",
          fontSize: 12.5,
          color: "var(--color-ink-500)",
        }}
      >
        Swipe to see the full day →
      </div>

      <style>{`
        .day-scroller::-webkit-scrollbar { display: none; }
        @media (min-width: 1380px) {
          .day-scroller { justify-content: center; }
        }
      `}</style>
    </section>
  );
}
