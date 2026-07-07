import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface PaginationProps {
  currentPage?: number;
  totalPages?: number;
}

const Pagination = ({ currentPage = 1, totalPages = 3 }: PaginationProps) => {
  return (
    <nav className="flex items-center gap-2">
      <button className="flex h-10 w-10 items-center justify-center rounded-lg border text-slate-500 transition hover:bg-slate-100">
        <FiChevronLeft />
      </button>

      {Array.from({ length: totalPages }).map((_, index) => {
        const page = index + 1;

        return (
          <button
            key={page}
            className={`flex h-10 w-10 items-center justify-center rounded-lg border font-medium transition ${
              page === currentPage
                ? "border-orange-500 bg-orange-500 text-white"
                : "bg-white text-slate-600 hover:bg-slate-100"
            }`}
          >
            {page}
          </button>
        );
      })}

      <button className="flex h-10 w-10 items-center justify-center rounded-lg border text-slate-500 transition hover:bg-slate-100">
        <FiChevronRight />
      </button>
    </nav>
  );
};

export default Pagination;
