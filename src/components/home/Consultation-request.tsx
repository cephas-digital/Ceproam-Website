// components/ConsultationSection.tsx

import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { Users } from "lucide-react";
import TA from "../../assets/images/Team.png";
import TAtwo from "../../assets/images/Team (1).png";
import type { ConsultationForm } from "../../types/types";
import { investmentInterests } from "../../data/interest";

const avatarData = [
  { id: 1, name: "Advisor 1", image: TA },
  { id: 2, name: "Advisor 2", image: TAtwo },
  { id: 3, name: "Advisor 3", image: TA },
];

const initialState: ConsultationForm = {
  fullName: "",
  email: "",
  interest: investmentInterests[0],
};

export default function ConsultationSection() {
  const [formData, setFormData] = useState<ConsultationForm>(initialState);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(formData);

    // API call goes here
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-t from-[#00193C] to-[#0044A2] ">
      {/* Decorative Shape */}
      <div className="absolute right-0 top-0 h-full w-[28%] bg-white/10 [clip-path:polygon(35%_0%,100%_0%,100%_100%,0%_100%)]" />

      <div className="relative mx-auto max-w-7xl md:px-0 px-6 py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="max-w-lg text-white">
            <h2 className="text-4xl font-bold leading-tight md:text-5xl">
              Ready to Start Your
              <br />
              Investment Journey?
            </h2>

            <p className="mt-6 max-w-md text-md leading-7 text-blue-100">
              Schedule a consultation with our investment advisors to build a
              personalized strategy aligned with your financial goals.
            </p>

            <div className="mt-10 flex items-center gap-4">
              <div className="flex -space-x-3">
                {avatarData.map((avatar) => (
                  <div
                    key={avatar.id}
                    className="
                      flex h-10 w-10 items-center justify-center
                      rounded-full border-2 border-[#003A93]
                      bg-gradient-to-br
                      from-slate-300
                      to-slate-600
                      overflow-hidden
                    "
                    title={avatar.name}
                  >
                    {avatar.image ? (
                      <img
                        src={avatar.image}
                        alt={avatar.name}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <Users size={16} />
                    )}
                  </div>
                ))}
              </div>

              <span className="text-sm font-medium">
                Talk to our expert team
              </span>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-2xl">
              <h3 className="mb-6 text-2xl font-bold text-[#0A2540]">
                Request Consultation
              </h3>

              <form
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <div>
                  <label
                    htmlFor="fullName"
                    className="mb-2 block text-xs font-medium text-slate-600"
                  >
                    Full Name
                  </label>

                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    placeholder="John Doe"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="
                      w-full rounded-md border-2 border-slate-300
                      px-4 py-4 text-sm outline-none
                      transition focus:border-[#003A93]
                    "
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-xs font-medium text-slate-600"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="
                      w-full rounded-md border-2 border-slate-300
                      px-4 py-4 text-sm outline-none
                      transition focus:border-[#003A93]
                    "
                  />
                </div>

                <div>
                  <label
                    htmlFor="interest"
                    className="mb-2 block text-xs font-medium text-slate-600"
                  >
                    Investment Interest
                  </label>

                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className="
                      w-full rounded-md border-2 border-slate-300
                      px-4 py-4 text-sm outline-none
                      transition focus:border-[#003A93]
                    "
                  >
                    {investmentInterests.map((interest) => (
                      <option
                        key={interest}
                        value={interest}
                      >
                        {interest}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  type="submit"
                  className="
                    mt-2 w-full rounded-md
                    bg-[#FF6B00]
                    px-6 py-4
                    text-xs font-bold uppercase tracking-widest
                    text-white
                    transition hover:bg-[#E85F00]
                  "
                >
                  Send Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
