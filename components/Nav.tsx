"use client";
import { PrimaryBtn } from "./primitives";

export default function Nav() {
  return (
    <nav style={{
      position: "sticky", top: 0, zIndex: 50,
      background: "rgba(239,246,255,0.7)",
      backdropFilter: "saturate(140%) blur(12px)",
      WebkitBackdropFilter: "saturate(140%) blur(12px)",
      borderBottom: "0.5px solid rgba(37,99,235,0.08)",
    }}>
      <div style={{
        maxWidth: 1140, margin: "0 auto",
        padding: "16px 32px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <a href="#" style={{ display: "flex", alignItems: "center", color: "var(--color-ink-900)", textDecoration: "none" }}>
          <img src="/weighteasy-wordmark.svg" alt="WeightEasy" style={{ height: 22, display: "block" }} />
        </a>
        <div className="nav-links" style={{
          display: "flex", alignItems: "center", gap: 32,
          fontFamily: "var(--font-marketing)", fontSize: 14, fontWeight: 500,
        }}>
          {[
            ["The truth", "#truths"],
            ["How we help", "#help"],
            ["Stories", "#stories"],
            ["About", "#about"],
          ].map(([label, href]) => (
            <a key={href} href={href} style={{ color: "var(--color-ink-700)", textDecoration: "none" }}>{label}</a>
          ))}
        </div>
        <PrimaryBtn href="#download" size="md">Get the App</PrimaryBtn>
      </div>
      <style>{`@media (max-width: 880px) { .nav-links { display: none !important; } }`}</style>
    </nav>
  );
}
