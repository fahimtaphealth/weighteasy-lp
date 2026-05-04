"use client";
import { motion } from "framer-motion";
import { PhoneFrame, StatusBar } from "./PhoneFrame";

const ease = [0.16, 1, 0.3, 1] as const;

export default function PhoneTimeline() {
  return (
    <PhoneFrame width={300} height={620}>
      <StatusBar />
      <div style={{ padding: "8px 18px 18px" }}>
        <div style={{ fontFamily: "var(--font-product)", fontSize: 18, fontWeight: 700, color: "var(--color-ink-900)" }}>Your next 4 weeks</div>
        <div style={{ fontFamily: "var(--font-product)", fontSize: 12, color: "var(--color-ink-500)", marginTop: 2 }}>Mounjaro · 2.5mg → 5mg</div>

        <div style={{ marginTop: 20, position: "relative" }}>
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease }}
            style={{ position: "absolute", left: 16, top: 16, bottom: 16, width: 2, background: "var(--color-ink-100)", transformOrigin: "top" }}
          />
          {[
            { week: "This week", title: "Stomach finds rhythm", body: "Eating ~60% normal portions. Bone broth helps.", current: true },
            { week: "Next week", title: "Energy starts back", body: "Most people sleep better around day 14.", current: false },
            { week: "Week after", title: "First plateau likely", body: "Don't panic — it usually breaks in 9 days.", current: false },
            { week: "Dose bump", title: "Reset your expectations", body: "Nausea returns mildly for 4–5 days. Plan light meals.", current: false },
          ].map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.3 + i * 0.15, duration: 0.6, ease }}
              style={{ display: "flex", gap: 16, marginBottom: 16, position: "relative", paddingLeft: 0 }}
            >
              <div style={{
                width: 34, height: 34, borderRadius: 999,
                background: b.current ? "var(--color-brand-blue)" : "var(--color-paper)",
                border: b.current ? "none" : "2px solid var(--color-ink-200)",
                color: b.current ? "white" : "var(--color-ink-500)",
                display: "grid", placeItems: "center",
                fontFamily: "var(--font-product)", fontSize: 11, fontWeight: 700,
                flexShrink: 0, zIndex: 1,
              }}>{i + 1}</div>
              <div style={{ flex: 1, paddingTop: 2 }}>
                <div style={{ fontFamily: "var(--font-product)", fontSize: 11, fontWeight: 700, color: b.current ? "var(--color-brand-blue)" : "var(--color-ink-500)", textTransform: "uppercase", letterSpacing: "0.05em" }}>{b.week}</div>
                <div style={{ fontFamily: "var(--font-product)", fontSize: 14, fontWeight: 700, color: "var(--color-ink-900)", marginTop: 2 }}>{b.title}</div>
                <div style={{ fontFamily: "var(--font-product)", fontSize: 12, color: "var(--color-ink-600)", marginTop: 3, lineHeight: 1.4 }}>{b.body}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PhoneFrame>
  );
}
