import { motion } from "framer-motion";

function Newsletter() {
  return (
    <section className="bg-[#F8F8F5] py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className="rounded-4xl border border-[#E8E3DA] bg-[#1F3A2D] px-8 py-12 text-center text-white shadow-[0_20px_80px_rgba(31,58,45,0.12)] sm:px-12 lg:px-16"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#D8B06D]">
            Community
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Join the SL Labs Community
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/80">
            Receive product launches, ingredient stories, and early access to
            limited editions.
          </p>

          <form className="mx-auto mt-10 flex max-w-2xl flex-col gap-4 sm:flex-row">
            <input
              type="email"
              placeholder="Email address"
              className="flex-1 rounded-full border border-white/20 bg-white/10 px-6 py-4 text-white outline-none placeholder:text-white/60"
            />
            <button className="rounded-full bg-[#B88746] px-8 py-4 font-semibold text-[#1F3A2D] transition hover:bg-[#D8B06D]">
              Subscribe
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export default Newsletter;
