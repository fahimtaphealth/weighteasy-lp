"use client";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { Eyebrow, SectionTitle } from "./primitives";
import PhoneTimeline from "./phones/PhoneTimeline";
import PhonePlateau from "./phones/PhonePlateau";
import PhoneCommunity from "./phones/PhoneCommunity";

const ease = [0.16, 1, 0.3, 1] as const;

function HelpRow({ eyebrow, title, body, phone, reverse }: {
  eyebrow: string; title: string; body: ReactNode; phone: ReactNode; reverse?: boolean;
}) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: reverse ? "0.95fr 1fr" : "1fr 0.95fr",
        gap: 64, alignItems: "center", padding: "64px 0",
      }}
      className="help-row"
    >
      {!reverse && (
        <motion.div
          initial={{ opacity: 0, x: -30, rotate: -2 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease }}
          style={{ display: "flex", justifyContent: "center" }}
        >{phone}</motion.div>
      )}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, delay: 0.1, ease }}
      >
        <Eyebrow tone="blue">{eyebrow}</Eyebrow>
        <h3 style={{
          fontFamily: "var(--font-marketing)", fontSize: "clamp(28px, 3.4vw, 42px)",
          fontWeight: 700, lineHeight: 1.1, color: "var(--color-ink-900)",
          margin: 0, letterSpacing: "-0.02em", textWrap: "balance",
        }}>{title}</h3>
        <p style={{
          fontFamily: "var(--font-marketing)", fontSize: 17, lineHeight: 1.55,
          color: "var(--color-ink-700)", margin: "16px 0 0", maxWidth: 480,
        }}>{body}</p>
      </motion.div>
      {reverse && (
        <motion.div
          initial={{ opacity: 0, x: 30, rotate: 2 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease }}
          style={{ display: "flex", justifyContent: "center" }}
        >{phone}</motion.div>
      )}
    </div>
  );
}

export default function Help() {
  return (
    <section id="help" style={{
      padding: "96px 32px",
      background: "var(--surface-container-low)",
      borderTop: "0.5px solid var(--border-default)",
      borderBottom: "0.5px solid var(--border-default)",
    }}>
      <div style={{ maxWidth: 1140, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7, ease }}
          style={{ maxWidth: 760 }}>
          <Eyebrow>How we help</Eyebrow>
          <SectionTitle>Honest help for every week.</SectionTitle>
        </motion.div>

        <HelpRow
          eyebrow="Week-by-week guidance"
          title="We'll tell you what's coming."
          body="Week-by-week guidance on what to expect — the good, the hard, and the weird. No surprises in the mirror at 11pm."
          phone={<PhoneTimeline />}
        />
        <HelpRow
          reverse
          eyebrow="Plateau science"
          title="We won't sugarcoat plateaus."
          body="Real data on why they happen, how long they last, and what actually works. Spoiler: usually nothing. Most plateaus break on their own."
          phone={<PhonePlateau />}
        />
        <HelpRow
          eyebrow="A community that gets it"
          title="The people in week 2, the same week as you."
          body={'Connect with people in the exact same week of their journey. No before/after pressure. No transformation reels. Just "is this normal?" and "yes, here\u2019s why."'}
          phone={<PhoneCommunity />}
        />
      </div>
      <style>{`@media (max-width: 920px) { .help-row { grid-template-columns: 1fr !important; gap: 32px !important; padding: 40px 0 !important; } }`}</style>
    </section>
  );
}
