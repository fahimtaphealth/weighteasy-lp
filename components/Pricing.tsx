"use client";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

const ease = [0.16, 1, 0.3, 1] as const;

const features = [
  "AI coach trained on GLP-1",
  "Cycle-aware meal plans",
  "Dose, symptom, food & fitness tracking",
  "Weekly progress reviews",
];

function Check() {
  return (
    <span
      style={{
        width: 22,
        height: 22,
        borderRadius: 999,
        background: "var(--primary-container)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      <svg width="11" height="9" viewBox="0 0 11 9" fill="none" aria-hidden>
        <path
          d="M1 4.5L4 7.5L10 1"
          stroke="var(--color-brand-blue)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

function PlanCard({
  name,
  priceNode,
  caption,
  ctaLabel,
  ctaHref = "#download",
  highlighted = false,
  badge,
}: {
  name: string;
  priceNode: ReactNode;
  caption: string;
  ctaLabel: string;
  ctaHref?: string;
  highlighted?: boolean;
  badge?: string;
}) {
  return (
    <div
      style={{
        position: "relative",
        padding: 36,
        borderRadius: 24,
        background: "var(--color-paper)",
        border: highlighted
          ? "2px solid var(--color-brand-blue)"
          : "0.5px solid var(--border-default)",
        display: "flex",
        flexDirection: "column",
        gap: 22,
        boxShadow: highlighted
          ? "0 24px 40px -20px rgba(48,119,235,0.18)"
          : "0 14px 30px -22px rgba(12,12,13,0.08)",
      }}
    >
      {badge && (
        <span
          style={{
            position: "absolute",
            top: -12,
            right: 24,
            padding: "6px 12px",
            borderRadius: 999,
            background: "var(--color-brand-blue)",
            color: "var(--color-paper)",
            fontFamily: "var(--font-marketing)",
            fontSize: 11.5,
            fontWeight: 700,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
          }}
        >
          {badge}
        </span>
      )}
      <div
        style={{
          fontFamily: "var(--font-marketing)",
          fontSize: 17,
          fontWeight: 700,
          color: "var(--color-ink-900)",
          letterSpacing: "-0.01em",
        }}
      >
        {name}
      </div>
      <div
        style={{
          fontFamily: "var(--font-marketing)",
          color: "var(--color-ink-900)",
          letterSpacing: "-0.025em",
          lineHeight: 1,
        }}
      >
        {priceNode}
      </div>
      <div
        style={{
          fontFamily: "var(--font-marketing)",
          fontSize: 15,
          color: "var(--color-ink-700)",
          marginTop: -8,
        }}
      >
        {caption}
      </div>
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: "8px 0 0",
          display: "flex",
          flexDirection: "column",
          gap: 12,
        }}
      >
        {features.map((f) => (
          <li
            key={f}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              fontFamily: "var(--font-marketing)",
              fontSize: 15.5,
              color: "var(--color-ink-800)",
            }}
          >
            <Check />
            {f}
          </li>
        ))}
      </ul>
      <a
        href={ctaHref}
        style={{
          marginTop: "auto",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          height: 54,
          borderRadius: 9999,
          textDecoration: "none",
          fontFamily: "var(--font-product)",
          fontSize: 15,
          fontWeight: 700,
          letterSpacing: "-0.005em",
          background: highlighted ? "var(--color-ink-900)" : "transparent",
          color: highlighted ? "var(--color-paper)" : "var(--color-ink-900)",
          border: highlighted ? "none" : "1px solid var(--border-default)",
        }}
      >
        {ctaLabel}
      </a>
    </div>
  );
}

export default function Pricing() {
  return (
    <section
      id="pricing"
      style={{
        padding: "120px 32px",
        background: "var(--surface-container-low)",
        borderTop: "0.5px solid var(--border-default)",
        borderBottom: "0.5px solid var(--border-default)",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease }}
        style={{ maxWidth: 820, margin: "0 auto", textAlign: "center" }}
      >
        <span
          style={{
            display: "inline-block",
            padding: "6px 14px",
            borderRadius: 999,
            background: "var(--primary-container)",
            color: "var(--color-brand-blue)",
            fontFamily: "var(--font-marketing)",
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: 20,
          }}
        >
          Simple pricing
        </span>
        <h2
          style={{
            fontFamily: "var(--font-marketing)",
            fontSize: "clamp(38px, 5.4vw, 60px)",
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: "-0.025em",
            color: "var(--color-ink-900)",
            margin: 0,
            textWrap: "balance",
          }}
        >
          Choose a plan.{" "}
          <span style={{ color: "var(--color-brand-blue)" }}>Start your free trial.</span>
        </h2>
        <p
          style={{
            fontFamily: "var(--font-marketing)",
            fontSize: 18,
            lineHeight: 1.55,
            color: "var(--color-ink-700)",
            margin: "20px auto 0",
            maxWidth: 620,
            textWrap: "pretty",
          }}
        >
          Both plans include everything. No upsells, no ads, no sharing your data.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, delay: 0.1, ease }}
        className="pricing-grid"
        style={{
          maxWidth: 980,
          margin: "56px auto 0",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 24,
          alignItems: "stretch",
        }}
      >
        <PlanCard
          name="Monthly"
          priceNode={
            <span>
              <span style={{ fontSize: "clamp(48px, 6vw, 64px)", fontWeight: 700 }}>$9.99</span>
              <span
                style={{
                  fontSize: 18,
                  color: "var(--color-ink-500)",
                  marginLeft: 4,
                  letterSpacing: 0,
                }}
              >
                /month
              </span>
            </span>
          }
          caption="Billed monthly. Cancel anytime."
          ctaLabel="Start now"
        />
        <PlanCard
          name="Yearly"
          highlighted
          badge="59% off"
          priceNode={
            <span>
              <span
                style={{
                  fontSize: 22,
                  color: "var(--color-ink-500)",
                  textDecoration: "line-through",
                  marginRight: 10,
                  letterSpacing: 0,
                }}
              >
                $120
              </span>
              <span style={{ fontSize: "clamp(48px, 6vw, 64px)", fontWeight: 700 }}>$49.99</span>
              <span
                style={{
                  fontSize: 18,
                  color: "var(--color-ink-500)",
                  marginLeft: 4,
                  letterSpacing: 0,
                }}
              >
                /year
              </span>
            </span>
          }
          caption="That's $4.17 / month. Best value."
          ctaLabel="Start 7-day free trial"
        />
      </motion.div>

      <style>{`
        @media (max-width: 800px) {
          .pricing-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
