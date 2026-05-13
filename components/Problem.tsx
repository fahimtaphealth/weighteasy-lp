"use client";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const problems = [
  {
    title: "Nobody warned you about week 3.",
    body: "The nausea, the food noise going quiet, the hair in the shower. Most people quit right before it gets better.",
    img:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=900&h=700&fit=crop&crop=faces&q=80",
    alt: "A woman taking a quiet moment to herself",
  },
  {
    title: "Generic apps just track. They don't coach.",
    body: "You log your weight, the app makes a chart. Cool — but what do you do tomorrow when the scale jumps after a bad night's sleep?",
    img:
      "https://images.unsplash.com/photo-1488508872907-592763824245?w=900&h=700&fit=crop&q=80",
    alt: "Someone looking at a tracking app on their phone, unsure what to do",
  },
  {
    title: "Your doctor isn't there at 9pm on Sunday.",
    body: "The hardest moments don't happen in clinic hours. You shouldn't have to wait two weeks for an answer.",
    img:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=900&h=700&fit=crop&crop=faces&q=80",
    alt: "A man alone with his phone late at night, looking concerned",
  },
];

export default function Problem() {
  return (
    <section
      style={{
        padding: "120px 32px",
        background: "var(--surface-default)",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease }}
          style={{ textAlign: "center", maxWidth: 780, margin: "0 auto" }}
        >
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
            GLP-1 has been hard.
          </h2>
          <p
            style={{
              fontFamily: "var(--font-marketing)",
              fontSize: 19,
              lineHeight: 1.55,
              color: "var(--color-ink-700)",
              marginTop: 18,
              textWrap: "pretty",
            }}
          >
            Three things almost every person on GLP-1 quietly admits.
          </p>
        </motion.div>

        <div
          className="problem-grid"
          style={{
            marginTop: 56,
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 20,
          }}
        >
          {problems.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease }}
              style={{
                display: "flex",
                flexDirection: "column",
                borderRadius: 24,
                background: "var(--color-paper)",
                border: "0.5px solid var(--border-default)",
                overflow: "hidden",
                minHeight: 360,
              }}
            >
              {/* Person photo at the top of the card */}
              <div
                style={{
                  position: "relative",
                  aspectRatio: "4/3",
                  background: "var(--primary-container)",
                  overflow: "hidden",
                }}
              >
                <img
                  src={p.img}
                  alt={p.alt}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
                {/* subtle bottom fade so the card body feels connected */}
                <div
                  style={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    bottom: 0,
                    height: "30%",
                    background:
                      "linear-gradient(to top, rgba(253,253,253,0.85), transparent)",
                    pointerEvents: "none",
                  }}
                />
              </div>

              <div
                style={{
                  padding: 26,
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-marketing)",
                    fontSize: 22,
                    fontWeight: 700,
                    lineHeight: 1.2,
                    color: "var(--color-ink-900)",
                    letterSpacing: "-0.015em",
                    margin: 0,
                    textWrap: "balance",
                  }}
                >
                  {p.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-marketing)",
                    fontSize: 15.5,
                    lineHeight: 1.55,
                    color: "var(--color-ink-700)",
                    margin: 0,
                    textWrap: "pretty",
                  }}
                >
                  {p.body}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 920px) {
          .problem-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
