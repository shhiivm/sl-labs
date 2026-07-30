import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { testimonials } from "../../utils/content";

function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section id="reviews" className="bg-[#F3EEE6] py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#B88746]">
            Testimonials
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#1F3A2D] sm:text-4xl">
            Loved by customers who value quality and calm.
          </h2>
        </div>

        <div className="mt-16 rounded-[2rem] border border-[#E4DBCE] bg-white p-8 shadow-[0_24px_80px_rgba(31,58,45,0.08)] sm:p-12">
          <motion.div
            key={active}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45 }}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="text-4xl text-[#B88746]">★★★★★</div>
            <p className="mt-8 text-2xl leading-10 text-[#222222] sm:text-3xl">
              “{testimonials[active].quote}”
            </p>
            <div className="mt-8">
              <p className="text-lg font-semibold text-[#1F3A2D]">
                {testimonials[active].author}
              </p>
              <p className="mt-1 text-sm text-[#666666]">
                {testimonials[active].role}
              </p>
            </div>
          </motion.div>

          <div className="mt-10 flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActive(index)}
                className={`h-2.5 rounded-full transition-all ${active === index ? "w-10 bg-[#1F3A2D]" : "w-2.5 bg-[#D9D0C4]"}`}
                aria-label={`Show testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
