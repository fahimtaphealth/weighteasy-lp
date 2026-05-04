"use client";
import { motion } from "framer-motion";
import { Eyebrow, SectionTitle, SectionLede } from "./primitives";

const ease = [0.16, 1, 0.3, 1] as const;

const truths = [
  { n: "01", title: "The nausea peaks around week 3", body: "Not week 1. Not month 2. Week 3 is the hardest, and most people quit right before it gets better. We'll tell you the exact day to brace for, and the exact day it eases." },
  { n: "02", title: "You might lose muscle, not just fat", body: "Up to 40% of GLP-1 weight loss can be lean mass if you're not careful. Protein targets matter. Resistance training matters. We'll show you the actual numbers." },
  { n: "03", title: "Hair loss is common and temporary", body: "Around month 3, your shower drain might look concerning. It's almost always rapid weight loss, not the medication itself. It comes back. We'll walk you through it." },
  { n: "04", title: "Plateaus are normal — here's why", body: "Your body adapts. Receptor sensitivity shifts. Most plateaus break in 9–14 days without changing anything. We have data on this. You're not failing." },
  { n: "05", title: "Food noise silence can feel disorienting", body: 'When the constant hum of "what should I eat" goes quiet, it\u2019s wonderful — and weirdly grief-y. You\u2019ll need to relearn what hunger feels like. That\u2019s okay.' },
];

export default function Truths() {
  return (
    <section id="truths" style={{ padding: "120px 32px", maxWidth: 1140, margin: "0 auto" }}>
      <motion.div
        initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7, ease }}
        style={{ maxWidth: 760 }}>
        <Eyebrow>The truth</Eyebrow>
        <SectionTitle>Things your doctor mentioned once, then moved on from.</SectionTitle>
        <SectionLede>Real truths about GLP-1 that nobody prepares you for.</SectionLede>
      </motion.div>

      <div style={{ marginTop: 56, borderTop: "0.5px solid var(--border-default)" }}>
        {truths.map((t, i) => (
          <motion.article
            key={t.n}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: i * 0.08, ease }}
            style={{
              display: "grid",
              gridTemplateColumns: "auto 1fr 2fr",
              gap: 32, alignItems: "start",
              padding: "32px 0",
              borderBottom: "0.5px solid var(--border-default)",
            }}
            className="truth-row"
          >
            <div style={{
              fontFamily: "var(--font-marketing)", fontSize: 14, fontWeight: 700,
              color: "var(--color-brand-blue)", letterSpacing: "0.08em",
              minWidth: 32, paddingTop: 6,
            }}>{t.n}</div>
            <h3 style={{
              fontFamily: "var(--font-marketing)", fontSize: "clamp(22px, 2.6vw, 30px)",
              fontWeight: 700, lineHeight: 1.15, color: "var(--color-ink-900)",
              margin: 0, letterSpacing: "-0.015em", textWrap: "balance",
            }}>{t.title}</h3>
            <p style={{
              fontFamily: "var(--font-marketing)", fontSize: 17, lineHeight: 1.55,
              color: "var(--color-ink-700)", margin: 0, paddingTop: 4, textWrap: "pretty",
            }}>{t.body}</p>
          </motion.article>
        ))}
      </div>
      <style>{`@media (max-width: 800px) { .truth-row { grid-template-columns: 1fr !important; gap: 12px !important; } }`}</style>
    </section>
  );
}
