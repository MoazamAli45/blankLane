import Hero2 from "../shared/Hero";
import Services from "../shared/Services";
import SignatureBg from "../shared/SignatureBg";
import AirportToCity from "./AirportToCity";
import GetToAirport from "./GetToAirport";
import AirportSuttle from "./AirportSuttle";
import Navbar from "../CityToCity/Navbar";
import Footer from "../CityToCity/Footer";

const AirportTransfer = () => {
  return (
    <div>
      <Navbar />
      <Hero2 />
      <Services />
      <SignatureBg />
      <AirportToCity />
      <GetToAirport />
      <AirportSuttle />
      <Footer />
    </div>
  );
};

export default AirportTransfer;
