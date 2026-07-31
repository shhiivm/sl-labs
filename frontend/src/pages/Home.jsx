import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowUp, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
// import Navbar from "../components/layout/Navbar";
// import Footer from "../components/layout/Footer";
import Hero from "../components/sections/Hero";
import Products from "../components/sections/Products";
import WhyChoose from "../components/sections/WhyChoose";
import Ingredients from "../components/sections/Ingredients";
import Process from "../components/sections/Process";
import Science from "../components/sections/Science";
import Testimonials from "../components/sections/Testimonials";
import FAQ from "../components/sections/FAQ";
import Instagram from "../components/sections/Instagram";
import Newsletter from "../components/sections/Newsletter";

function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#F8F8F5] text-[#222222]">
      <motion.div
        className="fixed left-0 top-0 z-60 h-1 w-full origin-left bg-[#B88746]"
        style={{ scaleX }}
      />
      {/* <Navbar /> */}
      <main>
        <Hero />
        <Products />
        <WhyChoose />
        <Ingredients />
        <Process />
        <Science />
        <Testimonials />
        <FAQ />
        <Instagram />
        <Newsletter />
      </main>
      {/* <Footer /> */}

      <a
        href="#top"
        className={`fixed bottom-6 right-6 z-40 rounded-full bg-[#1F3A2D] p-4 text-white shadow-[0_10px_30px_rgba(31,58,45,0.2)] transition ${showTop ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"}`}
      >
        <ArrowUp className="h-5 w-5" />
      </a>

      <a
        href="https://wa.me/917052292034"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-24 right-6 z-40 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-[0_10px_30px_rgba(37,211,102,0.25)]"
      >
        <MessageCircle className="h-5 w-5" />
        <span className="text-sm font-semibold">WhatsApp</span>
      </a>
    </div>
  );
}

export default Home;
