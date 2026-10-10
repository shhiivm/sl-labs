import { Mail, Phone, MapPin } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "../../assets/images/logo/logo.jpg";

function Footer() {
  return (
    <footer className="mt-0 bg-[#103D2C] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
          <div>
            <img
              src={logo}
              alt="SL Labs logo"
              className="mb-6 h-16 w-auto rounded-2xl"
            />
            <p className="max-w-sm text-base leading-8 text-white/70">
              Nature-inspired personal care powered by thoughtful formulations
              and modern science.
            </p>
            <div className="mt-8 flex gap-4 text-xl">
              <a
                href="https://www.instagram.com/sllabscare"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white/10 p-3 transition hover:bg-[#B88746]"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.facebook.com/sllabscare"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white/10 p-3 transition hover:bg-[#B88746]"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.linkedin.com/company/sllabscare"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white/10 p-3 transition hover:bg-[#B88746]"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-3 text-white/70">
              <li>
                <a href="#products" className="transition hover:text-white">
                  Products
                </a>
              </li>
              <li>
                <a href="#ingredients" className="transition hover:text-white">
                  Ingredients
                </a>
              </li>
              <li>
                <a href="#science" className="transition hover:text-white">
                  Science
                </a>
              </li>
              <li>
                <a href="#faq" className="transition hover:text-white">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-lg font-semibold">Company</h3>
            <ul className="space-y-3 text-white/70">
              <li>
                <a href="/about" className="transition hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="transition hover:text-white">
                  Contact
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/sllabscare" target="_blank" rel="noopener noreferrer" className="transition hover:text-white">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/sllabscare" target="_blank" rel="noopener noreferrer" className="transition hover:text-white">
                  Facebook
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-lg font-semibold">Contact</h3>
            <div className="space-y-4 text-white/70">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4" /> hello@sllabs.in
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4" /> +91 9264969838
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4" /> Varanasi, Uttar Pradesh, India
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-6 text-sm text-white/60 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>© {new Date().getFullYear()} SL Labs. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="transition hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="transition hover:text-white">
              Terms
            </a>
            <a href="#" className="transition hover:text-white">
              Returns
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
