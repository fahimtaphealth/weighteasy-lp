"use client";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

/**
 * Mobile-only sticky bottom CTA bar.
 * Hidden on screens wider than 920px (desktop hero shows the inline CTA).
 */
export default function StickyCTA() {
  return (
    <>
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.7, ease }}
        className="sticky-cta"
        style={{
          position: "fixed",
          left: 0,
          right: 0,
          bottom: 0,
          width: "100%",
          maxWidth: "100vw",
          zIndex: 50,
          boxSizing: "border-box",
          padding: "12px 16px calc(12px + env(safe-area-inset-bottom, 0px))",
          background: "rgba(253,253,253,0.92)",
          backdropFilter: "saturate(180%) blur(14px)",
          WebkitBackdropFilter: "saturate(180%) blur(14px)",
          borderTop: "0.5px solid var(--border-default)",
          boxShadow: "0 -10px 24px -16px rgba(12,12,13,0.12)",
        }}
      >
        <a
          href="#pricing"
          style={{
            display: "block",
            width: "100%",
            maxWidth: "100%",
            boxSizing: "border-box",
            height: 52,
            lineHeight: "52px",
            borderRadius: 9999,
            background: "var(--primary-default)",
            color: "var(--primary-on)",
            fontFamily: "var(--font-product)",
            fontWeight: 700,
            fontSize: 15,
            letterSpacing: "-0.004em",
            textDecoration: "none",
            textAlign: "center",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          Start for $9.99/month
        </a>
        <div
          style={{
            marginTop: 6,
            textAlign: "center",
            fontFamily: "var(--font-marketing)",
            fontSize: 11,
            color: "var(--color-ink-700)",
            opacity: 0.85,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          7-day free trial · Cancel anytime
        </div>
      </motion.div>
      <style>{`
        .sticky-cta { display: none; }
        @media (max-width: 920px) {
          .sticky-cta { display: block; }
          /* leave room at bottom of page so content isn't hidden behind the bar */
          main { padding-bottom: 110px !important; }
        }
      `}</style>
    </>
  );
}
