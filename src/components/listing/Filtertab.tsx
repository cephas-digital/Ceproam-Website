import type { TabItem } from "../../types/types";

interface FilterTabsProps {
  tabs: TabItem[];
  activeTab: number;
  setActiveTab: (index: number) => void;
}

const FilterTabs = ({ tabs, activeTab, setActiveTab }: FilterTabsProps) => {
  return (
    <div className="flex gap-3 overflow-x-auto pb-2 sm:gap-4 md:overflow-x-hidden">
      {tabs.map((tab, index) => {
        const Icon = tab.icon;

        return (
          <button
            key={tab.label + index}
            onClick={() => setActiveTab(index)}
            className={`flex min-w-[150px] items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium transition-all sm:min-w-[180px] sm:px-6 sm:py-3 sm:text-base lg:w-auto md:w-auto
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
