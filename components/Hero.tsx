"use client";
import { motion } from "framer-motion";
import { Eyebrow, PrimaryBtn, GhostBtn } from "./primitives";
import HeroPhone from "./phones/HeroPhone";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  const headline = "Nobody tells you how hard GLP-1 actually is.";
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
            <Eyebrow tone="blue">Honest GLP-1 Support</Eyebrow>
          </motion.div>

          <h1 style={{
            fontFamily: "var(--font-marketing)",
            fontSize: "clamp(44px, 6.4vw, 76px)",
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
                transition={{ delay: 0.15 + i * 0.06, duration: 0.7, ease }}
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
              maxWidth: 560, margin: "24px 0 0", textWrap: "pretty",
            }}>
            The nausea. The plateaus. The food noise that suddenly goes quiet. WeightEasy is built by people who&apos;ve been through it — and we&apos;ll be honest with you every step of the way.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95, duration: 0.6, ease }}
            style={{ display: "flex", gap: 12, marginTop: 32, flexWrap: "wrap" }}>
            <PrimaryBtn href="#download">Get the Honest Guide</PrimaryBtn>
            <GhostBtn href="#truths">See what&apos;s actually coming →</GhostBtn>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            style={{
              marginTop: 32, display: "flex", alignItems: "center", gap: 14,
              fontFamily: "var(--font-marketing)", fontSize: 14, color: "var(--color-ink-700)",
            }}>
            <span style={{ width: 8, height: 8, borderRadius: 999, background: "var(--color-success)" }} />
            No hype. No miracle promises. Just real support.
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
