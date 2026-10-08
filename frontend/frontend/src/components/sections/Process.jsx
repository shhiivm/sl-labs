import { motion } from "framer-motion";
import { processSteps } from "../../utils/content";

function Process() {
  return (
    <section className="bg-[#F3EEE6] py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#B88746]">
            Our Process
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#1F3A2D] sm:text-4xl">
            Thoughtful care from ingredient to delivery.
          </h2>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.07 }}
              className="rounded-[1.75rem] border border-[#E4DBCE] bg-white/80 p-8 shadow-[0_12px_40px_rgba(31,58,45,0.05)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1F3A2D] text-sm font-semibold text-white">
                0{index + 1}
              </div>
              <h3 className="mt-6 text-xl font-semibold text-[#222222]">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#666666]">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;
