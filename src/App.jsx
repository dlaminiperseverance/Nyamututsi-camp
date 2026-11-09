
import { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation
} from "react-router-dom";

import Header from "./Components/Header.jsx";
import About from "./Components/About.jsx";
import Activities from "./Components/Activities.jsx";
import Itineraries from "./Components/Itineraries.jsx";
import Testimonials from "./Components/Testimonials.jsx";
import Gallery from "./Components/Gallery.jsx";
import Footer from "./Components/Footer.jsx";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function Home() {
  return (
    <>
      <About />
      <Activities />
      <Itineraries />
      <Testimonials />
      <Gallery />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">

        <ScrollToTop />

        {/* Navbar appears on every page */}
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/itineraries" element={<Itineraries />} />
            <Route path="/reviews" element={<Testimonials />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </main>

        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;
