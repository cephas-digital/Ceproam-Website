import { useState } from "react";
import {
  FaTractor,
  FaBuilding,
  FaShieldAlt,
  FaBalanceScale,
} from "react-icons/fa";

type AssetType = "agro" | "real-estate";

export default function GrowthCalculator() {
  const [investment, setInvestment] = useState(5000000);
  const [asset, setAsset] = useState<AssetType>("agro");

  const appreciation = asset === "agro" ? 1.45 : 1.35;
  const totalReturn = investment * appreciation;

  return (
    // <section className="bg-gradient-to-t from-[#00193C] to-[#0044A2] py-20 overflow-hidden">
    //   <div className="mx-auto max-w-7xl px-6">
    //     <div className="grid gap-14 lg:grid-cols-2 items-center">
    //       <div className="text-white">
    //         <h2 className="text-4xl md:text-5xl font-bold leading-tight">
    //           Calculate Your <span className="text-[#6E87C4]">Growth</span>
    //         </h2>

    //         <p className="mt-6 max-w-lg text-[#D3DDF5] leading-8">
    //           Use our advanced estimation tool to forecast your property
    //           appreciation and ROI based on historical data and current market
    //           trends in Nigerian real estate and agriculture.
    //         </p>

    //         <div className="mt-12 space-y-10">
    //           <div className="flex gap-5">
    //             <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#19407F]">
    //               <FaBalanceScale className="text-white text-xl" />
    //             </div>

    //             <div>
    //               <h3 className="text-2xl font-semibold">Legal Backing</h3>

    //               <p className="mt-2 text-[#D3DDF5] leading-7 max-w-md">
    //                 All calculations are based on actual titled asset
    //                 appreciation rates over the last 5 years.
    //               </p>
    //             </div>
    //           </div>

    //           <div className="flex gap-5">
    //             <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#19407F]">
    //               <FaShieldAlt className="text-white text-xl" />
    //             </div>

    //             <div>
    //               <h3 className="text-2xl font-semibold">Secured Principal</h3>

    //               <p className="mt-2 text-[#D3DDF5] leading-7 max-w-md">
    //                 Your initial investment is always protected by the physical
    //                 land or facility asset.
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //       </div>

    //       {/* RIGHT CARD */}
    //       <div className="relative">
    //         <div className="absolute -right-14 top-14 hidden h-72 w-72 bg-[#2A4D8E] lg:block" />

    //         <div className="relative rounded-2xl bg-white p-7 shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
    //           {/* Amount */}
    //           <label className="text-sm font-semibold text-gray-600">
    //             Investment Amount (₦)
    //           </label>

    //           <input
    //             type="range"
    //             min={1000000}
    //             max={10000000}
    //             step={100000}
    //             value={investment}
    //             onChange={(e) => setInvestment(Number(e.target.value))}
    //             className="mt-4 w-full accent-[#FF6200]"
    //           />

    //           <p className="mt-4 text-4xl font-bold text-[#05265F]">
    //             ₦{investment.toLocaleString()}
    //           </p>

    //           {/* Asset */}
    //           <div className="mt-8">
    //             <p className="text-sm font-semibold text-gray-600">
    //               Select Asset Type
    //             </p>

    //             <div className="mt-4 grid grid-cols-2 gap-4">
    //               <button
    //                 onClick={() => setAsset("agro")}
    //                 className={`rounded-xl border p-6 transition ${
    //                   asset === "agro"
    //                     ? "border-[#05265F] bg-[#EEF4FF]"
    //                     : "border-gray-300"
    //                 }`}
    //               >
    //                 <FaTractor className="mx-auto text-3xl text-[#05265F]" />

    //                 <p className="mt-3 font-semibold text-[#05265F]">
    //                   Agro Projects
    //                 </p>
    //               </button>

    //               <button
    //                 onClick={() => setAsset("real-estate")}
    //                 className={`rounded-xl border p-6 transition ${
    //                   asset === "real-estate"
    //                     ? "border-[#05265F] bg-[#EEF4FF]"
    //                     : "border-gray-300"
    //                 }`}
    //               >
    //                 <FaBuilding className="mx-auto text-3xl text-[#05265F]" />

    //                 <p className="mt-3 font-semibold text-[#05265F]">
    //                   Real Estate
    //                 </p>
    //               </button>
    //             </div>
    //           </div>

    //           {/* Result */}
    //           <div className="mt-8 rounded-xl bg-gray-50 p-5">
    //             <p className="text-sm text-gray-500">
    //               Estimated 2-Year Growth Projection
    //             </p>

    //             <div className="mt-4 flex items-center justify-between">
    //               <span className="text-lg font-semibold">Total Return</span>

    //               <span className="text-3xl font-bold text-[#FF6200]">
    //                 ₦{Math.round(totalReturn).toLocaleString()}
    //               </span>
    //             </div>

    //             <div className="mt-4 h-2 overflow-hidden rounded-full bg-gray-200">
    //               <div
    //                 className="h-full rounded-full bg-[#FF6200]"
    //                 style={{
    //                   width: `${(appreciation / 2) * 100}%`,
    //                 }}
    //               />
    //             </div>

    //             <div className="mt-2 flex justify-between text-sm">
    //               <span>Principal</span>

    //               <span className="font-semibold text-[#FF6200]">
    //                 +{((appreciation - 1) * 100).toFixed(0)}% Appreciation
    //               </span>
    //             </div>
    //           </div>

    //           <button className="mt-8 w-full rounded-xl bg-[#FF6200] py-5 font-semibold text-white transition hover:bg-orange-600">
    //             Lock This Projection
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>

    <section className="bg-gradient-to-t from-[#00193C] to-[#0044A2] py-12 sm:py-16 lg:py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-14 items-center">
          {/* LEFT CONTENT */}
          <div className="text-white">
            <h2 className="text-xl md:text-3xl lg:text-5xl font-bold leading-tight">
              Calculate Your <span className="text-[#6E87C4]">Growth</span>
            </h2>

            <p className="mt-4 sm:mt-6 max-w-lg text-sm sm:text-base text-[#D3DDF5] leading-7 sm:leading-8">
              Use our advanced estimation tool to forecast your property
              appreciation and ROI based on historical data and current market
              trends in Nigerian real estate and agriculture.
            </p>

            <div className="mt-8 sm:mt-10 lg:mt-12 space-y-7 sm:space-y-9 lg:space-y-10">
              {/* FEATURE 1 */}
              <div className="flex gap-4 sm:gap-5">
                <div className="flex h-11 w-11 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-full bg-[#19407F]">
                  <FaBalanceScale className="text-white text-base sm:text-xl" />
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold">
                    Legal Backing
                  </h3>

                  <p className="mt-1.5 sm:mt-2 max-w-md text-sm sm:text-base text-[#D3DDF5] leading-6 sm:leading-7">
                    All calculations are based on actual titled asset
                    appreciation rates over the last 5 years.
                  </p>
                </div>
              </div>

              {/* FEATURE 2 */}
              <div className="flex gap-4 sm:gap-5">
                <div className="flex h-11 w-11 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-full bg-[#19407F]">
                  <FaShieldAlt className="text-white text-base sm:text-xl" />
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold">
                    Secured Principal
                  </h3>

                  <p className="mt-1.5 sm:mt-2 max-w-md text-sm sm:text-base text-[#D3DDF5] leading-6 sm:leading-7">
                    Your initial investment is always protected by the physical
                    land or facility asset.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative w-full">
            <div className="absolute -right-14 top-14 hidden h-72 w-72 bg-[#2A4D8E] lg:block" />

            <div className="relative rounded-xl sm:rounded-2xl bg-white p-5 sm:p-6 lg:p-7 shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
              {/* Amount */}
              <label className="text-xs sm:text-sm font-semibold text-gray-600">
                Investment Amount (₦)
              </label>

              <input
                type="range"
                min={1000000}
                max={10000000}
                step={100000}
                value={investment}
                onChange={(e) => setInvestment(Number(e.target.value))}
                className="mt-3 sm:mt-4 w-full accent-[#FF6200]"
              />

              <p className="mt-3 sm:mt-4 text-xl md:text-2xl lg:text-4xl font-bold text-[#05265F]">
                ₦{investment.toLocaleString()}
              </p>

              {/* Asset */}
              <div className="mt-6 sm:mt-8">
                <p className="text-xs sm:text-sm font-semibold text-gray-600">
                  Select Asset Type
                </p>

                <div className="mt-3 sm:mt-4 grid grid-cols-2 gap-3 sm:gap-4">
                  <button
                    onClick={() => setAsset("agro")}
                    className={`rounded-lg sm:rounded-xl border p-4 sm:p-6 transition ${
                      asset === "agro"
                        ? "border-[#05265F] bg-[#EEF4FF]"
                        : "border-gray-300"
                    }`}
                  >
                    <FaTractor className="mx-auto text-2xl sm:text-3xl text-[#05265F]" />

                    <p className="mt-2 sm:mt-3 text-sm sm:text-base font-semibold text-[#05265F]">
                      Agro Projects
                    </p>
                  </button>

                  <button
                    onClick={() => setAsset("real-estate")}
                    className={`rounded-lg sm:rounded-xl border p-4 sm:p-6 transition ${
                      asset === "real-estate"
                        ? "border-[#05265F] bg-[#EEF4FF]"
                        : "border-gray-300"
                    }`}
                  >
                    <FaBuilding className="mx-auto text-2xl sm:text-3xl text-[#05265F]" />

                    <p className="mt-2 sm:mt-3 text-sm sm:text-base font-semibold text-[#05265F]">
                      Real Estate
                    </p>
                  </button>
                </div>
              </div>

              <div className="mt-6 sm:mt-8 rounded-lg sm:rounded-xl bg-gray-50 p-4 sm:p-5">
                <p className="text-xs sm:text-sm text-gray-500">
                  Estimated 2-Year Growth Projection
                </p>

                <div className="mt-3 sm:mt-4 flex items-center justify-between gap-3">
                  <span className="text-sm sm:text-lg font-semibold">
                    Total Return
                  </span>

                  <span className="text-xl md:text-2xl lg:text-3xl font-bold text-[#FF6200]">
                    ₦{Math.round(totalReturn).toLocaleString()}
                  </span>
                </div>

                <div className="mt-3 sm:mt-4 h-1.5 sm:h-2 overflow-hidden rounded-full bg-gray-200">
                  <div
                    className="h-full rounded-full bg-[#FF6200]"
                    style={{
                      width: `${(appreciation / 2) * 100}%`,
                    }}
                  />
                </div>

                <div className="mt-2 flex justify-between gap-3 text-xs sm:text-sm">
                  <span>Principal</span>

                  <span className="text-right font-semibold text-[#FF6200]">
                    +{((appreciation - 1) * 100).toFixed(0)}% Appreciation
                  </span>
                </div>
              </div>

              <button className="mt-6 sm:mt-8 w-full rounded-lg sm:rounded-xl bg-[#FF6200] py-4 sm:py-5 text-sm sm:text-base font-semibold text-white transition hover:bg-orange-600">
                Lock This Projection
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
