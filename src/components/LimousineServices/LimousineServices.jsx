import LimoServices from "./LimoServices";
import BlacklaneLimo from "./BlacklaneLimo";
import AirportService from "./AirportService";
import LimoHero from "./LimoHero";
import Services from "../shared/Services";
import Navbar from "../CityToCity/Navbar";
import Footer from "../CityToCity/Footer";

const LimousineServices = () => {
  return (
    <div>
      <Navbar />
      <LimoHero />
      <Services />
      <LimoServices />
      <BlacklaneLimo />
      <AirportService />
      <Footer />
    </div>
  );
};

export default LimousineServices;
