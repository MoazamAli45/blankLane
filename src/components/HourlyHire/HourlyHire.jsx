import HourlyService from "./HourlyService";
import OccasIon from "./OccasIon";
import DownloadApp from "./DownloadApp";
import HourlyHero from "./HourlyHero";
import AboutHourly from "./AboutHourly";
import Signaturebg1 from "./Signaturebg1";
import Navbar from "../CityToCity/Navbar";
import Footer from "../CityToCity/Footer";

const HourlyHire = () => {
  return (
    <div>
      <Navbar />
      <HourlyHero />
      <AboutHourly />
      <HourlyService />
      <OccasIon />
      <Signaturebg1 />
      <DownloadApp />
      <Footer />
    </div>
  );
};

export default HourlyHire;
