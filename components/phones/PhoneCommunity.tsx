"use client";
import { motion } from "framer-motion";
import { PhoneFrame, StatusBar } from "./PhoneFrame";

const ease = [0.16, 1, 0.3, 1] as const;

const messages = [
  { name: "Asha", time: "12m", msg: "is anyone else just… exhausted today? i can barely keep my eyes open at 3pm", reply: 18 },
  { name: "Jordan", time: "1h", msg: "the food taste thing is really getting to me. coffee tastes like dirt 😭", reply: 24 },
  { name: "Megan", time: "3h", msg: "made it through week 2!! ginger tea + saltines saved me. you got this everyone", reply: 47 },
];

const colors = ["var(--color-brand-blue)", "var(--color-brand-violet)", "var(--color-warning-2)"];

export default function PhoneCommunity() {
  return (
    <PhoneFrame width={300} height={620}>
      <StatusBar />
      <div style={{ padding: "8px 18px 18px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontFamily: "var(--font-product)", fontSize: 18, fontWeight: 700, color: "var(--color-ink-900)" }}>Your week 2 group</div>
          <motion.span
            initial={{ scale: 0.6, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, ease, delay: 0.2 }}
            style={{
              padding: "3px 8px", borderRadius: 999,
              background: "var(--status-success-container)", color: "var(--status-success)",
              fontFamily: "var(--font-product)", fontSize: 10, fontWeight: 700,
            }}
          >247 active</motion.span>
        </div>
        <div style={{ fontFamily: "var(--font-product)", fontSize: 12, color: "var(--color-ink-500)", marginTop: 2 }}>People who started the same week as you</div>

        {messages.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.35 + i * 0.18, duration: 0.55, ease }}
            style={{
              marginTop: 12, padding: 12, borderRadius: 14,
              background: "var(--color-paper)", border: "0.5px solid var(--border-default)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{
                width: 28, height: 28, borderRadius: 999,
                background: colors[i],
                color: "white", display: "grid", placeItems: "center",
                fontFamily: "var(--font-product)", fontSize: 11, fontWeight: 700,
              }}>{c.name[0]}</div>
              <div style={{ flex: 1, fontFamily: "var(--font-product)", fontSize: 12, fontWeight: 700, color: "var(--color-ink-900)" }}>{c.name}</div>
              <div style={{ fontFamily: "var(--font-product)", fontSize: 11, color: "var(--color-ink-500)" }}>{c.time}</div>
            </div>
            <div style={{ fontFamily: "var(--font-product)", fontSize: 13, color: "var(--color-ink-800)", marginTop: 6, lineHeight: 1.4 }}>{c.msg}</div>
            <div style={{ fontFamily: "var(--font-product)", fontSize: 11, color: "var(--color-ink-500)", marginTop: 8 }}>♡ {c.reply} · same here</div>
          </motion.div>
        ))}
      </div>
    </PhoneFrame>
  );
}
