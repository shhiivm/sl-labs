import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroBottle from "../../assets/images/hero/hero-bottle.png";
import leaf from "../../assets/images/hero/curry.png";
import hibiscus from "../../assets/images/hero/hibiscus.png";

function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-[#F8F8F5] pt-24 sm:pt-28"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(184,135,70,0.12),transparent_36%),linear-gradient(120deg,#F8F8F5_0%,#FCFBF8_55%,#EEF5EF_100%)]" />

      <img
        src={leaf}
        alt=""
        className="absolute left-6 top-20 w-28 opacity-20 sm:left-10 sm:w-36"
      />
      <img
        src={hibiscus}
        alt=""
        className="absolute right-6 top-24 w-28 opacity-20 sm:right-10 sm:w-36"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8 lg:py-32">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8 lg:pr-10"
          >
            <span className="inline-flex items-center rounded-full border border-[#D9C3A1] bg-[#FFF8EC] px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-[#B88746]">
              Science Inspired. Nature Powered.
            </span>

            <div className="space-y-6">
              <h1 className="text-5xl font-semibold leading-[0.95] tracking-tight text-[#1F3A2D] sm:text-6xl lg:text-7xl">
                Science Inspired.
                <br />
                <span className="text-[#B88746]">Nature Powered.</span>
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-[#666666]">
                Premium botanical haircare developed with carefully selected
                natural ingredients and modern formulation techniques.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="#products"
                className="inline-flex items-center justify-center rounded-full bg-[#1F3A2D] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#264b38]"
              >
                Explore Products <ArrowRight className="ml-3 h-4 w-4" />
              </a>
              <a
                href="#science"
                className="inline-flex items-center justify-center rounded-full border border-[#D9C3A1] bg-white px-7 py-4 text-sm font-semibold text-[#1F3A2D] transition hover:border-[#B88746] hover:text-[#B88746]"
              >
                Learn More
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                ["100%", "Botanical Inspired"],
                ["Made in", "India"],
                ["Premium", "Ingredients"],
                ["Cruelty", "Free"],
              ].map(([title, subtitle]) => (
                <div
                  key={subtitle}
                  className="rounded-[1.35rem] border border-white/70 bg-white/80 p-4 shadow-[0_12px_35px_rgba(31,58,45,0.08)] backdrop-blur"
                >
                  <p className="text-lg font-semibold text-[#1F3A2D]">
                    {title}
                  </p>
                  <p className="mt-2 text-sm text-[#666666]">{subtitle}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative isolate mx-auto flex w-full max-w-xl justify-center"
          >
            <div className="absolute inset-x-8 top-8 h-90 rounded-[2.5rem] bg-[radial-gradient(circle,rgba(184,135,70,0.22),transparent_60%)]" />
            <div className="absolute inset-x-10 bottom-7 h-20 rounded-full bg-[#DCE9DE] blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-white/90 p-6 shadow-[0_30px_90px_rgba(31,58,45,0.16)] backdrop-blur sm:p-8">
              <img
                src={heroBottle}
                alt="SL Labs premium haircare bottle"
                className="mx-auto w-full max-w-[380px] object-contain sm:max-w-[420px]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
