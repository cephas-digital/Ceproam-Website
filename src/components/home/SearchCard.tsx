import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { IoHomeOutline } from "react-icons/io5";
import { GiFarmTractor } from "react-icons/gi";
import { FaMountain } from "react-icons/fa";

const SearchCard = () => {
  return (
    <div className="w-full mx-auto rounded-[1.5rem] border border-white/30 bg-white/50 p-4 shadow-xl backdrop-blur-lg sm:p-6">
      <div className="flex flex-row md:overflow-x-auto  overflow-x-scroll gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button className="flex  lg:w-full md:w-auto min-w-[148px] items-center justify-center gap-2 rounded-full bg-[#002B66] px-5 py-3 text-sm font-medium text-white sm:text-base">
          <IoHomeOutline />
          Property
        </button>

        <button className="flex  lg:w-full md:w-auto min-w-[148px] items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-gray-700 sm:text-base">
          <GiFarmTractor />
          Agri-Projects
        </button>

        <button className="flex  lg:w-full md:w-auto min-w-[148px] items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-gray-700 sm:text-base">
          <FaMountain />
          Land Banking
        </button>
      </div>

      <div className="mt-6 flex flex-col gap-4 border-t border-white/30 pt-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-[#43474F] sm:text-base">Active Market</p>
          <p className="font-semibold text-[#1A1B1F]">Nairobi & Environs</p>
        </div>

        <button className="flex w-full items-center justify-center rounded-full bg-white p-3 text-black shadow-md sm:w-auto">
          <HiOutlineAdjustmentsHorizontal size={22} />
        </button>
      </div>
    </div>
  );
};

export default SearchCard;
