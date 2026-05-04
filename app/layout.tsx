import type { Metadata } from "next";
import "./pulse.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "WeightEasy — Honest GLP-1 Support",
  description: "WeightEasy is built by people who've been through GLP-1 — and we'll be honest with you every step of the way.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
