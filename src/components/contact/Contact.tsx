import { FiMapPin, FiMail, FiPhone, FiClock } from "react-icons/fi";
import { FaFacebookF, FaLinkedinIn, FaShareAlt } from "react-icons/fa";

type ContactItem = {
  icon: React.ReactNode;
  title: string;
  details: string[];
};

const contactInfo: ContactItem[] = [
  {
    icon: <FiMapPin size={22} />,
    title: "OFFICE ADDRESS",
    details: ["Block 1 Flat 1, Phase 4,", "Iyana-Ipaja, Lagos State, Nigeria."],
  },
  {
    icon: <FiMail size={22} />,
    title: "EMAIL SUPPORT",
    details: ["contact@ceproam.com", "invest@ceproam.com"],
  },
  {
    icon: <FiPhone size={22} />,
    title: "PHONE NUMBER",
    details: ["+234 812 345 6789", "+234 901 234 5678"],
  },
  {
    icon: <FiClock size={22} />,
    title: "BUSINESS HOURS",
    details: ["Mon - Fri: 9:00 AM - 5:00 PM", "Sat: By Appointment Only"],
  },
];

const interests = [
  "Cashew Farm Estate",
  "Real Estate",
  "Agro Projects",
  "Investment",
];

export default function ContactSection() {
  return (
    <section className="bg-[#F8F8FD] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[2fr_1fr]">
          {/* FORM */}
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm md:p-10">
            <h2 className="mb-10 text-4xl font-bold text-[#00193C]">
              Request a Consultation
            </h2>

            <form className="space-y-6">
              {/* Row */}
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#43474F]">
                    Full Name
                  </label>

                  <input
                    type="text"
                    placeholder="John Doe"
                    className="h-12 w-full rounded-lg border border-gray-300 px-4 outline-none transition focus:border-[#FF6200]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#43474F]">
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="h-12 w-full rounded-lg border border-gray-300 px-4 outline-none transition focus:border-[#FF6200]"
                  />
                </div>
              </div>

              {/* Row */}
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#43474F]">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    placeholder="+234 ..."
                    className="h-12 w-full rounded-lg border border-gray-300 px-4 outline-none transition focus:border-[#FF6200]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#43474F]">
                    Interest
                  </label>

                  <select className="h-12 w-full rounded-lg border border-gray-300 bg-white px-4 outline-none focus:border-[#FF6200]">
                    {interests.map((item) => (
                      <option key={item}>{item}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#43474F]">
                  Message
                </label>

                <textarea
                  rows={6}
                  placeholder="How can we help you grow your portfolio?"
                  className="w-full rounded-lg border border-gray-300 p-4 outline-none transition focus:border-[#FF6200]"
                />
              </div>

              <button
                type="submit"
                className="rounded-lg bg-[#FF6200] px-10 py-4 font-semibold text-white shadow-md transition hover:bg-orange-600"
              >
                Request Consultation
              </button>
            </form>
          </div>

          <div className="flex flex-col justify-between">
            <div className="space-y-8">
              {contactInfo.map((item) => (
                <div
                  key={item.title}
                  className="flex gap-4"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#E9F0FF] text-[#0B234F]">
                    {item.icon}
                  </div>

                  <div>
                    <h3 className="text-sm font-bold tracking-wide text-[#00193C]">
                      {item.title}
                    </h3>

                    {item.details.map((detail) => (
                      <p
                        key={detail}
                        className="text-[#43474F] leading-7"
                      >
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Social */}
            <div className="mt-14 rounded-xl bg-white p-6 shadow-sm">
              <h4 className="mb-6 font-semibold text-[#0B234F]">
                Follow our growth journey
              </h4>

              <div className="flex gap-4">
                {[<FaFacebookF />, <FaLinkedinIn />, <FaShareAlt />].map(
                  (icon, index) => (
                    <button
                      key={index}
                      className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-100 text-[#0B234F] transition hover:bg-[#FF6200] hover:text-white"
                    >
                      {icon}
                    </button>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
