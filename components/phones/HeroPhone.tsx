"use client";
import { motion } from "framer-motion";
import { PhoneFrame, StatusBar } from "./PhoneFrame";

export default function HeroPhone() {
  const ease = [0.16, 1, 0.3, 1] as const;
  return (
    <PhoneFrame>
      <StatusBar />
      <div style={{ padding: "8px 18px 18px" }}>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5, ease }}
          style={{ fontFamily: "var(--font-product)", fontSize: 12, fontWeight: 600, color: "var(--color-ink-500)", letterSpacing: "0.06em", textTransform: "uppercase" }}
        >Week 2 · Day 11</motion.div>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6, ease }}
          style={{ fontFamily: "var(--font-marketing)", fontSize: 24, fontWeight: 700, color: "var(--color-ink-900)", marginTop: 4, letterSpacing: "-0.02em", lineHeight: 1.15 }}
        >Hey Megan — this part is rough. We know.</motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.6, ease }}
          style={{ marginTop: 16, padding: 14, borderRadius: 16, background: "var(--primary-container)" }}
        >
          <div style={{ fontFamily: "var(--font-product)", fontSize: 11, fontWeight: 700, color: "var(--primary-on-container)", letterSpacing: "0.06em", textTransform: "uppercase" }}>What&apos;s normal right now</div>
          <ul style={{ margin: "10px 0 0", padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
            {["Nausea peaks this week", "Food tastes wrong", "You're tired by 8pm"].map((t, i) => (
              <motion.li
                key={t}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 + i * 0.1, duration: 0.4 }}
                style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: "var(--font-product)", fontSize: 13, color: "var(--color-ink-800)" }}
              >
                <span style={{ width: 14, height: 14, borderRadius: 999, background: "var(--color-brand-blue)", color: "white", display: "grid", placeItems: "center", fontSize: 9, fontWeight: 700 }}>✓</span>
                {t}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.6, ease }}
          style={{ marginTop: 12, padding: 14, borderRadius: 16, background: "var(--surface-inverse)", color: "var(--color-paper)" }}
        >
          <div style={{ fontFamily: "var(--font-product)", fontSize: 11, fontWeight: 600, opacity: 0.6, letterSpacing: "0.06em", textTransform: "uppercase" }}>This passes</div>
          <div style={{ fontFamily: "var(--font-marketing)", fontSize: 16, fontWeight: 600, marginTop: 6, lineHeight: 1.35 }}>
            By day 17, 78% of people on your dose feel meaningfully better.
          </div>
        </motion.div>

        <div style={{ fontFamily: "var(--font-product)", fontSize: 13, fontWeight: 700, color: "var(--color-ink-900)", margin: "18px 0 8px" }}>Today, just three things</div>
        {[
          { glyph: "💧", label: "Sip electrolytes", sub: "Half a glass every 20 min" },
          { glyph: "🚶", label: "10 minute walk", sub: "After lunch helps the most" },
          { glyph: "🛏", label: "In bed by 10", sub: "Sleep is doing the work" },
        ].map((r, i) => (
          <motion.div
            key={r.label}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6 + i * 0.1, duration: 0.5, ease }}
            style={{
              display: "flex", alignItems: "center", gap: 12,
              padding: "10px 12px", marginBottom: 6, borderRadius: 12,
              background: "var(--surface-container-low)",
              border: "0.5px solid var(--border-subtle)",
            }}
          >
            <div style={{ width: 30, height: 30, borderRadius: 8, background: "white", display: "grid", placeItems: "center", fontSize: 16 }}>{r.glyph}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: "var(--font-product)", fontSize: 13, fontWeight: 600, color: "var(--color-ink-900)" }}>{r.label}</div>
              <div style={{ fontFamily: "var(--font-product)", fontSize: 11, color: "var(--color-ink-500)" }}>{r.sub}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </PhoneFrame>
  );
}
