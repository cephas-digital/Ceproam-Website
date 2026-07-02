import { motion } from "motion/react";
import { useState } from "react";
import { NavLink } from "react-router";
import NavImg from "../../assets/images/navabr.png";
const navLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Listings", path: "/listings" },
  { label: "Blog", path: "/blog" },
  { label: "Contact Us", path: "/contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <motion.header
        initial={{ y: -12, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45 }}
        className="fixed left-0 top-0 z-40 w-full border-b border-gray-200 bg-white shadow-sm font-Outfit"
      >
        <div className="mx-auto flex items-center justify-between px-4 py-2 sm:px-6 md:px-16 lg:px-28">
          <img
            src={NavImg}
            alt="CEPROAM"
            className="h-9 sm:h-10"
          />

          <div className="flex items-center gap-4 md:gap-6">
            <nav className="hidden md:block">
              <ul className="flex items-center gap-8">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        `relative pb-1 text-sm font-medium transition-colors ${
                          isActive
                            ? "text-[#0B1F4D]"
                            : "text-gray-600 hover:text-[#0B1F4D]"
                        }`
                      }
                    >
                      {({ isActive }) => (
                        <>
                          {link.label}
                          {isActive && (
                            <span className="absolute -bottom-1 left-0 h-[2px] w-full bg-orange-500" />
                          )}
                        </>
                      )}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>

            <button
              type="button"
              className="inline-flex h-10 w-10 flex-col items-center justify-center gap-1 rounded-md border border-gray-200 bg-white p-2 text-gray-700 transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#0B1F4D] md:hidden"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <span
                className={`block h-0.5 w-6 rounded-full bg-current transition-transform duration-300 ${
                  isMenuOpen ? "translate-y-1 rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 rounded-full bg-current transition-opacity duration-200 ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`block h-0.5 w-6 rounded-full bg-current transition-transform duration-300 ${
                  isMenuOpen ? "-translate-y-1 -rotate-45" : ""
                }`}
              />
            </button>
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <button className="rounded-md border border-[#0B1F4D] px-6 py-3 text-sm font-semibold text-[#0B1F4D] transition hover:bg-[#0B1F4D] hover:text-white">
              Explore Listings
            </button>
            <button className="rounded-md bg-[#0B1F4D] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90">
              Invest Now
            </button>
          </div>
        </div>

        <div
          className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-out md:hidden ${
            isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="space-y-4 border-t border-gray-200 bg-white px-4 pb-6 pt-4 sm:px-6">
            <nav>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        `block rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                          isActive
                            ? "bg-[#eef5ff] text-[#0B1F4D]"
                            : "text-gray-600 hover:bg-gray-50 hover:text-[#0B1F4D]"
                        }`
                      }
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="space-y-3">
              <button className="w-full rounded-md border-2 border-[#00193C] px-6 py-3 text-sm font-semibold text-[#0B1F4D] transition hover:bg-[#0B1F4D] hover:text-white">
                Explore Listings
              </button>
              <button className="w-full rounded-md bg-[#00193C] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90">
                Invest Now
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <div className="h-14 md:h-16" />
    </>
  );
}
