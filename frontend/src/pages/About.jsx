import { motion } from "framer-motion";

function About() {
  return (
    <div className="min-h-screen bg-[#F8F8F5] pt-28">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#B88746]">
              About SL Labs
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[#1F3A2D] sm:text-5xl">
              A premium botanical story, shaped with intention.
            </h1>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="rounded-4xl border border-[#E8E3DA] bg-white p-8 shadow-[0_20px_60px_rgba(31,58,45,0.08)]"
          >
            <p className="text-base leading-8 text-[#666666]">
              SL Labs is a modern beauty brand inspired by the richness of
              Indian botanicals and the discipline of cosmetic science. We
              create thoughtful haircare rituals that feel elevated, serene, and
              quietly powerful.
            </p>
            <p className="mt-6 text-base leading-8 text-[#666666]">
              From ingredient sourcing to formulation and packaging, every step
              is designed to feel premium, purposeful, and beautifully
              considered.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default About;
