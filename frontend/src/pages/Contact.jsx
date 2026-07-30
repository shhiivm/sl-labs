import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

function Contact() {
  return (
    <div className="min-h-screen bg-[#F8F8F5] pt-28">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#B88746]">
              Contact
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[#1F3A2D] sm:text-5xl">
              Let’s talk about your next ritual.
            </h1>
            <p className="mt-5 text-base leading-8 text-[#666666]">
              Reach out for product enquiries, partnerships, or wholesale
              conversations.
            </p>
            <div className="mt-10 space-y-5 text-[#222222]">
              <div className="flex items-center gap-4 rounded-[1.25rem] bg-white px-5 py-4 shadow-sm">
                <Mail className="h-5 w-5 text-[#1F3A2D]" />
                <span>hello@sllabs.in</span>
              </div>
              <div className="flex items-center gap-4 rounded-[1.25rem] bg-white px-5 py-4 shadow-sm">
                <Phone className="h-5 w-5 text-[#1F3A2D]" />
                <span>+91 99999 99999</span>
              </div>
              <div className="flex items-center gap-4 rounded-[1.25rem] bg-white px-5 py-4 shadow-sm">
                <MapPin className="h-5 w-5 text-[#1F3A2D]" />
                <span>Uttar Pradesh, India</span>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="rounded-4xl border border-[#E8E3DA] bg-white p-8 shadow-[0_20px_60px_rgba(31,58,45,0.08)]"
          >
            <form className="space-y-5">
              <input
                className="w-full rounded-full border border-[#E8E3DA] px-5 py-4 outline-none"
                placeholder="Your name"
              />
              <input
                className="w-full rounded-full border border-[#E8E3DA] px-5 py-4 outline-none"
                placeholder="Your email"
              />
              <textarea
                className="min-h-40 w-full rounded-[1.5rem] border border-[#E8E3DA] px-5 py-4 outline-none"
                placeholder="Tell us about your enquiry"
              />
              <button className="rounded-full bg-[#1F3A2D] px-6 py-4 font-semibold text-white">
                Send Inquiry
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
