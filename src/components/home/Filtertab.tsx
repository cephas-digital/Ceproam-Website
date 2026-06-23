const tabs = [
  "All Listings",
  "Residential",
  "Commercial",
  "Land Banking",
  "Farmlands",
  "Agro Projects",
];

interface FilterTabsProps {
  activeTab: string;
  onChange: (tab: string) => void;
}

const FilterTabs = ({ activeTab, onChange }: FilterTabsProps) => {
  return (
    <div className="flex flex-wrap gap-4">
      {tabs.map((tab) => (
        <button
          key={tab}
          type="button"
          onClick={() => onChange(tab)}
          className={`rounded-full px-6 py-3 text-sm font-medium transition ${
            activeTab === tab
              ? "bg-[#021D49] text-white"
              : "border border-gray-300 bg-white text-gray-700 hover:border-[#021D49] hover:text-[#021D49]"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default FilterTabs;
