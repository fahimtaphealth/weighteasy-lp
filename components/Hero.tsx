"use client";
import { motion } from "framer-motion";
import { Eyebrow, PrimaryBtn, GhostBtn } from "./primitives";
import HeroPhone from "./phones/HeroPhone";

const ease = [0.16, 1, 0.3, 1] as const;

const trustPills = [
  "Built by people on GLP-1",
  "Used by 12,000+ on the journey",
  "Just 3 things to do today",
];

export default function Hero() {
  const headline = "GLP-1 is hard. You shouldn't do it alone.";
  const words = headline.split(" ");

  return (
    <section style={{
      padding: "72px 32px 96px",
      position: "relative",
      background: "var(--primary-container)",
      overflow: "hidden",
    }}>
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "radial-gradient(80% 60% at 50% 0%, rgba(255,255,255,0.5) 0%, transparent 70%)",
      }} />
      <div style={{
        maxWidth: 1140, margin: "0 auto",
        display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 48,
        alignItems: "center", position: "relative",
      }} className="hero-grid">
        <div>
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }}>
            <Eyebrow tone="blue">A coach who&apos;s been there</Eyebrow>
          </motion.div>

          <h1 style={{
            fontFamily: "var(--font-marketing)",
            fontSize: "clamp(40px, 5.8vw, 68px)",
            fontWeight: 700, lineHeight: 1.0,
            letterSpacing: "-0.03em",
            color: "var(--color-ink-900)",
            margin: 0, textWrap: "balance",
          }}>
            {words.map((w, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + i * 0.05, duration: 0.7, ease }}
                style={{ display: "inline-block", marginRight: "0.28em" }}
              >{w}</motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7, ease }}
            style={{
              fontFamily: "var(--font-marketing)",
              fontSize: 19, lineHeight: 1.55, color: "var(--color-ink-700)",
              maxWidth: 580, margin: "24px 0 0", textWrap: "pretty",
            }}>
            We get the nausea, the plateaus, the food noise that suddenly goes quiet. WeightEasy is a coach that listens to your patterns and tells you the one thing to do today — in plain English, on your hardest mornings.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95, duration: 0.6, ease }}
            style={{ display: "flex", gap: 12, marginTop: 32, flexWrap: "wrap" }}>
            <PrimaryBtn href="#pricing">Get My Personalized Coach</PrimaryBtn>
            <GhostBtn href="#coach-difference">See how the coach works →</GhostBtn>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 1.15, duration: 0.6 }}
            style={{
              marginTop: 20,
              fontFamily: "var(--font-marketing)", fontSize: 14, color: "var(--color-ink-700)",
              opacity: 0.85,
            }}>
            No hype. No miracle promises. Six questions to start, then it learns you.
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.6 }}
            style={{
              marginTop: 28, display: "flex", alignItems: "center", gap: 10,
              flexWrap: "wrap",
            }}>
            {trustPills.map((p) => (
              <span key={p} style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "8px 14px", borderRadius: 999,
                background: "rgba(255,255,255,0.6)",
                border: "0.5px solid var(--border-default)",
                fontFamily: "var(--font-marketing)", fontSize: 13, fontWeight: 600,
                color: "var(--color-ink-800)", letterSpacing: "-0.005em",
              }}>
                <span style={{ width: 6, height: 6, borderRadius: 999, background: "var(--color-brand-blue)" }} />
                {p}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.9, ease }}
          style={{ display: "flex", justifyContent: "center", position: "relative" }}
        >
          <HeroPhone />
        </motion.div>
      </div>
      <style>{`@media (max-width: 920px) { .hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; } }`}</style>
    </section>
  );
}
