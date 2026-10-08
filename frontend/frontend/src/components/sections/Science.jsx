import { motion } from "framer-motion";

const pillars = [
  {
    title: "Nature meets modern science",
    text: "We blend botanical heritage with rigorous formulation standards to create products that feel both luxurious and trustworthy.",
  },
  {
    title: "Botanical extracts",
    text: "Every extract is chosen for its function, texture, and contribution to the overall ritual experience.",
  },
  {
    title: "Safe formulation",
    text: "Our approach favors thoughtful ingredient selection, performance, and comfort over excess.",
  },
  {
    title: "Consistent manufacturing",
    text: "We maintain quality control through careful development, testing, and premium execution.",
  },
];

function Science() {
  return (
    <section id="science" className="bg-[#F8F8F5] py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#B88746]">
              Science
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#1F3A2D] sm:text-4xl">
              The philosophy behind every SL Labs ritual.
            </h2>
            <p className="mt-5 text-base leading-8 text-[#666666]">
              We believe premium beauty should be rooted in clean ingredients,
              intelligent formulation, and timeless design.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.07 }}
                className="rounded-[1.75rem] border border-[#E8E3DA] bg-white p-8 shadow-[0_16px_45px_rgba(31,58,45,0.06)]"
              >
                <h3 className="text-lg font-semibold text-[#222222]">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#666666]">
                  {pillar.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Science;
