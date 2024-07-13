import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../src/assets/sass/style.scss";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Footer from "./components/footer";
import CorporateGifts from "./pages/corporateGifts";
import OrganicProducts from "./pages/organicProducts";
import ECatering from "./pages/eCatering";
import ManpowerConsulting from "./pages/manpowerConsulting";
import ToursAndTravels from "./pages/toursAndTravels";
import CarRental from "./pages/carRental";
import Contact from "./pages/contact";
import About from "./pages/about";
import Services from "./pages/services";
import BookNow from "./pages/bookNow";
// import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/premium-car-rental" element={<CarRental />} />
        <Route path="/tours-and-travels" element={<ToursAndTravels />} />
        <Route path="/manpower-consulting" element={<ManpowerConsulting />} />
        <Route path="/e-catering" element={<ECatering />} />

        <Route path="/corporate-gifts" element={<CorporateGifts />} />
        <Route path="/organic-products" element={<OrganicProducts />} />
        <Route path="/book-now" element={<BookNow />} />
        {/* <Route path="/book-now" element={<Contact />} />

          <Route path="*" element={<NoPage />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
