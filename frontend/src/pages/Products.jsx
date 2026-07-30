import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { products } from "../utils/content";

function ProductsPage() {
  return (
    <div className="min-h-screen bg-[#F8F8F5] pt-28">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#B88746]">
            Products
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[#1F3A2D] sm:text-5xl">
            Our signature collections, refined for everyday rituals.
          </h1>
          <p className="mt-5 text-base leading-8 text-[#666666]">
            Discover the formulas that define the SL Labs experience, from
            lightweight oils to luxurious finishing care.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {products.map((product, index) => (
            <motion.article
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="overflow-hidden rounded-4xl border border-[#E8E3DA] bg-white shadow-[0_20px_60px_rgba(31,58,45,0.08)]"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-64 w-full object-cover"
              />
              <div className="p-8">
                <h2 className="text-2xl font-semibold text-[#222222]">
                  {product.name}
                </h2>
                <p className="mt-3 text-sm leading-7 text-[#666666]">
                  {product.description}
                </p>
                <button className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#1F3A2D] px-5 py-3 text-sm font-semibold text-[#1F3A2D] transition hover:bg-[#1F3A2D] hover:text-white">
                  View Details <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;
