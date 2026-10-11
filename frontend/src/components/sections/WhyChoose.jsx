import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function WhyChoose() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="approach" className="bg-[#F3EEE6] py-14 sm:py-18 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.45 }}
          className="grid items-center gap-8 lg:grid-cols-[1fr_auto] lg:gap-14"
        >
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8C672F] sm:text-sm sm:tracking-[0.3em]">
              Our botanical approach
            </p>
            <h2 className="mt-3 text-2xl font-semibold leading-tight text-[#1F3A2D] sm:mt-4 sm:text-4xl">
              Personal care, considered from ingredient to routine.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-[#555E56] sm:mt-5 sm:text-base sm:leading-8">
              SL Labs brings botanical inspiration together with modern
              formulation techniques. HairGlow is our hair-care range, created
              to fit into everyday rituals. Explore our story and approach to
              learn more about the people and ideas behind the products.
            </p>
          </div>
          <Link
            to="/about"
            className="inline-flex min-h-12 w-fit items-center justify-center gap-2 rounded-full border border-[#1F3A2D] px-5 py-3 text-sm font-semibold text-[#1F3A2D] transition hover:bg-[#1F3A2D] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1F3A2D]"
          >
            About SL Labs <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default WhyChoose;
