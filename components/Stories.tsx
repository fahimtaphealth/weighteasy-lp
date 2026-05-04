"use client";
import { motion } from "framer-motion";
import { Eyebrow, SectionTitle, SectionLede } from "./primitives";

const ease = [0.16, 1, 0.3, 1] as const;

const stories = [
  {
    quote: "Week 2 was the worst. I couldn't eat, couldn't sleep. But WeightEasy told me it would pass by day 5 — and it did. That's all I needed to hear.",
    name: "Megan R.", age: 41,
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=240&h=240&fit=crop&crop=faces&q=80",
  },
  {
    quote: "I stopped losing weight for 3 weeks and panicked. The app showed me it's a plateau, not a failure. I stayed on and broke through.",
    name: "David K.", age: 55,
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=240&h=240&fit=crop&crop=faces&q=80",
  },
  {
    quote: "The community here is different. Nobody's showing off. We're all just… figuring it out together. That meant more to me than any doctor visit.",
    name: "Priya S.", age: 33,
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=240&h=240&fit=crop&crop=faces&q=80",
  },
];

export default function Stories() {
  return (
    <section id="stories" style={{ padding: "120px 32px", maxWidth: 1140, margin: "0 auto" }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7, ease }}
        style={{ maxWidth: 760 }}>
        <Eyebrow>Stories</Eyebrow>
        <SectionTitle>Real people. Real journeys.</SectionTitle>
        <SectionLede>No before/after photos. Just what people said when they trusted us.</SectionLede>
      </motion.div>

      <div style={{ marginTop: 56, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }} className="stories-grid">
        {stories.map((s, i) => (
          <motion.article
            key={i}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: i * 0.12, ease }}
            whileHover={{ y: -6 }}
            style={{
              padding: 28, borderRadius: 24,
              background: i === 1 ? "var(--color-ink-900)" : "var(--color-paper)",
              color: i === 1 ? "var(--color-paper)" : "var(--color-ink-900)",
              border: i === 1 ? "none" : "0.5px solid var(--border-default)",
              display: "flex", flexDirection: "column", gap: 20,
              minHeight: 320,
            }}
          >
            <div style={{
              fontFamily: "var(--font-marketing)", fontSize: 36, lineHeight: 1,
              color: i === 1 ? "var(--color-brand-blue-500)" : "var(--color-brand-blue)",
              opacity: 0.6,
            }}>&ldquo;</div>
            <p style={{
              fontFamily: "var(--font-marketing)", fontSize: 18, lineHeight: 1.5,
              margin: 0, fontWeight: 500, textWrap: "pretty",
              color: i === 1 ? "var(--color-paper)" : "var(--color-ink-800)",
            }}>{s.quote}</p>
            <div style={{ marginTop: "auto", display: "flex", alignItems: "center", gap: 12, paddingTop: 12 }}>
              <img src={s.img} alt="" style={{ width: 44, height: 44, borderRadius: 999, objectFit: "cover" }} />
              <div>
                <div style={{ fontFamily: "var(--font-marketing)", fontSize: 14, fontWeight: 700 }}>— {s.name}, {s.age}</div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
      <style>{`@media (max-width: 1000px) { .stories-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}
