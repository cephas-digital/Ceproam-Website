import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router";
import Navbar from "./components/shared/Navbar";
import Home from "./pages/Home";
import AboutUs from "./pages/About-us";
import Listings from "./pages/Listings";
import ListingDetails from "./pages/ListingDetails";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route
          path="/"
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
      </Routes>
    </BrowserRouter>
  );
}
