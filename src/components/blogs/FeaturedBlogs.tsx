import { FiArrowRight } from "react-icons/fi";
import type { Insight } from "../../types/types";

interface Props {
  insight: Insight;
}

const FeaturedInsight = ({ insight }: Props) => {
  return (
    <article className="overflow-hidden rounded-2xl border bg-white shadow-sm">
      <div className="grid md:grid-cols-2">
        <img
          src={insight.image}
          alt={insight.title}
          className="h-56 w-full object-cover sm:h-full"
        />

        <div className="flex flex-col justify-around p-5 sm:p-8">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-orange-500">
              {insight.category}
            </p>

            <h1 className="text-2xl font-bold leading-tight text-[#00193C] sm:text-[28px] lg:text-[32px]">
              {insight.title}
            </h1>

            <p className="mt-4 text-sm text-gray-600 sm:mt-5 sm:text-base">{insight.description}</p>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 font-semibold">
                OA
              </div>

              <div>
                <p className="font-semibold">{insight.author}</p>

                <p className="text-sm text-gray-500">
                  {insight.date} • {insight.readTime}
                </p>
              </div>
            </div>

            <button className="rounded-full border p-3 transition hover:bg-orange-500 hover:text-white">
              <FiArrowRight />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default FeaturedInsight;
