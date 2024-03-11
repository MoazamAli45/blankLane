import { Route, Routes } from "react-router-dom";
import "./App.css";
import CityToCity from "./pages/CityToCity";
import { Home } from "./components/Home/Home";
import AirportTransfer from "./components/AirportTransfer/AirportTransfer";
import ChoufferServices from "./components/ChoufferServices/ChoufferServices";
import HourlyHire from "./components/HourlyHire/HourlyHire";
import LimousineServices from "./components/LimousineServices/LimousineServices";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/city-to-city" element={<CityToCity />} />
        <Route path="/airportTransfer" element={<AirportTransfer />} />
        <Route path="/hourlyHire" element={<HourlyHire />} />
        <Route path="/choufferservices" element={<ChoufferServices />} />
        <Route path="/limousineservices" element={<LimousineServices />} />
      </Routes>
    </>
  );
}

export default App;
