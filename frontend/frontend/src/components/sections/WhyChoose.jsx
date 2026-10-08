import { motion } from "framer-motion";
import {
  Leaf,
  Shield,
  Sparkles,
  Package,
  Microscope,
  MapPinned,
} from "lucide-react";

const cards = [
  {
    icon: Leaf,
    title: "Botanical Ingredients",
    description:
      "Carefully selected herbs and plants chosen for texture, nourishment, and elegance.",
  },
  {
    icon: Shield,
    title: "No Harmful Chemicals",
    description:
      "Formulated to feel thoughtful, gentle, and deliberate for everyday use.",
  },
  {
    icon: Sparkles,
    title: "Small Batch Quality",
    description:
      "Every formula is made in limited runs to preserve integrity and refinement.",
  },
  {
    icon: Package,
    title: "Premium Packaging",
    description:
      "Minimal, sculptural packaging that feels as luxurious as the experience inside.",
  },
  {
    icon: Microscope,
    title: "Scientifically Designed",
    description:
      "Modern formulation principles balance performance, comfort, and trust.",
  },
  {
    icon: MapPinned,
    title: "Made in India",
    description:
      "Proudly rooted in Indian botanical heritage and contemporary beauty standards.",
  },
];

function WhyChoose() {
  return (
    <section className="bg-[#F3EEE6] py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#B88746]">
            Why SL Labs
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#1F3A2D] sm:text-4xl">
            A more refined way to care for your hair.
          </h2>
          <p className="mt-5 text-base leading-8 text-[#666666]">
            We build personal care around luxury, performance, and a deep
            respect for botanical traditions.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.07 }}
                whileHover={{ y: -6, scale: 1.01 }}
                className="rounded-[1.75rem] border border-[#E4DBCE] bg-white/80 p-8 shadow-[0_16px_50px_rgba(31,58,45,0.06)]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EAF4EC] text-[#1F3A2D]">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-[#222222]">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#666666]">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;
