import type { Investment } from "../../types/Investment";

interface InvestmentCardProps {
  item: Investment;
}

const InvestmentCard = ({ item }: InvestmentCardProps) => {
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-sm border border-gray-100">
      {/* Image */}
      <div className="relative h-56">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover"
        />

        <span className="absolute right-3 top-3 rounded bg-orange-500 px-3 py-1 text-[10px] font-semibold text-white">
          {item.badge}
        </span>
      </div>

      <div className="p-5">
        <h3 className="text-3xl font-bold text-[#0B2354]">{item.title}</h3>

        <p className="mt-2 text-sm text-gray-500">{item.location}</p>

        {/* Stats */}
        <div className="mt-6 grid grid-cols-2 gap-4">
          <div>
            <p className="text-xs text-gray-400 uppercase">{item.leftLabel}</p>
            <p className="font-bold text-[#0B2354]">{item.leftValue}</p>
          </div>

          <div>
            <p className="text-xs text-gray-400 uppercase">{item.rightLabel}</p>
            <p className="font-bold text-orange-500">{item.rightValue}</p>
          </div>
        </div>

        <div className="mt-6 h-2 rounded-full bg-gray-200">
          <div
            className="h-full rounded-full bg-orange-500"
            style={{ width: `${item.funded}%` }}
          />
        </div>

        <div className="mt-2 flex justify-between text-xs text-gray-500">
          <span>{item.funded}% Funded</span>
          <span>{item.footerText}</span>
        </div>

        <button className="mt-6 w-full rounded-md bg-[#021D49] py-4 font-semibold text-white">
          {item.buttonText}
        </button>
      </div>
    </div>
  );
};

export default InvestmentCard;
