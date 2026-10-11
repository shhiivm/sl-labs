import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroBottle from "../../assets/images/hero/hero-bottle.png";

function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="top" className="relative overflow-hidden bg-[#F8F8F5]">
      <div className="relative mx-auto max-w-7xl px-5 pb-10 pt-28 sm:px-6 sm:pb-14 sm:pt-32 lg:px-8 lg:pb-20 lg:pt-36">
        <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.5 }}
            className="space-y-5 sm:space-y-7 lg:pr-10"
          >
            <span className="inline-flex items-center rounded-full border border-[#D9C3A1] bg-[#FFF8EC] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8C672F] sm:px-4 sm:py-2 sm:text-xs sm:tracking-[0.25em]">
              Botanical hair care, thoughtfully made
            </span>

            <div className="space-y-4 sm:space-y-5">
              <h1 className="max-w-3xl text-[2.65rem] font-semibold leading-[1.04] text-[#1F3A2D] sm:text-5xl sm:leading-[1.06] lg:text-6xl">
                Science Inspired.
                <br />
                <span className="text-[#B88746]">Nature Powered.</span>
              </h1>
              <p className="max-w-xl text-base leading-7 text-[#555E56] sm:text-lg sm:leading-8">
                Thoughtfully developed botanical hair-care products, combining
                selected ingredients with modern formulation techniques.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#products"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#1F3A2D] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#264b38] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1F3A2D] sm:px-7"
              >
                Explore Products <ArrowRight className="ml-3 h-4 w-4" />
              </a>
              <Link
                to="/about"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#D9C3A1] bg-white px-6 py-3 text-sm font-semibold text-[#1F3A2D] transition hover:border-[#B88746] hover:text-[#8C672F] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1F3A2D] sm:px-7"
              >
                Our Story
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-2.5 pt-1 sm:grid-cols-4 sm:gap-3">
              {[
                "Botanical-inspired",
                "Modern formulation",
                "India-based brand",
                "Product details available",
              ].map((label) => (
                <div
                  key={label}
                  className="flex min-h-14 items-center rounded-xl border border-[#E8E3DA] bg-white/75 px-3 py-2.5 text-xs font-medium leading-5 text-[#465348] sm:min-h-16 sm:px-3.5 sm:text-sm"
                >
                  {label}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.6, delay: prefersReducedMotion ? 0 : 0.08 }}
            className="relative mx-auto flex aspect-4/3 w-full max-w-lg items-center justify-center overflow-hidden rounded-3xl bg-[#F1EEE7] sm:rounded-4xl"
          >
            <img
              src={heroBottle}
              alt="HairGlow botanical hair-care product by SL Labs"
              className="h-full w-full object-contain p-3 sm:p-5"
              fetchPriority="high"
              decoding="async"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
