import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { products } from "../../utils/content";

function Products() {
  return (
    <section id="products" className="bg-[#F8F8F5] py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#B88746]">
              Featured Products
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#1F3A2D] sm:text-4xl">
              Elevated rituals for luminous, healthy-looking hair.
            </h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-[#666666]">
            Each formula is designed to feel indulgent, lightweight, and
            beautifully effective from the first use.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {products.map((product, index) => (
            <motion.article
              key={product.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.01 }}
              className="group overflow-hidden rounded-4xl border border-[#E8E3DA] bg-white shadow-[0_20px_60px_rgba(31,58,45,0.08)]"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#1F3A2D]/50 to-transparent" />
                <div className="absolute left-6 top-6 inline-flex rounded-full border border-white/60 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-[#1F3A2D]">
                  <Sparkles className="mr-2 h-4 w-4" /> SL Labs
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-semibold text-[#222222]">
                  {product.name}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#666666]">
                  {product.description}
                </p>

                <ul className="mt-6 space-y-3 text-sm text-[#444444]">
                  {product.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-3">
                      <span className="h-2.5 w-2.5 rounded-full bg-[#B88746]" />
                      {benefit}
                    </li>
                  ))}
                </ul>

                <button className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#1F3A2D] px-5 py-3 text-sm font-semibold text-[#1F3A2D] transition hover:bg-[#1F3A2D] hover:text-white">
                  Learn More <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;
