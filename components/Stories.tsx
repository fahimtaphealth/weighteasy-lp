"use client";
import { motion } from "framer-motion";
import { Eyebrow, SectionTitle, SectionLede } from "./primitives";

const ease = [0.16, 1, 0.3, 1] as const;

const stories = [
  {
    quote:
      "Week 2 was the worst. I couldn't eat, couldn't sleep. But WeightEasy told me it would pass by day 5 — and it did. That's all I needed to hear.",
    name: "Megan R.",
    age: 41,
    location: "Austin, TX",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=240&h=240&fit=crop&crop=faces&q=80",
    metrics: [
      { label: "Weight before", value: "204 lb" },
      { label: "After 90 days", value: "182 lb" },
    ],
    tag: "Stayed on dose through week 3",
  },
  {
    quote:
      "I stopped losing weight for 3 weeks and panicked. The app showed me it's a plateau, not a failure. I stayed on and broke through on day 9, exactly when it said I would.",
    name: "David K.",
    age: 55,
    location: "Columbus, OH",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=240&h=240&fit=crop&crop=faces&q=80",
    metrics: [
      { label: "HbA1c before", value: "8.2%" },
      { label: "After 90 days", value: "6.4%" },
    ],
    tag: "Broke a 3-week plateau on day 9",
  },
  {
    quote:
      "The community here is different. Nobody's showing off. We're all just figuring it out together. That meant more to me than any doctor visit.",
    name: "Priya S.",
    age: 33,
    location: "Brooklyn, NY",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=240&h=240&fit=crop&crop=faces&q=80",
    metrics: [
      { label: "Weight lost", value: "18 lb" },
      { label: "Lean mass kept", value: "94%" },
    ],
    tag: "Found her people in week 1",
  },
];

export default function Stories() {
  return (
    <section
      id="stories"
      style={{ padding: "120px 0", overflow: "hidden" }}
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
          padding: "0 32px",
        }}
      >
        <Eyebrow>Stories</Eyebrow>
        <SectionTitle>Thousands are living a better journey with WeightEasy</SectionTitle>
        <SectionLede>
          Real names, real numbers, real outcomes. No before-and-after photos required.
        </SectionLede>
      </motion.div>

      {/* Horizontal scroll carousel */}
      <div
        className="stories-scroller"
        style={{
          marginTop: 48,
          display: "flex",
          gap: 14,
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          scrollPaddingInlineStart: 20,
          WebkitOverflowScrolling: "touch",
          padding: "8px 20px 24px",
          scrollbarWidth: "none",
        }}
      >
        {stories.map((s, i) => {
          const dark = i === 1;
          return (
            <motion.article
              key={s.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease }}
              style={{
                flex: "0 0 auto",
                width: "min(82vw, 340px)",
                scrollSnapAlign: "start",
                padding: 24,
                borderRadius: 24,
                background: dark ? "var(--color-ink-900)" : "var(--color-paper)",
                color: dark ? "var(--color-paper)" : "var(--color-ink-900)",
                border: dark ? "none" : "0.5px solid var(--border-default)",
                boxShadow: dark
                  ? "0 18px 40px -20px rgba(12,12,13,0.32)"
                  : "0 14px 30px -22px rgba(12,12,13,0.08)",
                display: "flex",
                flexDirection: "column",
                gap: 16,
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignSelf: "flex-start",
                  alignItems: "center",
                  gap: 6,
                  padding: "5px 10px",
                  borderRadius: 999,
                  background: dark
                    ? "rgba(255,255,255,0.1)"
                    : "var(--primary-container)",
                  color: dark ? "var(--color-brand-blue-500)" : "var(--color-brand-blue)",
                  fontFamily: "var(--font-marketing)",
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.04em",
                }}
              >
                <span
                  style={{
                    width: 5,
                    height: 5,
                    borderRadius: 999,
                    background: "currentColor",
                  }}
                />
                {s.tag}
              </div>

              <p
                style={{
                  fontFamily: "var(--font-marketing)",
                  fontSize: 16.5,
                  lineHeight: 1.5,
                  margin: 0,
                  fontWeight: 500,
                  textWrap: "pretty",
                  color: dark ? "var(--color-paper)" : "var(--color-ink-800)",
                }}
              >
                &ldquo;{s.quote}&rdquo;
              </p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 10,
                  padding: 12,
                  borderRadius: 14,
                  background: dark ? "rgba(255,255,255,0.06)" : "var(--surface-container-low)",
                }}
              >
                {s.metrics.map((m) => (
                  <div key={m.label}>
                    <div
                      style={{
                        fontFamily: "var(--font-marketing)",
                        fontSize: 10.5,
                        fontWeight: 700,
                        color: dark
                          ? "rgba(253,253,253,0.6)"
                          : "var(--color-ink-500)",
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                      }}
                    >
                      {m.label}
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-marketing)",
                        fontSize: 20,
                        fontWeight: 700,
                        color: dark
                          ? "var(--color-brand-blue-500)"
                          : "var(--color-brand-blue)",
                        letterSpacing: "-0.015em",
                        marginTop: 2,
                      }}
                    >
                      {m.value}
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <img
                  src={s.img}
                  alt=""
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 999,
                    objectFit: "cover",
                  }}
                />
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-marketing)",
                      fontSize: 14,
                      fontWeight: 700,
                    }}
                  >
                    {s.name}, {s.age}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-marketing)",
                      fontSize: 12,
                      color: dark
                        ? "rgba(253,253,253,0.6)"
                        : "var(--color-ink-500)",
                    }}
                  >
                    {s.location}
                  </div>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>

      <div
        style={{
          textAlign: "center",
          marginTop: 4,
          padding: "0 32px",
          fontFamily: "var(--font-marketing)",
          fontSize: 12.5,
          color: "var(--color-ink-500)",
        }}
      >
        Swipe to read more →
      </div>

      <style>{`
        .stories-scroller::-webkit-scrollbar { display: none; }
        /* On larger screens, center the cards when they all fit */
        @media (min-width: 1180px) {
          .stories-scroller { justify-content: center; }
        }
      `}</style>
    </section>
  );
}
