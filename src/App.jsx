import { Routes, Route } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer"; 
import About from "./pages/About";
import Coaching from "./pages/Coaching";
import Team from "./pages/Team";
import DisclaimerAndPolicy from "./pages/DisclaimerAndPolicy";
import Reviews from "./pages/Reviews"; 
import Home from "./pages/home";
import Contact from "./pages/Contact";
import ForexCardRemittances from "./pages/services/ForexCardRemittances";
import Accommodation from "./pages/services/Accommodation";
import MedicalInsurance from "./pages/services/MedicalInsurance";
import EducationLoan from "./pages/services/EducationLoan"; 
import AllServices from "./pages/AllServices";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiesPolicy from "./pages/CookiesPolicy";
import ScrollToTop from "./components/common/ScrollToTop";

function App() {
  return (
    <>
     <ScrollToTop/>
      <Header />
      <div className="min-h-screen">
        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/coaching" element={<Coaching />} />
          <Route path="/team" element={<Team />} />
          <Route path="/disclaimer" element={<DisclaimerAndPolicy />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/services" element={<AllServices />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/cookies" element={<CookiesPolicy />} />

          //Services
          
          <Route path="/services/forex-card-remittances" element={<ForexCardRemittances />} />
          <Route path="/services/accommodation" element={<Accommodation />} />
          <Route path="/services/medical-insurance" element={<MedicalInsurance />} />
          <Route path="/services/education-loan" element={<EducationLoan />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;


       