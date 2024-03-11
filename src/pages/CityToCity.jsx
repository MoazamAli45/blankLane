import Hero from "../components/CityToCity/Hero";
import LongDistance from "../components/CityToCity/LongDistance";
import Routes from "../components/CityToCity/Routes";
import Faq from "../components/CityToCity/Faq";
import Signature from "../components/CityToCity/Signature";
import Footer from "../components/CityToCity/Footer";
import Navbar from "../components/CityToCity/Navbar";

const CityToCity = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      {/* <Download /> */}
      <LongDistance />
      <Routes />
      <Faq />
      <Signature />
      {/* <SignatureDownload /> */}
      <Footer />
    </div>
  );
};

export default CityToCity;
