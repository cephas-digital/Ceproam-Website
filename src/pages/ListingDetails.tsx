import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import {
  FaArrowLeft,
  FaMapMarkerAlt,
  FaClock,
  FaPercent,
} from "react-icons/fa";

import { getInvestmentDetails } from "../api/investments";
import { getPropertyDetails } from "../api/properties";
import { transformBackendInvestmentToCard } from "../utils/transformInvestment";
import { transformBackendPropertyToCard } from "../utils/transformProperty";
import type { ListingCardData } from "../types/types";

const ListingDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const [listing, setListing] = useState<ListingCardData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    if (!id) return;

    const fetchDetail = async () => {
      try {
        setLoading(true);
        setError(false);

        // 1. Try fetching as an Investment Package first
        try {
          const invResponse = await getInvestmentDetails(id);
          if (invResponse?.data) {
            const transformed = transformBackendInvestmentToCard(
              invResponse.data,
            );
            setListing(transformed);
            setLoading(false);
            return;
          }
        } catch {
          // If investment fetch fails, gracefully fallback to property lookup below
        }

        // 2. Fallback: Fetch as a Property
        const propResponse = await getPropertyDetails(id);
        if (propResponse?.data) {
          const transformed = transformBackendPropertyToCard(propResponse.data);
          setListing(transformed);
        } else {
          setError(true);
        }
      } catch (err) {
        console.error(
          "Failed to load listing details from both endpoints:",
          err,
        );
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchDetail();
  }, [id]);

  // 1. LOADING SKELETON / SPINNER STATE
  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 px-6 py-24 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-orange-500 border-t-transparent" />
          <p className="text-slate-600 font-medium">
            Loading listing details...
          </p>
        </div>
      </div>
    );
  }

  // 2. ERROR OR NOT FOUND STATE
  if (error || !listing) {
    return (
      <div className="min-h-screen bg-slate-50 px-6 py-24 text-center">
        <div className="mx-auto max-w-xl rounded-3xl bg-white p-10 shadow-xl">
          <h1 className="text-3xl font-bold text-slate-900">
            Listing not found
          </h1>
          <p className="mt-4 text-slate-600">
            The requested opportunity could not be found or may no longer be
            available.
          </p>
          <Link
            to="/listings"
            className="mt-8 inline-flex rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Back to Listings
          </Link>
        </div>
      </div>
    );
  }

  // 3. RENDER LIVE DATA
  return (
    <main className="min-h-screen font-Outfit bg-slate-50 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-orange-500">
              Listing Details
            </p>
            <h1 className="mt-3 text-4xl font-bold text-slate-900">
              {listing.title}
            </h1>
            <p className="mt-3 text-base text-slate-600">{listing.location}</p>
          </div>
          <Link
            to="/listings"
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            <FaArrowLeft /> Back to all listings
          </Link>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6 rounded-[32px] bg-white p-8 shadow-xl">
            <img
              src={listing.image}
              alt={listing.title}
              className="h-[400px] w-full rounded-[28px] object-cover"
            />

            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-3xl bg-slate-50 p-6 text-center">
                <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
                  {listing.priceLabel}
                </p>
                <p className="mt-3 text-xl font-semibold text-slate-900">
                  {listing.priceValue}
                </p>
              </div>
              <div className="rounded-3xl bg-slate-50 p-6 text-center">
                <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
                  {listing.secondaryLabel ?? "Type"}
                </p>
                <p className="mt-3 text-xl font-semibold text-orange-500">
                  {listing.secondaryValue ?? "—"}
                </p>
              </div>
              <div className="rounded-3xl bg-slate-50 p-6 text-center">
                <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
                  Status
                </p>
                <p className="mt-3 text-xl font-semibold text-slate-900">
                  {listing.badgeRight ?? "AVAILABLE"}
                </p>
              </div>
            </div>

            <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6">
              <h2 className="text-xl font-semibold text-slate-900">
                Why this listing works
              </h2>
              <p className="mt-4 text-slate-600 leading-7">
                This opportunity is backed by strong asset fundamentals, a
                trusted project structure, and solid value expectations. Benefit
                from verified land-backed value and transparent milestones.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-3xl bg-white p-6 shadow-sm">
                <div className="inline-flex items-center gap-2 text-orange-500">
                  <FaMapMarkerAlt />
                  <span className="text-sm font-semibold">Location</span>
                </div>
                <p className="mt-3 text-slate-700">{listing.location}</p>
              </div>
              <div className="rounded-3xl bg-white p-6 shadow-sm">
                <div className="inline-flex items-center gap-2 text-orange-500">
                  <FaClock />
                  <span className="text-sm font-semibold">Category</span>
                </div>
                <p className="mt-3 text-slate-700">
                  {listing.badgeLeft ?? "N/A"}
                </p>
              </div>
              <div className="rounded-3xl bg-white p-6 shadow-sm">
                <div className="inline-flex items-center gap-2 text-orange-500">
                  <FaPercent />
                  <span className="text-sm font-semibold">Value / ROI</span>
                </div>
                <p className="mt-3 text-slate-700">{listing.secondaryValue}</p>
              </div>
            </div>
          </div>

          <aside className="space-y-6 rounded-[32px] bg-white p-8 shadow-xl">
            <div className="rounded-[28px] bg-slate-50 p-6">
              <p className="text-sm uppercase tracking-[0.25em] text-slate-500">
                Next step
              </p>
              <p className="mt-3 text-xl font-semibold text-slate-900">
                Secure your position
              </p>
              <p className="mt-4 text-slate-600 leading-7">
                Review the offering details, request a consultation, and reserve
                your position before units close.
              </p>
            </div>

            <button className="w-full rounded-3xl bg-slate-900 px-6 py-4 text-base font-semibold text-white transition hover:bg-slate-800 cursor-pointer">
              Request a Call
            </button>

            <button className="w-full rounded-3xl border border-slate-200 bg-white px-6 py-4 text-base font-semibold text-slate-900 transition hover:bg-slate-50 cursor-pointer">
              Download Offering PDF
            </button>

            <div className="rounded-[28px] bg-slate-50 p-6">
              <p className="text-sm uppercase tracking-[0.25em] text-slate-500">
                What’s included
              </p>
              <ul className="mt-4 space-y-3 text-slate-600">
                <li>Dedicated account manager</li>
                <li>Legal title verification</li>
                <li>Exit horizon analysis</li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
};

export default ListingDetails;
