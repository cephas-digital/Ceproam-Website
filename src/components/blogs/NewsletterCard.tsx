const NewsletterCard = () => {
  return (
    <div className="rounded-2xl space-y-6 bg-gradient-to-b from-[#00193C] to-[#0044A2] p-5 text-white sm:p-7">
      <h3 className="text-xl font-bold sm:text-2xl">
        Market Intelligence Delivered
      </h3>

      <p className="mt-3 text-sm text-blue-100 sm:mt-4 sm:text-base">
        Get bi-weekly investment reports and early access to property listings.
      </p>

      <div className="">
        <input
          placeholder="Email Address"
          className="mt-8 w-full rounded-lg border border-blue-400 bg-transparent p-3 outline-none"
        />

        <button className="mt-4 w-full rounded-lg bg-[#FF6000] py-3 font-semibold hover:bg-orange-600">
          Subscribe Now
        </button>
      </div>

      <p className="mt-4 text-center text-xs text-blue-200">
        We respect your privacy.
      </p>
    </div>
  );
};

export default NewsletterCard;
