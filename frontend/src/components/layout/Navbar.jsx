import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { navLinks } from "../../utils/content";
import logo from "../../assets/images/logo/logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/90 shadow-[0_8px_30px_rgba(31,58,45,0.08)] backdrop-blur-xl" : "bg-transparent"}`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="SL Labs herbal wellness and personal care"
            className="h-10 w-[150px] object-contain object-center mix-blend-multiply sm:h-12 sm:w-[170px]"
          />
        </Link>

        <ul className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.href}
                className={({ isActive }) =>
                  `text-sm font-medium transition ${isActive ? "text-[#1F3A2D]" : "text-[#444444] hover:text-[#1F3A2D]"}`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* <div className="hidden items-center gap-4 lg:flex">
          <a
            href="#products"
            className="rounded-full border border-[#1F3A2D] px-5 py-3 text-sm font-semibold text-[#1F3A2D] transition hover:bg-[#1F3A2D] hover:text-white"
          >
            Shop Now
          </a>
        </div> */}

        <button
          className="rounded-full p-2 lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <div
        className={`overflow-hidden transition-all duration-300 lg:hidden ${menuOpen ? "max-h-96" : "max-h-0"}`}
      >
        <div className="border-t border-[#E8E3DA] bg-white/95 px-6 py-6 shadow-lg">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.href}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block py-3 text-sm font-medium ${isActive ? "text-[#1F3A2D]" : "text-[#444444]"}`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <a
            href="#products"
            className="mt-4 inline-flex rounded-full bg-[#1F3A2D] px-5 py-3 text-sm font-semibold text-white"
            onClick={() => setMenuOpen(false)}
          >
            Shop Now
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
