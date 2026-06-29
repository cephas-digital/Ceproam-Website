import type { TabItem } from "../../types/types";

interface FilterTabsProps {
  tabs: TabItem[];
  activeTab: number;
  setActiveTab: (index: number) => void;
}

const FilterTabs = ({ tabs, activeTab, setActiveTab }: FilterTabsProps) => {
  return (
    <div className="flex md:overflow-x-hidden overflow-x-scroll gap-4">
      {tabs.map((tab, index) => {
        const Icon = tab.icon;

        return (
          <button
            key={tab.label + index}
            onClick={() => setActiveTab(index)}
            className={`flex items-center lg:w-auto md:w-auto min-w-[160px] gap-2 rounded-full px-6 py-3 text-lg font-medium transition-all
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
