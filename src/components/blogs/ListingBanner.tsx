interface ListingBannerProps {
  image?: string;
}

const ListingBanner = ({ image }: ListingBannerProps) => {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#00193CE5] to-[#00193CE5] p-5 text-white sm:p-6">
      <div className="absolute inset-0 bg-black/10" />

      <div className="relative z-10">
        <h3 className="max-w-full text-xl font-bold leading-tight sm:max-w-[180px] sm:text-2xl">
          New Cashew Farm Listings
        </h3>

        <p className="mt-3 text-sm text-blue-100">
          Discover high-return agricultural investment opportunities.
        </p>

        <button className="mt-6 w-full rounded-lg bg-white px-6 py-3 font-semibold text-slate-900 transition hover:bg-orange-500 hover:text-white sm:w-auto">
          Explore Now
        </button>
      </div>

      {image && (
        <img
          src={image}
          alt="Farm Listing"
          className="mt-8 h-44 w-full rounded-xl object-cover sm:h-56"
        />
      )}
    </div>
  );
};

export default ListingBanner;
