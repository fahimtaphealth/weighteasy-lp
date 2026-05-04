"use client";
import type { CSSProperties, ReactNode } from "react";

export function PhoneFrame({ children, width = 320, height = 660, style }:
  { children: ReactNode; width?: number; height?: number; style?: CSSProperties }) {
  return (
    <div style={{
      width, height, borderRadius: 44,
      background: "var(--color-ink-900)", padding: 8,
      boxShadow: "0 30px 60px -20px rgba(12,12,13,0.18), 0 12px 24px -12px rgba(12,12,13,0.12)",
      position: "relative", ...style,
    }}>
      <div style={{
        width: "100%", height: "100%", borderRadius: 36,
        background: "var(--color-paper)", overflow: "hidden", position: "relative",
      }}>
        <div style={{
          position: "absolute", top: 8, left: "50%", transform: "translateX(-50%)",
          width: 110, height: 28, borderRadius: 999, background: "var(--color-ink-900)", zIndex: 5,
        }} />
        {children}
      </div>
    </div>
  );
}

export function StatusBar() {
  return (
    <div style={{
      height: 44, padding: "0 22px",
      display: "flex", alignItems: "flex-end", paddingBottom: 8, justifyContent: "space-between",
      fontFamily: "var(--font-product)", fontSize: 14, fontWeight: 600, color: "var(--color-ink-900)",
    }}>
      <span>9:30</span>
      <span style={{ display: "inline-flex", gap: 5, alignItems: "center" }}>
        <span>●●●</span><span style={{ fontSize: 12 }}>▮</span>
      </span>
    </div>
  );
}
