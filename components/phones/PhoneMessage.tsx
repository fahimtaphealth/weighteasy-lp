"use client";
import { PhoneFrame, StatusBar } from "./PhoneFrame";

type Tone = "blue" | "warning" | "success";

const toneMap: Record<Tone, { bg: string; fg: string }> = {
  blue: { bg: "var(--primary-container)", fg: "var(--color-brand-blue)" },
  warning: { bg: "var(--color-warning-container)", fg: "var(--color-warning)" },
  success: { bg: "var(--color-success-container, var(--primary-container))", fg: "var(--color-success)" },
};

export default function PhoneMessage({
  header,
  message,
  tone = "blue",
  appLabel = "WeightEasy",
}: {
  header: string;
  message: string;
  tone?: Tone;
  appLabel?: string;
}) {
  const t = toneMap[tone];
  return (
    <PhoneFrame width={300} height={620}>
      <StatusBar />
      <div style={{ padding: "8px 18px 18px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div
            style={{
              fontFamily: "var(--font-product)",
              fontSize: 13,
              fontWeight: 700,
              color: "var(--color-ink-700)",
              letterSpacing: "-0.01em",
            }}
          >
            {appLabel}
          </div>
          <span
            style={{
              padding: "4px 10px",
              borderRadius: 9999,
              background: t.bg,
              color: t.fg,
              fontFamily: "var(--font-product)",
              fontSize: 9.5,
              fontWeight: 700,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
            }}
          >
            Coach
          </span>
        </div>

        <div
          style={{
            marginTop: 14,
            padding: 16,
            borderRadius: 16,
            background: "var(--color-paper)",
            border: "0.5px solid var(--border-default)",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-product)",
              fontSize: 10.5,
              fontWeight: 700,
              color: t.fg,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            {header}
          </div>
          <div
            style={{
              fontFamily: "var(--font-marketing)",
              fontSize: 16,
              fontWeight: 500,
              lineHeight: 1.5,
              color: "var(--color-ink-900)",
              marginTop: 10,
              letterSpacing: "-0.005em",
              textWrap: "pretty",
            }}
          >
            {message}
          </div>
        </div>

        <div
          style={{
            marginTop: 12,
            padding: 14,
            borderRadius: 16,
            background: "var(--color-ink-900)",
            color: "var(--color-paper)",
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          <span
            style={{
              width: 28,
              height: 28,
              borderRadius: 999,
              background: "var(--color-brand-blue-500)",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "var(--font-marketing)",
              fontWeight: 700,
              fontSize: 13,
              color: "var(--color-ink-900)",
            }}
          >
            W
          </span>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                fontFamily: "var(--font-product)",
                fontSize: 11,
                opacity: 0.6,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                fontWeight: 600,
              }}
            >
              From your coach
            </div>
            <div
              style={{
                fontFamily: "var(--font-marketing)",
                fontSize: 13,
                fontWeight: 600,
              }}
            >
              Just now
            </div>
          </div>
        </div>
      </div>
    </PhoneFrame>
  );
}
