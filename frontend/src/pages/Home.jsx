import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowUp, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
// import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import Products from "../components/sections/Products";
import WhyChoose from "../components/sections/WhyChoose";
import FAQ from "../components/sections/FAQ";

function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  const [showTop, setShowTop] = useState(false);
  const [showFloatingActions, setShowFloatingActions] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const protectedSections = document.querySelectorAll(
      "#products, #faq, #site-footer",
    );
    const visibleSections = new Set();
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) visibleSections.add(entry.target);
        else visibleSections.delete(entry.target);
      });
      setShowFloatingActions(visibleSections.size === 0);
    });

    protectedSections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#F8F8F5] text-[#222222]">
      <motion.div
        className="fixed left-0 top-0 z-60 h-1 w-full origin-left bg-[#B88746]"
        style={{ scaleX }}
      />
      <main>
        <Hero />
        <Products />
        <WhyChoose />
        <FAQ />
      </main>

      <a
        href="#top"
        aria-label="Back to top"
        tabIndex={showTop && showFloatingActions ? 0 : -1}
        className={`fixed bottom-[calc(env(safe-area-inset-bottom)+1rem)] right-4 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-[#1F3A2D] text-white shadow-[0_8px_24px_rgba(31,58,45,0.16)] transition-[opacity,transform] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F3A2D] sm:right-6 ${showTop && showFloatingActions ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"}`}
      >
        <ArrowUp className="h-5 w-5" />
      </a>

      <a
        href="https://wa.me/919621652557?text=Hi%20SL%20Labs,%20I'm%20interested%20in%20your%20products."
        aria-label="Chat with SL Labs on WhatsApp"
        tabIndex={showFloatingActions ? 0 : -1}
        target="_blank"
        rel="noreferrer"
        className={`fixed bottom-[calc(env(safe-area-inset-bottom)+4.75rem)] right-4 z-40 flex min-h-12 items-center gap-2 rounded-full bg-[#1F3A2D] px-4 py-3 text-white shadow-[0_8px_24px_rgba(31,58,45,0.16)] transition-[opacity,transform] hover:bg-[#315844] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F3A2D] sm:right-6 motion-reduce:transition-none ${showFloatingActions ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"}`}
      >
        <MessageCircle className="h-5 w-5" />
        <span className="text-sm font-semibold">WhatsApp</span>
      </a>
    </div>
  );
}

export default Home;
