import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import BeforeAfter from "@/components/BeforeAfter";
import Stories from "@/components/Stories";
import HowItWorksShort from "@/components/HowItWorksShort";
import Recognition from "@/components/Recognition";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import HowItWorksLong from "@/components/HowItWorksLong";
import ExpertEndorsement from "@/components/ExpertEndorsement";
import DayInLife from "@/components/DayInLife";
import FAQ from "@/components/FAQ";
import Download from "@/components/Download";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";

export default function Page() {
  return (
    <main style={{ background: "var(--surface-default)" }}>
      <Nav />
      <Hero />
      <Problem />
      <BeforeAfter />
      <Stories />
      <HowItWorksShort />
      <Recognition />
      <Features />
      <Pricing />
      <HowItWorksLong />
      <ExpertEndorsement />
      <DayInLife />
      <FAQ />
      <Download />
      <Footer />
      <StickyCTA />
    </main>
  );
}
