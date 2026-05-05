"use client";
import { motion } from "framer-motion";
import { Eyebrow, SectionTitle } from "./primitives";

const ease = [0.16, 1, 0.3, 1] as const;

const rows: { left: string; right: string }[] = [
  { left: "Log your weight", right: "Reads your weight against sleep, dose, cycle" },
  { left: "Log your shot", right: "Knows your shot day better than you do" },
  { left: "Log your food", right: "Tells you when your protein window is closing" },
  { left: "Pretty charts", right: "Plain-English coaching" },
  { left: "You figure out what it means", right: "The coach already did" },
  { left: "Tells you what happened", right: "Tells you what's coming" },
];

export default function TrackerVsCoach() {
  return (
    <section
      id="tracker-vs-coach"
      style={{
        padding: "120px 32px",
        background: "var(--surface-container-low)",
        borderTop: "0.5px solid var(--border-default)",
        borderBottom: "0.5px solid var(--border-default)",
      }}
    >
      <div style={{ maxWidth: 1080, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease }}
          style={{ maxWidth: 760 }}
        >
          <Eyebrow>Why WeightEasy</Eyebrow>
          <SectionTitle>You don&apos;t need another chart. You need someone paying attention.</SectionTitle>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.1, ease }}
          style={{
            marginTop: 56,
            borderRadius: 24,
            overflow: "hidden",
            border: "0.5px solid var(--border-default)",
            background: "var(--color-paper)",
          }}
        >
          <div
            className="tvc-head"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              background: "var(--color-paper)",
            }}
          >
            <div
              style={{
                padding: "20px 24px",
                fontFamily: "var(--font-marketing)",
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--color-ink-500)",
                background: "var(--surface-container-low)",
                borderBottom: "0.5px solid var(--border-default)",
              }}
            >
              Other GLP-1 apps
            </div>
            <div
              style={{
                padding: "20px 24px",
                fontFamily: "var(--font-marketing)",
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--color-paper)",
                background: "var(--color-brand-blue)",
                borderBottom: "0.5px solid var(--border-default)",
              }}
            >
              WeightEasy
            </div>
          </div>

          {rows.map((r, i) => (
            <div
              key={i}
              className="tvc-row"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                borderTop: i === 0 ? "none" : "0.5px solid var(--border-default)",
              }}
            >
              <div
                style={{
                  padding: "22px 24px",
                  fontFamily: "var(--font-marketing)",
                  fontSize: 16,
                  lineHeight: 1.45,
                  color: "var(--color-ink-700)",
                  background: "var(--surface-container-low)",
                  textWrap: "pretty",
                }}
              >
                {r.left}
              </div>
              <div
                style={{
                  padding: "22px 24px",
                  fontFamily: "var(--font-marketing)",
                  fontSize: 16,
                  lineHeight: 1.45,
                  color: "var(--color-ink-900)",
                  background: "rgba(48, 119, 235, 0.06)",
                  fontWeight: 600,
                  textWrap: "pretty",
                  borderLeft: "0.5px solid var(--border-default)",
                }}
              >
                {r.right}
              </div>
            </div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.4, duration: 0.7, ease }}
          style={{
            textAlign: "center",
            marginTop: 36,
            fontFamily: "var(--font-marketing)",
            fontStyle: "italic",
            fontSize: 18,
            color: "var(--color-ink-700)",
          }}
        >
          Trackers ask you questions. WeightEasy answers them.
        </motion.p>
      </div>
    </section>
  );
}
