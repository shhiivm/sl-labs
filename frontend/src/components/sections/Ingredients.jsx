import { motion } from "framer-motion";
import { ingredients } from "../../utils/content";

function Ingredients() {
  return (
    <section id="ingredients" className="bg-[#F8F8F5] py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#B88746]">
            Ingredients
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#1F3A2D] sm:text-4xl">
            Botanical ingredients with a sense of ritual and purpose.
          </h2>
          <p className="mt-5 text-base leading-8 text-[#666666]">
            Every ingredient is chosen for its heritage, sensory quality, and
            ability to elevate the final experience.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {ingredients.map((ingredient, index) => (
            <motion.article
              key={ingredient.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="overflow-hidden rounded-[1.75rem] border border-[#E8E3DA] bg-white shadow-[0_16px_45px_rgba(31,58,45,0.06)]"
            >
              <img
                src={ingredient.image}
                alt={ingredient.name}
                className="h-48 w-full object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#222222]">
                  {ingredient.name}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#666666]">
                  {ingredient.benefit}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Ingredients;
