import WorldClass from "./WorldClass";
import WorldWild from "./WorldWild";
import PrivateChauffeur from "./PrivateChauffeur";
import ProfessionalChauffeur from "./ProfessionalChauffeur";
import ChauffeurHero from "./ChauffeurHero";
import Services from "../shared/Services";
import SignatureBg from "../shared/SignatureBg";
import Navbar from "../CityToCity/Navbar";
import Footer from "../CityToCity/Footer";

const ChoufferServices = () => {
  return (
    <div>
      <Navbar />
      <ChauffeurHero />
      <Services />
      <SignatureBg />
      <WorldClass />
      <WorldWild />
      <PrivateChauffeur />
      <ProfessionalChauffeur />
      <Footer />
    </div>
  );
};

export default ChoufferServices;
