import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { IoHomeOutline } from "react-icons/io5";
import { GiFarmTractor } from "react-icons/gi";
import { FaMountain } from "react-icons/fa";

const SearchCard = () => {
  return (
    <div className="mt-14 w-full max-w-5xl rounded-3xl border border-white/30 bg-white/40 p-6 backdrop-blur-lg">
      {/* Tabs */}
      <div className="flex flex-wrap gap-4">
        <button className="flex items-center gap-2 rounded-full bg-[#002B66] px-6 py-3 text-white">
          <IoHomeOutline />
          Property
        </button>

        <button className="flex items-center gap-2 rounded-full bg-white px-6 py-3 text-gray-700">
          <GiFarmTractor />
          Agri-Projects
        </button>

        <button className="flex items-center gap-2 rounded-full bg-white px-6 py-3 text-gray-700">
          <FaMountain />
          Land Banking
        </button>
      </div>

      {/* Bottom */}
      <div className="mt-8 flex items-center justify-between border-t border-white/30 pt-6">
        <div>
          <p className="text-gray-300">Active Market</p>
          <p className="font-semibold text-white">Nairobi & Environs</p>
        </div>

        <button className="rounded-full bg-white p-3 text-black shadow-lg">
          <HiOutlineAdjustmentsHorizontal size={22} />
        </button>
      </div>
    </div>
  );
};

export default SearchCard;
