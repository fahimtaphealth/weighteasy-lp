"use client";
import { motion } from "framer-motion";
import { PhoneFrame, StatusBar } from "./PhoneFrame";

const ease = [0.16, 1, 0.3, 1] as const;
const linePath = "M0 18 Q 30 22 60 32 T 120 56 T 180 70 L 240 70";
const fillPath = `${linePath} L240 100 L0 100 Z`;

export default function PhonePlateau() {
  return (
    <PhoneFrame width={300} height={620}>
      <StatusBar />
      <div style={{ padding: "8px 18px 18px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontFamily: "var(--font-product)", fontSize: 18, fontWeight: 700, color: "var(--color-ink-900)" }}>Weight</div>
          <span style={{
            padding: "4px 10px", borderRadius: 9999,
            background: "var(--color-warning-container)", color: "var(--color-warning)",
            fontFamily: "var(--font-product)", fontSize: 10, fontWeight: 700, letterSpacing: "0.04em", textTransform: "uppercase",
          }}>Plateau · Day 7</span>
        </div>

        <div style={{
          marginTop: 14, padding: 16, borderRadius: 16,
          background: "var(--color-paper)", border: "0.5px solid var(--border-default)",
        }}>
          <div style={{ fontFamily: "var(--font-marketing)", fontSize: 32, fontWeight: 700, color: "var(--color-ink-900)", letterSpacing: "-0.02em", lineHeight: 1 }}>187.4 lb</div>
          <div style={{ fontFamily: "var(--font-product)", fontSize: 11, color: "var(--color-ink-500)", marginTop: 4 }}>No change in 7 days · this is normal</div>

          <div style={{ marginTop: 14, height: 100, position: "relative" }}>
            <motion.svg viewBox="0 0 240 100" width="100%" height="100%" preserveAspectRatio="none"
              initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }}>
              <defs>
                <linearGradient id="pg" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--color-brand-blue)" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="var(--color-brand-blue)" stopOpacity="0" />
                </linearGradient>
              </defs>
              <motion.path
                d={fillPath} fill="url(#pg)"
                variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { delay: 1.2, duration: 0.6 } } }}
              />
              <motion.path
                d={linePath} fill="none" stroke="var(--color-brand-blue)" strokeWidth="2.4" strokeLinecap="round"
                variants={{
                  hidden: { pathLength: 0 },
                  show: { pathLength: 1, transition: { duration: 1.4, ease } },
                }}
              />
              <motion.rect
                x="180" y="65" width="60" height="14" fill="var(--color-warning-container)" opacity="0.6" rx="3"
                variants={{ hidden: { opacity: 0 }, show: { opacity: 0.6, transition: { delay: 1.5, duration: 0.4 } } }}
              />
            </motion.svg>
          </div>
        </div>

        <div style={{
          marginTop: 12, padding: 14, borderRadius: 16,
          background: "var(--color-ink-900)", color: "var(--color-paper)",
        }}>
          <div style={{ fontFamily: "var(--font-product)", fontSize: 11, fontWeight: 600, opacity: 0.6, letterSpacing: "0.06em", textTransform: "uppercase" }}>What we know</div>
          <div style={{ fontFamily: "var(--font-marketing)", fontSize: 14, fontWeight: 500, marginTop: 6, lineHeight: 1.5 }}>
            Plateaus on day 7–14 are textbook for week 6 of Mounjaro. 81% of people break through within 14 days.
          </div>
          <div style={{ marginTop: 12, padding: "10px 12px", borderRadius: 10, background: "rgba(255,255,255,0.08)", fontFamily: "var(--font-product)", fontSize: 12, lineHeight: 1.4 }}>
            <strong style={{ fontWeight: 700 }}>Don&apos;t change anything.</strong> Same dose, same sleep, same protein. Check back Tuesday.
          </div>
        </div>
      </div>
    </PhoneFrame>
  );
}
