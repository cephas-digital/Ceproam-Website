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
      <header className="fixed top-0 left-0 z-40 w-full border-b font-Outfit border-gray-200 bg-white shadow-sm">
        <div className="mx-auto flex lg:px-28 md:px-16  items-center justify-between px-6 py-2 ">
          <img
            src={NavImg}
            alt="CEPROAM"
            className="mb-6 h-10"
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
                            <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-orange-500" />
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

        {/* <div
          className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${
            isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="space-y-4 border-t border-gray-200 bg-white px-6 pb-6 pt-4">
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
              <button className="w-full rounded-md border border-[#0B1F4D] px-6 py-3 text-sm font-semibold text-[#0B1F4D] transition hover:bg-[#0B1F4D] hover:text-white">
                Explore Listings
              </button>
              <button className="w-full rounded-md bg-[#0B1F4D] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90">
                Invest Now
              </button>
            </div>
          </div>
        </div> */}
      </header>

      <div className="h-14 md:h-16" />
    </>
  );
}
