import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { faqItems } from "../../utils/content";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="faq" className="scroll-mt-20 bg-[#F8F8F5] py-14 sm:py-18 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8C672F] sm:text-sm sm:tracking-[0.3em]">
            FAQ
          </p>
          <h2 className="mt-3 text-2xl font-semibold leading-tight text-[#1F3A2D] sm:mt-4 sm:text-4xl">
            Everything you might want to know.
          </h2>
        </div>

        <div className="mx-auto mt-8 max-w-3xl space-y-3 sm:mt-10">
          {faqItems.map((item, index) => (
            <div
              key={item.question}
              className="rounded-xl border border-[#E8E3DA] bg-white shadow-[0_8px_24px_rgba(31,58,45,0.05)]"
            >
              <button
                id={`faq-trigger-${index}`}
                type="button"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
                className="flex min-h-14 w-full items-center justify-between gap-4 rounded-xl px-4 py-4 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F3A2D] sm:px-6 sm:py-5"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              >
                <span className="text-lg font-semibold text-[#222222]">
                  {item.question}
                </span>
                <ChevronDown
                  aria-hidden="true"
                  className={`h-5 w-5 transition ${openIndex === index ? "rotate-180" : "rotate-0"}`}
                />
              </button>
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: prefersReducedMotion ? 0 : 0.25 }}
                    id={`faq-answer-${index}`}
                    role="region"
                    aria-labelledby={`faq-trigger-${index}`}
                    className="overflow-hidden"
                  >
                    <p className="px-4 pb-5 text-sm leading-6 text-[#555E56] sm:px-6 sm:pb-6 sm:leading-7">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
