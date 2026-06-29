import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { IoHomeOutline } from "react-icons/io5";
import { GiFarmTractor } from "react-icons/gi";
import { FaMountain } from "react-icons/fa";

const SearchCard = () => {
  return (
    <div className="mt-14 overflow-x-scroll w-full rounded-3xl border border-white/30 bg-white/50 p-4 sm:p-6 backdrop-blur-lg shadow-xl">
      <div
        className="flex gap-3 overflow-x-auto py-2 sm:grid sm:grid-cols-2 lg:grid-cols-3"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        <button className="flex min-w-[100px] flex-shrink-0 items-center justify-center gap-2 rounded-full bg-[#002B66] px-6 py-3 text-white">
          <IoHomeOutline />
          Property
        </button>

        <button className="flex min-w-[100px] flex-shrink-0 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-gray-700">
          <GiFarmTractor />
          Agri-Projects
        </button>

        <button className="flex min-w-[100px] flex-shrink-0 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-gray-700">
          <FaMountain />
          Land Banking
        </button>
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-white/30 pt-4">
        <div>
          <p className="text-[#43474F]">Active Market</p>
          <p className="font-semibold text-[#1A1B1F]">Nairobi & Environs</p>
        </div>

        <button className="rounded-full bg-white p-3 text-black shadow-md">
          <HiOutlineAdjustmentsHorizontal size={22} />
        </button>
      </div>
    </div>
  );
};

export default SearchCard;
