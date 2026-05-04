import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Truths from "@/components/Truths";
import Help from "@/components/Help";
import Stories from "@/components/Stories";
import Manifesto from "@/components/Manifesto";
import Download from "@/components/Download";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main style={{ background: "var(--surface-default)" }}>
      <Nav />
      <Hero />
      <Truths />
      <Help />
      <Stories />
      <Manifesto />
      <Download />
      <Footer />
    </main>
  );
}
