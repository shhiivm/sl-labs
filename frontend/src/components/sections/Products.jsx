import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { products } from "../../utils/content";

function Products() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="products" className="scroll-mt-20 bg-[#F8F8F5] py-14 sm:py-18 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-9 flex flex-col gap-4 sm:mb-12 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8C672F] sm:text-sm sm:tracking-[0.3em]">
              Featured Products
            </p>
            <h2 className="mt-3 text-2xl font-semibold leading-tight text-[#1F3A2D] sm:mt-4 sm:text-4xl">
              Elevated rituals for luminous, healthy-looking hair.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-[#555E56] sm:text-base sm:leading-7">
            Discover thoughtfully developed botanical essentials designed to
            complement your everyday hair-care routine.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {products.map((product, index) => (
            <motion.article
              key={product.name}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.45, delay: prefersReducedMotion ? 0 : index * 0.07 }}
              whileHover={prefersReducedMotion ? undefined : { y: -3 }}
              className="group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-[#E8E3DA] bg-white shadow-[0_12px_36px_rgba(31,58,45,0.07)]"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F4F1EB] p-3 sm:p-4">
                <img
                  src={product.image}
                  alt={`${product.name} bottle`}
                  className="h-full w-full object-contain transition duration-500 group-hover:scale-[1.02] motion-reduce:transition-none"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <h3 className="text-xl font-semibold leading-snug text-[#222222] sm:text-2xl">
                  {product.name}
                </h3>
                <div className="mt-3 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <p className="text-xl font-semibold text-[#1F3A2D]">₹{product.price}</p>
                  <p className="text-sm text-[#626A62]">
                    MRP <del>₹{product.mrp}</del>
                  </p>
                  {product.mrp > product.price ? (
                    <span className="text-xs font-semibold text-[#386044]">
                      {Math.round(((product.mrp - product.price) / product.mrp) * 100)}% off
                    </span>
                  ) : null}
                </div>
                {product.size ? (
                  <p className="mt-2 text-sm text-[#555E56]">{product.size}</p>
                ) : null}

                <Link to={`/products/${product.slug}`} className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#1F3A2D] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#315844] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1F3A2D] motion-reduce:transition-none sm:mt-auto sm:justify-between">
                  View details &amp; buy <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;
