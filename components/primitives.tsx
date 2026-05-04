"use client";
import type { CSSProperties, ReactNode } from "react";

export function PrimaryBtn({
  children, href = "#", size = "lg", style,
}: { children: ReactNode; href?: string; size?: "lg" | "md"; style?: CSSProperties }) {
  const sizes = { lg: { h: 56, px: 28, fs: 16 }, md: { h: 44, px: 18, fs: 14 } }[size];
  return (
    <a
      href={href}
      style={{
        display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8,
        height: sizes.h, padding: `0 ${sizes.px}px`, borderRadius: 9999,
        background: "var(--primary-default)", color: "var(--primary-on)",
        fontFamily: "var(--font-product)", fontWeight: 700, fontSize: sizes.fs,
        letterSpacing: "-0.004em", textDecoration: "none",
        transition: "background var(--duration-normal) var(--easing-standard), transform 100ms",
        ...style,
      }}
      onMouseEnter={(e) => (e.currentTarget.style.background = "var(--primary-hover)")}
      onMouseLeave={(e) => (e.currentTarget.style.background = "var(--primary-default)")}
    >
      {children}
    </a>
  );
}

export function GhostBtn({ children, href = "#" }: { children: ReactNode; href?: string }) {
  return (
    <a
      href={href}
      style={{
        display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8,
        height: 56, padding: "0 24px", borderRadius: 9999,
        background: "transparent", color: "var(--color-ink-800)",
        fontFamily: "var(--font-product)", fontWeight: 600, fontSize: 16,
        textDecoration: "none", border: "1px solid var(--border-default)",
      }}
    >
      {children}
    </a>
  );
}

export function Eyebrow({ children, tone = "neutral" }: { children: ReactNode; tone?: "neutral" | "blue" }) {
  return (
    <div style={{
      display: "inline-flex", alignItems: "center", gap: 8,
      fontFamily: "var(--font-marketing)", fontSize: 12, fontWeight: 700,
      color: tone === "blue" ? "var(--color-brand-blue)" : "var(--color-ink-500)",
      letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 16,
    }}>
      <span style={{ width: 24, height: 1, background: "currentColor", opacity: 0.6 }} />
      {children}
    </div>
  );
}

export function SectionTitle({ children, max = 760, style, light }: { children: ReactNode; max?: number; style?: CSSProperties; light?: boolean }) {
  return (
    <h2 style={{
      fontFamily: "var(--font-marketing)",
      fontSize: "clamp(34px, 4.6vw, 56px)",
      fontWeight: 700, lineHeight: 1.05, letterSpacing: "-0.025em",
      color: light ? "var(--color-paper)" : "var(--color-ink-900)",
      margin: 0, maxWidth: max, textWrap: "balance",
      ...style,
    }}>{children}</h2>
  );
}

export function SectionLede({ children, max = 600, light }: { children: ReactNode; max?: number; light?: boolean }) {
  return (
    <p style={{
      fontFamily: "var(--font-marketing)",
      fontSize: 18, lineHeight: 1.55,
      color: light ? "rgba(253,253,253,0.7)" : "var(--color-ink-700)",
      margin: "20px 0 0", maxWidth: max, textWrap: "pretty",
    }}>{children}</p>
  );
}
