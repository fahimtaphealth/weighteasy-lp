"use client";
import { motion } from "framer-motion";
import { Eyebrow, PrimaryBtn } from "./primitives";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Download() {
  return (
    <section id="download" style={{
      padding: "120px 32px",
      background: "var(--primary-container)",
    }}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease }}
        style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
        <Eyebrow>Start today</Eyebrow>
        <h2 style={{
          fontFamily: "var(--font-marketing)",
          fontSize: "clamp(40px, 5.6vw, 64px)", fontWeight: 700, lineHeight: 1.05,
          letterSpacing: "-0.025em", color: "var(--color-ink-900)", margin: 0, textWrap: "balance",
        }}>
          You don&apos;t have to figure this out alone.
        </h2>
        <p style={{
          fontFamily: "var(--font-marketing)", fontSize: 19, lineHeight: 1.55,
          color: "var(--color-ink-700)", marginTop: 20, textWrap: "pretty",
        }}>
          Six questions to get started. By next week, your coach will already know your nausea pattern,
          your hunger windows, and the day your next plateau breaks. Free for 7 days.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.2, duration: 0.6, ease }}
          style={{ display: "flex", justifyContent: "center", marginTop: 32 }}>
          <PrimaryBtn href="#pricing">Get My Personalized Coach</PrimaryBtn>
        </motion.div>

        <div style={{ display: "flex", justifyContent: "center", gap: 12, marginTop: 24, flexWrap: "wrap" }}>
          {[
            { label: "App Store", glyph: "" },
            { label: "Google Play", glyph: "▶" },
          ].map((s, i) => (
            <motion.a
              key={s.label} href="#"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.35 + i * 0.08, duration: 0.5, ease }}
              whileHover={{ y: -2 }}
              style={{
                display: "inline-flex", alignItems: "center", gap: 12,
                padding: "10px 18px", borderRadius: 14,
                background: "transparent", color: "var(--color-ink-900)",
                border: "1px solid var(--border-default)",
                textDecoration: "none",
              }}>
              <div style={{ fontSize: 18, lineHeight: 1 }}>{s.glyph || "●"}</div>
              <div style={{ textAlign: "left" }}>
                <div style={{ fontFamily: "var(--font-product)", fontSize: 10, opacity: 0.65 }}>Download on the</div>
                <div style={{ fontFamily: "var(--font-marketing)", fontSize: 14, fontWeight: 700, letterSpacing: "-0.01em" }}>{s.label}</div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.6, duration: 0.6 }}
          style={{
            fontFamily: "var(--font-marketing)", fontSize: 13.5, lineHeight: 1.5,
            color: "var(--color-ink-700)", marginTop: 32, opacity: 0.85,
          }}>
          Built by people who&apos;ve been through it. Trained on 12,000+ real GLP-1 journeys.
        </motion.p>
      </motion.div>
    </section>
  );
}
