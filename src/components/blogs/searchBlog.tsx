import { FiSearch } from "react-icons/fi";

const SearchBlog = () => {
  return (
    <div className="rounded-2xl border-[#E3E2E7] border py-8 px-4 shadow-sm">
      <h3 className="mb-4 font-semibold">Search Insights</h3>

      <div className="flex items-center rounded-lg border px-3">
        <FiSearch className="text-gray-400" />

        <input
          type="text"
          placeholder="Topics, trends, keywords..."
          className="w-full bg-transparent p-3 outline-none"
        />
      </div>
    </div>
  );
};

export default SearchBlog;
