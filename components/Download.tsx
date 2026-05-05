"use client";
import { motion } from "framer-motion";
import { Eyebrow } from "./primitives";

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
          Your GLP-1 coach is waiting.
        </h2>
        <p style={{
          fontFamily: "var(--font-marketing)", fontSize: 19, lineHeight: 1.55,
          color: "var(--color-ink-700)", marginTop: 20, textWrap: "pretty",
        }}>
          Six questions to start. By next week, it&apos;ll know you better than any app you&apos;ve ever used. Free to try. No account needed.
        </p>

        <div style={{ display: "flex", justifyContent: "center", gap: 12, marginTop: 32, flexWrap: "wrap" }}>
          {[
            { label: "App Store", glyph: "" },
            { label: "Google Play", glyph: "▶" },
          ].map((s, i) => (
            <motion.a
              key={s.label} href="#"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.6, ease }}
              whileHover={{ y: -3 }}
              style={{
                display: "inline-flex", alignItems: "center", gap: 14,
                padding: "12px 24px", borderRadius: 16,
                background: "var(--color-ink-900)", color: "var(--color-paper)",
                textDecoration: "none", minWidth: 200,
              }}>
              <div style={{ fontSize: 24, lineHeight: 1 }}>{s.glyph || "●"}</div>
              <div style={{ textAlign: "left" }}>
                <div style={{ fontFamily: "var(--font-product)", fontSize: 11, opacity: 0.7 }}>Download on the</div>
                <div style={{ fontFamily: "var(--font-marketing)", fontSize: 18, fontWeight: 700, letterSpacing: "-0.01em" }}>{s.label}</div>
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
            color: "var(--color-ink-700)", marginTop: 24, opacity: 0.85,
          }}>
          Built by people who&apos;ve been through it. Trained on 12,000+ real GLP-1 journeys.
        </motion.p>
      </motion.div>
    </section>
  );
}
