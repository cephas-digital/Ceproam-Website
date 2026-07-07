import { FiBookmark } from "react-icons/fi";
import type { Insight } from "../../types/types";

interface Props {
  insight: Insight;
}

const InsightCard = ({ insight }: Props) => {
  return (
    <article className="overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="relative">
        <img
          src={insight.image}
          alt={insight.title}
          className="h-48 w-full object-cover sm:h-56"
        />

        <span className="absolute left-4 top-4 rounded-full bg-slate-900 px-3 py-1 text-xs text-white">
          {insight.category}
        </span>
      </div>

      <div className="p-5 sm:p-6">
        <h3 className="text-xl font-bold text-[#00193C] sm:text-2xl">{insight.title}</h3>

        <p className="mt-3 text-sm text-gray-600 sm:text-base">{insight.description}</p>

        <div className="mt-6 flex items-center justify-between">
          <span className="text-sm text-gray-500">{insight.readTime}</span>

          <FiBookmark className="cursor-pointer text-lg" />
        </div>
      </div>
    </article>
  );
};

export default InsightCard;
