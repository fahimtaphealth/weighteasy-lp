"use client";
import { motion } from "framer-motion";
import { PrimaryBtn } from "./primitives";

const ease = [0.16, 1, 0.3, 1] as const;

const heroStats = [
  { value: "12,000+", label: "on the journey with us" },
  { value: "1.5%", label: "avg HbA1c reduction" },
  { value: "4.9", label: "App Store rating" },
];

export default function Hero() {
  const headline = "Lose weight on GLP-1, without losing yourself.";
  const words = headline.split(" ");

  return (
    <section
      style={{
        padding: "48px 24px 72px",
        position: "relative",
        background: "var(--primary-container)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background:
            "radial-gradient(80% 60% at 50% 0%, rgba(255,255,255,0.5) 0%, transparent 70%)",
        }}
      />
      <div
        className="hero-grid"
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          display: "grid",
          gap: 48,
          position: "relative",
        }}
      >
        {/* Text block (eyebrow, headline, subhead, CTA, trust line) */}
        <div className="hero-text">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "6px 14px",
              borderRadius: 999,
              background: "rgba(255,255,255,0.7)",
              border: "0.5px solid var(--border-default)",
              fontFamily: "var(--font-marketing)",
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "var(--color-brand-blue)",
              marginBottom: 18,
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: 999,
                background: "var(--color-brand-blue)",
              }}
            />
            America&apos;s most trusted GLP-1 coach
          </motion.div>

          <h1
            style={{
              fontFamily: "var(--font-marketing)",
              fontSize: "clamp(36px, 5.8vw, 72px)",
              fontWeight: 700,
              lineHeight: 1.02,
              letterSpacing: "-0.03em",
              color: "var(--color-ink-900)",
              margin: 0,
              textWrap: "balance",
            }}
          >
            {words.map((w, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + i * 0.05, duration: 0.7, ease }}
                style={{ display: "inline-block", marginRight: "0.28em" }}
              >
                {w}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7, ease }}
            className="hero-subhead"
            style={{
              fontFamily: "var(--font-marketing)",
              fontSize: 17,
              lineHeight: 1.5,
              color: "var(--color-ink-700)",
              maxWidth: 520,
              margin: "16px 0 0",
              textWrap: "pretty",
            }}
          >
            Personalized coaching for your nausea, plateaus, and dose bumps — trained on 12,000+ real GLP-1 journeys.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95, duration: 0.6, ease }}
            className="hero-inline-cta"
            style={{ display: "flex", gap: 12, marginTop: 24, flexWrap: "wrap" }}
          >
            <PrimaryBtn href="#pricing">Start for $9.99/month</PrimaryBtn>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.15, duration: 0.6 }}
            style={{
              marginTop: 14,
              fontFamily: "var(--font-marketing)",
              fontSize: 13,
              color: "var(--color-ink-700)",
              opacity: 0.85,
            }}
          >
            7-day free trial · Cancel anytime · No hidden fees
          </motion.div>
        </div>

        {/* Visual block (image + floating cards) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.9, ease }}
          className="hero-visual"
          style={{
            position: "relative",
            aspectRatio: "4/5",
            maxWidth: 480,
            margin: "0 auto",
            width: "100%",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: 28,
              overflow: "hidden",
              background: "var(--color-paper)",
              boxShadow:
                "0 30px 60px -20px rgba(12,12,13,0.18), 0 12px 24px -12px rgba(12,12,13,0.12)",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=900&h=1100&fit=crop&crop=faces&q=80"
              alt="A WeightEasy user on her GLP-1 journey"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
            <div
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                bottom: 0,
                height: "30%",
                background:
                  "linear-gradient(to top, rgba(12,12,13,0.65), transparent)",
              }}
            />
            <div
              style={{
                position: "absolute",
                left: 16,
                bottom: 14,
                color: "var(--color-paper)",
                fontFamily: "var(--font-marketing)",
              }}
            >
              <div style={{ fontSize: 16, fontWeight: 700, letterSpacing: "-0.01em" }}>
                Priya, 33
              </div>
              <div style={{ fontSize: 12, opacity: 0.85, marginTop: 2 }}>
                On Mounjaro · Down 18 lb · Day 92
              </div>
            </div>
          </div>

          {/* Top-right floating stat card */}
          <motion.div
            initial={{ opacity: 0, y: -16, rotate: 6 }}
            animate={{ opacity: 1, y: 0, rotate: 4 }}
            transition={{ delay: 0.7, duration: 0.8, ease }}
            className="hero-card-top"
            style={{
              position: "absolute",
              top: -14,
              right: -14,
              padding: 14,
              borderRadius: 16,
              background: "var(--color-paper)",
              boxShadow:
                "0 18px 40px -16px rgba(12,12,13,0.18), 0 6px 14px -8px rgba(12,12,13,0.08)",
              width: 160,
              border: "0.5px solid var(--border-default)",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-marketing)",
                fontSize: 10.5,
                fontWeight: 700,
                color: "var(--color-brand-blue)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              Plateau broken
            </div>
            <div
              style={{
                fontFamily: "var(--font-marketing)",
                fontSize: 26,
                fontWeight: 700,
                color: "var(--color-ink-900)",
                marginTop: 4,
                letterSpacing: "-0.02em",
              }}
            >
              Day 9
            </div>
            <div
              style={{
                fontFamily: "var(--font-marketing)",
                fontSize: 11.5,
                color: "var(--color-ink-700)",
                marginTop: 4,
                lineHeight: 1.4,
              }}
            >
              Right on the day we predicted
            </div>
          </motion.div>

          {/* Bottom-left floating coach message */}
          <motion.div
            initial={{ opacity: 0, y: 16, rotate: -4 }}
            animate={{ opacity: 1, y: 0, rotate: -3 }}
            transition={{ delay: 0.9, duration: 0.8, ease }}
            className="hero-card-bottom"
            style={{
              position: "absolute",
              bottom: -18,
              left: -18,
              padding: "12px 14px",
              borderRadius: 16,
              background: "var(--color-ink-900)",
              color: "var(--color-paper)",
              width: 200,
              boxShadow: "0 18px 40px -16px rgba(12,12,13,0.28)",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-marketing)",
                fontSize: 10,
                fontWeight: 700,
                opacity: 0.6,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              From your coach
            </div>
            <div
              style={{
                fontFamily: "var(--font-marketing)",
                fontSize: 12.5,
                fontWeight: 500,
                lineHeight: 1.45,
                marginTop: 6,
              }}
            >
              Nausea peaks around 3pm Wednesday. Bone broth ready by noon.
            </div>
          </motion.div>
        </motion.div>

        {/* Stats block (after image on mobile, left column on desktop) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.25, duration: 0.7, ease }}
          className="hero-stats"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 14,
            maxWidth: 540,
          }}
        >
          {heroStats.map((s) => (
            <div
              key={s.label}
              style={{
                padding: "14px 16px",
                background: "rgba(255,255,255,0.7)",
                border: "0.5px solid var(--border-default)",
                borderRadius: 16,
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-marketing)",
                  fontSize: "clamp(20px, 2.4vw, 26px)",
                  fontWeight: 700,
                  color: "var(--color-brand-blue)",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.1,
                }}
              >
                {s.value}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-marketing)",
                  fontSize: 12,
                  color: "var(--color-ink-700)",
                  marginTop: 4,
                  lineHeight: 1.3,
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <style>{`
        /* Desktop: 2 columns, image spans both rows */
        .hero-grid {
          grid-template-columns: 1.05fr 0.95fr;
          grid-template-areas:
            "text  image"
            "stats image";
          align-items: start;
        }
        .hero-text   { grid-area: text; }
        .hero-visual { grid-area: image; align-self: center; }
        .hero-stats  { grid-area: stats; }

        @media (max-width: 920px) {
          .hero-grid {
            grid-template-columns: 1fr;
            grid-template-areas:
              "text"
              "image"
              "stats";
            gap: 28px;
          }
          .hero-visual { max-width: 320px !important; }
          /* On mobile we hide the inline CTA — the sticky bottom bar takes its place */
          .hero-inline-cta { display: none !important; }
        }
        @media (max-width: 520px) {
          .hero-stats { grid-template-columns: 1fr 1fr !important; }
          .hero-card-top { width: 140px !important; right: -6px !important; padding: 12px !important; }
          .hero-card-bottom { width: 180px !important; left: -6px !important; padding: 10px 12px !important; }
        }
      `}</style>
    </section>
  );
}
