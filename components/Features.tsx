"use client";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

const ease = [0.16, 1, 0.3, 1] as const;

/* ─────────────────────────── Visuals ─────────────────────────── */

/* Card 1 — Symptom forecast phone */
function VisualSymptom() {
  const bars = [14, 22, 38, 62, 90, 54, 28];
  return (
    <div
      style={{
        position: "relative",
        margin: "8px auto 0",
        width: 220,
        height: 360,
        borderRadius: 36,
        background: "linear-gradient(180deg, #0F1733 0%, #1B2554 100%)",
        padding: 12,
        boxShadow:
          "0 24px 50px -22px rgba(12,12,13,0.28), 0 8px 18px -10px rgba(12,12,13,0.12)",
      }}
    >
      {/* notch */}
      <div
        style={{
          position: "absolute",
          top: 18,
          left: "50%",
          transform: "translateX(-50%)",
          width: 80,
          height: 18,
          borderRadius: 999,
          background: "#000",
          zIndex: 2,
        }}
      />
      <div
        style={{
          width: "100%",
          height: "100%",
          borderRadius: 28,
          background: "linear-gradient(170deg, #2C7BF2 0%, #5AAEFF 55%, #C7E1FF 110%)",
          overflow: "hidden",
          position: "relative",
          padding: 18,
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-product)",
            fontSize: 10.5,
            fontWeight: 700,
            letterSpacing: "0.08em",
            color: "rgba(255,255,255,0.85)",
            textTransform: "uppercase",
            marginTop: 24,
          }}
        >
          Forecast · This week
        </div>
        <div
          style={{
            fontFamily: "var(--font-marketing)",
            fontSize: 24,
            fontWeight: 800,
            color: "#fff",
            letterSpacing: "-0.02em",
            lineHeight: 1.05,
            marginTop: 4,
          }}
        >
          Wed · 3:14 PM
        </div>
        <div
          style={{
            fontFamily: "var(--font-product)",
            fontSize: 12,
            color: "rgba(255,255,255,0.85)",
            marginTop: 3,
          }}
        >
          Your nausea peak window
        </div>

        <div
          style={{
            marginTop: 18,
            padding: 14,
            borderRadius: 18,
            background: "rgba(255,255,255,0.18)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.25)",
          }}
        >
          <div style={{ display: "flex", alignItems: "flex-end", gap: 6, height: 72 }}>
            {bars.map((h, i) => (
              <div
                key={i}
                style={{
                  flex: 1,
                  height: `${h}%`,
                  borderRadius: 4,
                  background: i === 4 ? "#FFD15C" : "rgba(255,255,255,0.55)",
                  boxShadow: i === 4 ? "0 0 12px rgba(255,209,92,0.6)" : "none",
                }}
              />
            ))}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: 8,
              fontFamily: "var(--font-product)",
              fontSize: 9.5,
              color: "rgba(255,255,255,0.7)",
              fontWeight: 600,
            }}
          >
            {["M", "T", "W", "T", "F", "S", "S"].map((d) => (
              <span key={d}>{d}</span>
            ))}
          </div>
        </div>

        <div
          style={{
            marginTop: 12,
            padding: "10px 12px",
            borderRadius: 12,
            background: "#0F1733",
            color: "#fff",
            fontFamily: "var(--font-marketing)",
            fontSize: 12,
            lineHeight: 1.4,
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <span style={{ fontSize: 14 }}>🥣</span>
          Bone broth ready by 12. Reminder set.
        </div>
      </div>
    </div>
  );
}

/* Card 2 — Horizontal food carousel inside the card */
const meals = [
  {
    img: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=320&h=320&fit=crop&q=80",
    name: "Greek yogurt bowl",
    kcal: 320,
    protein: 28,
  },
  {
    img: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=320&h=320&fit=crop&q=80",
    name: "Salmon + greens",
    kcal: 480,
    protein: 36,
  },
  {
    img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=320&h=320&fit=crop&q=80",
    name: "Chicken & rice bowl",
    kcal: 410,
    protein: 34,
  },
  {
    img: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=320&h=320&fit=crop&q=80",
    name: "Veggie omelette",
    kcal: 290,
    protein: 24,
  },
];

function VisualMeals() {
  return (
    <div style={{ marginTop: 8, position: "relative" }}>
      <div
        className="meal-row"
        style={{
          display: "flex",
          gap: 10,
          overflowX: "auto",
          padding: "8px 4px 12px",
          scrollSnapType: "x mandatory",
          scrollbarWidth: "none",
        }}
      >
        {meals.map((m) => (
          <div
            key={m.name}
            style={{
              flex: "0 0 auto",
              width: 156,
              borderRadius: 14,
              overflow: "hidden",
              background: "var(--surface-container-low)",
              border: "0.5px solid var(--border-default)",
              scrollSnapAlign: "start",
            }}
          >
            <div
              style={{
                width: "100%",
                aspectRatio: "4/3",
                background: `url(${m.img}) center/cover no-repeat, var(--primary-container)`,
              }}
            />
            <div style={{ padding: "10px 12px" }}>
              <div
                style={{
                  fontFamily: "var(--font-product)",
                  fontSize: 12.5,
                  fontWeight: 700,
                  color: "var(--color-ink-900)",
                  letterSpacing: "-0.005em",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {m.name}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-product)",
                  fontSize: 11,
                  color: "var(--color-ink-500)",
                  marginTop: 2,
                }}
              >
                {m.kcal} kcal · {m.protein}g protein
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* fade on right edge to suggest scroll */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 12,
          width: 32,
          pointerEvents: "none",
          background: "linear-gradient(to left, var(--color-paper), transparent)",
        }}
      />
      <div
        style={{
          display: "inline-block",
          marginTop: 4,
          padding: "5px 10px",
          borderRadius: 999,
          background: "var(--primary-container)",
          color: "var(--color-brand-blue)",
          fontFamily: "var(--font-marketing)",
          fontSize: 11.5,
          fontWeight: 700,
          letterSpacing: "0.04em",
        }}
      >
        ✓ Built around your dose
      </div>
      <style>{`.meal-row::-webkit-scrollbar { display: none; }`}</style>
    </div>
  );
}

/* Card 3 — Chat preview */
function VisualChat() {
  return (
    <div
      style={{
        marginTop: 8,
        padding: 16,
        borderRadius: 20,
        background: "linear-gradient(160deg, #EEF4FF 0%, #F8FBFF 100%)",
        border: "0.5px solid var(--border-default)",
        display: "flex",
        flexDirection: "column",
        gap: 10,
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-product)",
          fontSize: 10.5,
          fontWeight: 700,
          color: "var(--color-ink-500)",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          textAlign: "center",
        }}
      >
        Sunday · 9:42 PM
      </div>

      <div
        style={{
          alignSelf: "flex-end",
          maxWidth: "85%",
          padding: "10px 14px",
          borderRadius: 18,
          borderBottomRightRadius: 6,
          background: "var(--color-brand-blue)",
          color: "var(--color-paper)",
          fontFamily: "var(--font-marketing)",
          fontSize: 13,
          lineHeight: 1.4,
          boxShadow: "0 6px 14px -8px rgba(48,119,235,0.4)",
        }}
      >
        Scale jumped 1.2 lb today. Should I worry?
      </div>

      <div
        style={{
          alignSelf: "flex-start",
          maxWidth: "92%",
          padding: "12px 14px",
          borderRadius: 18,
          borderBottomLeftRadius: 6,
          background: "var(--color-paper)",
          border: "0.5px solid var(--border-default)",
          fontFamily: "var(--font-marketing)",
          fontSize: 13,
          lineHeight: 1.5,
          color: "var(--color-ink-900)",
          boxShadow: "0 6px 14px -10px rgba(12,12,13,0.08)",
        }}
      >
        Three nights under 6 hrs of sleep. It&apos;s water, not weight. Sleep tonight
        is the actual goal.
      </div>

      <div
        style={{
          alignSelf: "flex-start",
          padding: "6px 12px",
          borderRadius: 999,
          background: "var(--primary-container)",
          fontFamily: "var(--font-product)",
          fontSize: 11.5,
          fontWeight: 700,
          color: "var(--color-brand-blue)",
        }}
      >
        ✓ Sleep reminder set for 10:30
      </div>
    </div>
  );
}

/* ─────────────────────────── Section ─────────────────────────── */

type Card = { eyebrow: string; title: string; body: string; visual: ReactNode };

const cards: Card[] = [
  {
    eyebrow: "Symptom tracking",
    title: "Forecast your nausea, plan around it.",
    body: "By your third shot we know when it peaks — within ±24 hours.",
    visual: <VisualSymptom />,
  },
  {
    eyebrow: "Meal plans",
    title: "Food you'll actually want to eat.",
    body: "Real portions, your protein floor, what your body keeps down on this dose.",
    visual: <VisualMeals />,
  },
  {
    eyebrow: "AI coach",
    title: "An expert in your pocket, 24/7.",
    body: "Answers grounded in your data — at 9pm on Sunday, not two weeks from now.",
    visual: <VisualChat />,
  },
];

export default function Features() {
  return (
    <section
      id="features"
      style={{
        padding: "120px 32px",
        background:
          "linear-gradient(180deg, var(--primary-container) 0%, #F2F7FF 100%)",
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
          <div
            style={{
              display: "inline-block",
              padding: "6px 14px",
              borderRadius: 999,
              background: "rgba(255,255,255,0.7)",
              border: "0.5px solid var(--border-default)",
              fontFamily: "var(--font-marketing)",
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--color-brand-blue)",
              marginBottom: 18,
            }}
          >
            Features
          </div>
          <h2
            style={{
              fontFamily: "var(--font-marketing)",
              fontSize: "clamp(32px, 5vw, 56px)",
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
              fontSize: 17,
              lineHeight: 1.55,
              color: "var(--color-ink-700)",
              marginTop: 16,
              textWrap: "pretty",
            }}
          >
            Three things WeightEasy does that no tracker can.
          </p>
        </motion.div>

        <div
          className="features-grid"
          style={{
            marginTop: 48,
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 20,
            alignItems: "stretch",
          }}
        >
          {cards.map((c, i) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease }}
              style={{
                padding: 28,
                borderRadius: 24,
                background: "var(--color-paper)",
                border: "0.5px solid var(--border-default)",
                boxShadow: "0 18px 40px -28px rgba(12,12,13,0.18)",
                display: "flex",
                flexDirection: "column",
                gap: 8,
                textAlign: "center",
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
                  margin: "2px auto 0",
                  textWrap: "pretty",
                  maxWidth: 300,
                }}
              >
                {c.body}
              </p>
              <div style={{ marginTop: 16 }}>{c.visual}</div>
            </motion.article>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 920px) {
          .features-grid { grid-template-columns: 1fr !important; gap: 16px !important; }
        }
      `}</style>
    </section>
  );
}
