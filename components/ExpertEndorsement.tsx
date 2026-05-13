"use client";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

export default function ExpertEndorsement() {
  return (
    <section
      style={{
        padding: "120px 32px",
        background: "var(--surface-container-low)",
        borderTop: "0.5px solid var(--border-default)",
        borderBottom: "0.5px solid var(--border-default)",
      }}
    >
      <div style={{ maxWidth: 1080, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease }}
          style={{ textAlign: "center", maxWidth: 820, margin: "0 auto" }}
        >
          <div
            style={{
              fontFamily: "var(--font-marketing)",
              fontSize: 12,
              fontWeight: 700,
              color: "var(--color-brand-blue)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            Trusted by clinicians
          </div>
          <h2
            style={{
              fontFamily: "var(--font-marketing)",
              fontSize: "clamp(34px, 4.8vw, 52px)",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.025em",
              color: "var(--color-ink-900)",
              margin: 0,
              textWrap: "balance",
            }}
          >
            Reviewed by doctors who actually prescribe GLP-1.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.1, ease }}
          className="expert-card"
          style={{
            marginTop: 48,
            display: "grid",
            gridTemplateColumns: "240px 1fr",
            gap: 36,
            alignItems: "center",
            padding: 36,
            borderRadius: 28,
            background: "var(--color-paper)",
            border: "0.5px solid var(--border-default)",
            boxShadow: "0 20px 40px -28px rgba(12,12,13,0.12)",
          }}
        >
          <div
            style={{
              aspectRatio: "1/1",
              borderRadius: 20,
              overflow: "hidden",
              background: "var(--primary-container)",
              border: "0.5px solid var(--border-default)",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=480&h=480&fit=crop&crop=faces&q=80"
              alt="Dr. Sarah Whitman, endocrinologist"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>
          <div>
            <div
              style={{
                fontFamily: "var(--font-marketing)",
                fontSize: 36,
                lineHeight: 1,
                color: "var(--color-brand-blue)",
                opacity: 0.4,
              }}
            >
              &ldquo;
            </div>
            <p
              style={{
                fontFamily: "var(--font-marketing)",
                fontSize: "clamp(18px, 2vw, 22px)",
                lineHeight: 1.5,
                color: "var(--color-ink-900)",
                fontWeight: 500,
                margin: "8px 0 0",
                letterSpacing: "-0.005em",
                textWrap: "pretty",
              }}
            >
              The first 12 weeks on GLP-1 are where most people lose the plot — not because the medication
              fails, but because nobody&apos;s there at 9pm on a Sunday. WeightEasy fills that gap with
              evidence-based, personalized guidance. I recommend it to my patients.
            </p>
            <div
              style={{
                marginTop: 28,
                display: "flex",
                alignItems: "center",
                gap: 14,
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-marketing)",
                    fontSize: 16,
                    fontWeight: 700,
                    color: "var(--color-ink-900)",
                  }}
                >
                  Dr. Sarah Whitman, MD
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-marketing)",
                    fontSize: 14,
                    color: "var(--color-ink-700)",
                  }}
                >
                  Endocrinologist · 12 years specializing in GLP-1
                </div>
              </div>
              <span
                style={{
                  marginLeft: "auto",
                  padding: "6px 12px",
                  borderRadius: 999,
                  background: "var(--primary-container)",
                  color: "var(--color-brand-blue)",
                  fontFamily: "var(--font-marketing)",
                  fontSize: 11.5,
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                Medical Advisor
              </span>
            </div>
          </div>
        </motion.div>
      </div>
      <style>{`
        @media (max-width: 760px) {
          .expert-card { grid-template-columns: 1fr !important; gap: 24px !important; padding: 28px !important; }
        }
      `}</style>
    </section>
  );
}
