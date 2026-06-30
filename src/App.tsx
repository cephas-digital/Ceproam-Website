import { BrowserRouter, Route, Routes } from "react-router";
import Navbar from "./components/shared/Navbar";
import Home from "./pages/Home";
import AboutUs from "./pages/About-us";
import Listings from "./pages/Listings";
import ListingDetails from "./pages/ListingDetails";

export default function App() {
  return (
    <BrowserRouter>
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
