"use client";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Manifesto() {
  return (
    <section id="about" style={{
      padding: "120px 32px",
      background: "var(--color-ink-900)",
      color: "var(--color-paper)",
    }}>
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 1, ease }}
        style={{ maxWidth: 920, margin: "0 auto", textAlign: "center" }}
      >
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          fontFamily: "var(--font-marketing)", fontSize: 12, fontWeight: 700,
          color: "var(--color-brand-blue-500)", letterSpacing: "0.08em",
          textTransform: "uppercase", marginBottom: 24,
        }}>
          <span style={{ width: 24, height: 1, background: "currentColor", opacity: 0.6 }} />
          About us
        </div>
        <h2 style={{
          fontFamily: "var(--font-marketing)",
          fontSize: "clamp(36px, 5vw, 60px)", fontWeight: 700, lineHeight: 1.1,
          letterSpacing: "-0.025em", margin: 0, textWrap: "balance",
        }}>
          We&apos;re not a weight loss program. We&apos;re not a clinic.
        </h2>
        <motion.p
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ delay: 0.3, duration: 1, ease }}
          style={{
            fontFamily: "var(--font-marketing)", fontSize: 22, lineHeight: 1.5,
            color: "rgba(253,253,253,0.7)", marginTop: 24, textWrap: "pretty",
          }}>
          We&apos;re a guide built by GLP-1 users, for GLP-1 users.
        </motion.p>
      </motion.div>
    </section>
  );
}
