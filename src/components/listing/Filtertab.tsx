import type { TabItem } from "../../types/types";

interface FilterTabsProps {
  tabs: TabItem[];
  activeTab: number;
  setActiveTab: (index: number) => void;
}

const FilterTabs = ({ tabs, activeTab, setActiveTab }: FilterTabsProps) => {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 scroll-smooth sm:gap-3 md:gap-4 md:overflow-x-visible">
      {tabs.map((tab, index) => {
        const Icon = tab.icon;

        return (
          <button
            key={tab.label + index}
            onClick={() => setActiveTab(index)}
            className={`flex min-w-[126px] flex-none items-center justify-center gap-2 whitespace-nowrap rounded-full px-3 py-2 text-sm font-medium transition-all sm:min-w-[150px] sm:px-4 sm:py-2.5 sm:text-base md:min-w-[160px] md:px-5 lg:w-auto
              ${
                activeTab === index
                  ? "bg-[#021D49] text-white"
                  : "border border-[#C4C6D1] bg-white text-gray-700"
              }
            `}
          >
            {Icon && <Icon />}
            {tab.label}
          </button>
        );
      })}
    </div>
  );
};

export default FilterTabs;
