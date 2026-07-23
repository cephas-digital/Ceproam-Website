import { FaCommentDots } from "react-icons/fa";
import FooterImg from "../../assets/images/footer.png";
import { FooterColumn } from "./FooterColumn";

import {
  navigationLinks,
  resourceLinks,
  contactItems,
  socialLinks,
} from "../../data/footer";

export default function Footer() {
  return (
    <footer className="relative bg-[#F3F3F6]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:px-8 lg:px-0">
        <div className="grid gap-8 md:grid-cols-2 md:gap-10 lg:grid-cols-[280px_220px_220px_280px] lg:justify-between">
          <div>
            <img
              src={FooterImg}
              alt="CEPROAM"
              className="mb-6 h-10"
            />

            <p className="max-w-[250px] text-[15px] leading-8 text-[#4A4A4A]">
              <span className="font-semibold text-[#0F2343]">CEPROAM</span> was
              founded with the primary aim of ensuring members of the society
              have a community to save in USD and invest in other durable
              enterprises.
            </p>

            <div className="mt-8 flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="text-[#0F2343] transition hover:text-[#FF6B00]"
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>

          <FooterColumn
            title="Navigation"
            links={navigationLinks}
          />

          <FooterColumn
            title="Resources"
            links={resourceLinks}
          />

          {/* Contact */}
          <div>
            <h3 className="mb-8 text-sm font-bold uppercase tracking-wide text-[#0F2343]">
              Contact Us
            </h3>

            <div className="space-y-6">
              {contactItems.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.value}
                    className="flex items-center gap-4"
                  >
                    <Icon
                      size={20}
                      className="text-[#FF6B00]"
                    />

                    <span className="text-[15px] text-[#4A4A4A]">
                      {item.value}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-[#E5E7EB] pt-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row md:items-center">
            <p className="text-center text-sm text-[#5B5B5B] md:text-left">
              © 2026 CEPROAM. All rights reserved. Developed by{" "}
              <span className="font-medium">Cephas ICT Hub</span>
            </p>

            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-sm text-[#4A4A4A] hover:text-[#FF6B00]"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <button
        aria-label="Chat Support"
        className="fixed bottom-8 right-8 flex h-14 w-14 items-center justify-center rounded-full bg-[#FF6B00] text-white shadow-xl transition-transform hover:scale-105"
      >
        <FaCommentDots size={20} />
      </button>
    </footer>
  );
}
