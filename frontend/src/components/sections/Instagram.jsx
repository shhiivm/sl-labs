import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { galleryImages } from "../../utils/content";

function Instagram() {
  return (
    <section className="bg-[#F3EEE6] py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#B88746]">
              Instagram
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#1F3A2D] sm:text-4xl">
              A glimpse into the SL Labs ritual.
            </h2>
          </div>
          <button className="inline-flex items-center gap-2 rounded-full border border-[#1F3A2D] px-5 py-3 text-sm font-semibold text-[#1F3A2D] transition hover:bg-[#1F3A2D] hover:text-white">
            Follow @sllabs <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-16 columns-1 gap-6 sm:columns-2 xl:columns-3">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              whileHover={{ scale: 1.02 }}
              className="mb-6 overflow-hidden rounded-[1.75rem] shadow-[0_16px_45px_rgba(31,58,45,0.08)]"
            >
              <img
                src={image}
                alt={`SL Labs gallery ${index + 1}`}
                className="h-auto w-full object-cover"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Instagram;
