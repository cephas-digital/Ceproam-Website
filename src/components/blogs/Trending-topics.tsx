interface TrendingTopicsProps {
  topics?: string[];
}

const TrendingTopics = ({
  topics = [
    "#ROI",
    "#LagosProperty",
    "#LandBanking",
    "#SmartFarming",
    "#AgriTech",
    "#Investment",
    "#RealEstate",
    "#Property",
  ],
}: TrendingTopicsProps) => {
  return (
    <div className="rounded-2xl border  border-[#E3E2E7]  p-6 shadow-sm">
      <h3 className="mb-5 text-lg font-semibold text-[#00193C]">
        Trending Topics
      </h3>

      <div className="flex flex-wrap gap-2">
        {topics.map((topic) => (
          <button
            key={topic}
            className="rounded-md bg-[#F4F3F8] px-3 py-2 text-xs font-medium text-slate-600 transition hover:bg-orange-500 hover:text-white"
          >
            {topic}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TrendingTopics;
