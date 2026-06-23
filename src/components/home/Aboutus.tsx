// AboutSection.tsx
import About from "../../assets/images/About1.png";
import AboutTwo from "../../assets/images/About2.png";
import AboutThree from "../../assets/images/About3.png";
const AboutSection = () => {
  return (
    <section className="bg-[#f4f4f4] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-14 text-center text-4xl font-bold">About US</h2>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div className="space-y-12">
            <div>
              <h3 className="mb-4 text-2xl font-semibold">About CEPROMAS</h3>

              <p className="leading-8 text-gray-700">
                <span className="font-semibold">CEPROMAS</span> is a
                technology-driven agro and real asset management system designed
                to connect investors, individuals, businesses, and institutions
                with profitable opportunities in property solutions, strategic
                asset acquisition, and agriculture investments.
              </p>

              <p className="mt-4 leading-8 text-gray-700">
                It's an integrated asset management and development platform
                focused on agricultural, real estate, and infrastructure
                investments.
              </p>
            </div>

            <div>
              <h3 className="mb-4 text-2xl font-semibold">Our Mission</h3>

              <p className="leading-8 text-gray-700">
                To democratize access to real estate and agricultural
                investments through secure technology, transparency, and
                innovative financing models.
              </p>
            </div>

            <div>
              <h3 className="mb-4 text-2xl font-semibold">Our Vision</h3>

              <p className="leading-8 text-gray-700">
                To become Africa's leading digital ecosystem for real estate
                access, property ownership, and agricultural investment
                opportunities.
              </p>

              <button className="mt-6 flex items-center gap-2 font-semibold text-orange-500 transition hover:text-orange-600">
                Learn More about CEPROMAS
                <span>→</span>
              </button>
            </div>
          </div>

          <div className="grid h-fit grid-cols-2 gap-4">
            <div className="overflow-hidden rounded-2xl">
              <img
                src={About}
                alt="Luxury Property"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="overflow-hidden rounded-2xl">
              <img
                src={AboutTwo}
                alt="Agriculture"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex min-h-[240px] flex-col items-center justify-center rounded-2xl bg-orange-500 text-white">
              <h4 className="text-5xl font-bold">22.5%</h4>
              <p className="mt-2 text-sm uppercase tracking-wider">
                Target Annual ROI
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl">
              <img
                src={AboutThree}
                alt="Modern Building"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
