import { Hero } from "@/app/components/Hero";
import { About } from "@/app/components/About";
import { Contact } from "@/app/components/Contact";
import { Footer } from "@/app/components/Footer";

export function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}