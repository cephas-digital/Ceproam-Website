import { BrowserRouter, Route, Routes } from "react-router";
import Navbar from "./components/shared/Navbar";
import Home from "./pages/Home";

// function Placeholder() {
//   return <div className="p-10">Page Content</div>;
// }

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        {/* <Route
          path="/about"
          element={<Placeholder />}
        />
        <Route
          path="/listings"
          element={<Placeholder />}
        />
        <Route
          path="/blog"
          element={<Placeholder />}
        />
        <Route
          path="/contact"
          element={<Placeholder />}
        /> */}
      </Routes>
    </BrowserRouter>
  );
}
