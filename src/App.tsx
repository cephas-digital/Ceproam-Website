import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";
import Home from "./pages/Home";
import HomeTwo from "./pages/HomeTwo";
import AboutUs from "./pages/About-us";
import Blogs from "./pages/Blogs";
import ContactUs from "./pages/Contact-us";
import Listings from "./pages/Listings";
import ListingDetails from "./pages/ListingDetails";
import Properties from "./pages/Properties";
import PropertyAgents from "./pages/PropertyAgents";
import InvestmentSponsors from "./pages/InvestmentSponsors";
// import BuyersInvestors from "./pages/BuyersInvestors";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, "")}>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<HomeTwo />}
        />

        <Route
          path="/home"
          element={<Home />}
        />

        <Route
          path="/about"
          element={<AboutUs />}
        />
        <Route
          path="/listings"
          element={<Listings />}
        />
        <Route
          path="/listing/:id"
          element={<ListingDetails />}
        />
        <Route
          path="/properties"
          element={<Properties />}
        />
        <Route
          path="/property-agents"
          element={<PropertyAgents />}
        />
        <Route
          path="/investment-sponsors"
          element={<InvestmentSponsors />}
        />
        {/* <Route
          path="/buyers-investors"
          element={<BuyersInvestors />}
        /> */}

        <Route
          path="/blog"
          element={<Blogs />}
        />

        <Route
          path="/contact"
          element={<ContactUs />}
        />
        {/* <Route path="/listings/:id" element={<ListingSection />} /> */}
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
