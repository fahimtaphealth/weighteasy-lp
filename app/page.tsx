import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import CoachDifference from "@/components/CoachDifference";
import Truths from "@/components/Truths";
import Help from "@/components/Help";
import Timeline from "@/components/Timeline";
import Stats from "@/components/Stats";
import CoachInAction from "@/components/CoachInAction";
import TrackerVsCoach from "@/components/TrackerVsCoach";
import Stories from "@/components/Stories";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Download from "@/components/Download";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main style={{ background: "var(--surface-default)" }}>
      <Nav />
      <Hero />
      <CoachDifference />
      <Truths />
      <Help />
      <Timeline />
      <Stats />
      <CoachInAction />
      <TrackerVsCoach />
      <Stories />
      <Pricing />
      <FAQ />
      <Download />
      <Footer />
    </main>
  );
}
