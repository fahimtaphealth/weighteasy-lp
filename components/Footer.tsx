export default function Footer() {
  return (
    <footer style={{
      padding: "48px 32px",
      background: "var(--color-paper)",
      borderTop: "0.5px solid var(--border-default)",
    }}>
      <div style={{
        maxWidth: 1140, margin: "0 auto",
        display: "flex", justifyContent: "space-between", alignItems: "center", gap: 24,
        flexWrap: "wrap",
      }}>
        <img src="/weighteasy-wordmark.svg" alt="WeightEasy" style={{ height: 22 }} />
        <div style={{ display: "flex", gap: 28, fontFamily: "var(--font-marketing)", fontSize: 14 }}>
          {["Privacy", "Terms", "Contact"].map((l) => (
            <a key={l} href="#" style={{ color: "var(--color-ink-700)", textDecoration: "none" }}>{l}</a>
          ))}
        </div>
        <div style={{ fontFamily: "var(--font-marketing)", fontSize: 13, color: "var(--color-ink-500)" }}>
          © 2026 WeightEasy. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
