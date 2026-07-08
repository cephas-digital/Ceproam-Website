interface StatsCardProps {
  investors: string;
  roi: string;
}

export default function StatsCard({ investors, roi }: StatsCardProps) {
  return (
    <div className="flex rounded-2xl border bg-white px-6 py-5 shadow-sm">
      <div className="pr-6">
        <p className="text-xs text-gray-500">Active Investors</p>

        <h3 className="text-3xl font-bold text-[#0E2248]">{investors}</h3>
      </div>

      <div className="border-l pl-6">
        <p className="text-xs text-gray-500">Total Paid ROI {roi} </p>

        <h3 className="text-3xl font-bold text-orange-500">₦2.4B+</h3>
      </div>
    </div>
  );
}
