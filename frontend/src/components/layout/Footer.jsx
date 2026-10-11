import { Mail, Phone, MapPin } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo/logo.png";

function Footer() {
  return (
    <footer id="site-footer" className="mt-0 bg-[#103D2C] text-white">
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
                aria-label="SL Labs on Instagram"
                className="rounded-full bg-white/10 p-3 transition hover:bg-[#B88746]"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.facebook.com/sllabscare"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="SL Labs on Facebook"
                className="rounded-full bg-white/10 p-3 transition hover:bg-[#B88746]"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.linkedin.com/company/sllabscare"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="SL Labs on LinkedIn"
                className="rounded-full bg-white/10 p-3 transition hover:bg-[#B88746]"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-lg font-semibold">Explore</h3>
            <ul className="space-y-3 text-white/70">
              <li>
                <Link to="/products" className="transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Shop</Link>
              </li>
              <li>
                <Link to="/about" className="transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Contact Us</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-lg font-semibold">Company</h3>
            <ul className="space-y-3 text-white/70">
              <li>
                <Link to="/blogs" className="transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Journal</Link>
              </li>
              <li>
                <a href="https://www.instagram.com/sllabscare" target="_blank" rel="noopener noreferrer" className="transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/sllabscare" target="_blank" rel="noopener noreferrer" className="transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                  Facebook
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-lg font-semibold">Contact</h3>
            <div className="space-y-4 text-white/70">
              <div className="flex items-center gap-3">
                <Mail aria-hidden="true" className="h-4 w-4 shrink-0" />
                <a className="break-all hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white" href="mailto:support@sllabscare.in">support@sllabscare.in</a>
              </div>
              <div className="flex items-center gap-3">
                <Phone aria-hidden="true" className="h-4 w-4 shrink-0" />
                <a className="hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white" href="tel:+919621652557">+91 9621652557</a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin aria-hidden="true" className="mt-1 h-4 w-4 shrink-0" />
                <span>Varanasi, Uttar Pradesh, India</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-6 text-sm text-white/60 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>© {new Date().getFullYear()} SL Labs. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2" aria-label="Policies not yet published">
            <span>Shipping Policy · not published</span>
            <span>Return and Refund Policy · not published</span>
            <span>Privacy Policy · not published</span>
            <span>Terms and Conditions · not published</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
