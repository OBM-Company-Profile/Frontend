import { Routes, Route, BrowserRouter } from "react-router-dom";
import "preline/preline";
import Home from "./pages/Home.tsx";
import Tentang from "./pages/Tentang.tsx";
import Shipping from "./pages/layanan/shipping/Shipping.tsx";
import Marine from "./pages/layanan/marine/Marine.tsx";
import PortService from "./pages/layanan/port/Port Service.tsx";
import Portofolio from "./pages/Portofolio.tsx";
import Kapal from "./pages/fasilitas/Kapal.tsx";
import Mobil from "./pages/fasilitas/Mobil.tsx";
import Kantor from "./pages/fasilitas/Kantor.tsx";
import Quality from "./pages/Quality.tsx";
import Logistic from "./pages/layanan/logistic/Logistic.tsx";
import Konsultan from "./pages/layanan/Konsultan.tsx";
import Husbandry from "./pages/layanan/shipping/Husbandry.tsx";
import ProtectingAgency from "./pages/layanan/shipping/Protecting Agency.tsx";
import Kontak from "./pages/Kontak.tsx";
import LaunchService from "./pages/layanan/shipping/Launch Service.tsx";
import EmergencyResponse from "./pages/layanan/shipping/Emergency Response.tsx";
import DryDocking from "./pages/layanan/port/Dry Docking.tsx";
import TerminalStevedoring from "./pages/layanan/logistic/Terminal Stevedoring.tsx";
import Trucking from "./pages/layanan/logistic/Trucking.tsx";
import Travel from "./pages/layanan/logistic/Travel.tsx";
import STS from "./pages/layanan/marine/STS.tsx";
import ShipOperator from "./pages/layanan/marine/Ship Operator.tsx";
import ShipOwner from "./pages/layanan/marine/Ship Owner.tsx";
import FPSO from "./pages/layanan/marine/FPSO.tsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tentang" element={<Tentang />} />
        <Route path="/layanan/shipping" element={<Shipping />} />
        <Route
          path="/layanan/shipping/shipping-agency"
          element={<Shipping />}
        />
        <Route
          path="/layanan/shipping/husbandry-service"
          element={<Husbandry />}
        />
        <Route
          path="/layanan/shipping/protecting-agency"
          element={<ProtectingAgency />}
        />
        <Route
          path="/layanan/shipping/launch-service"
          element={<LaunchService />}
        />
        <Route
          path="/layanan/shipping/emergency-response"
          element={<EmergencyResponse />}
        />
        <Route path="/layanan/marine" element={<Marine />} />
        <Route path="/layanan/marine/ship-to-ship" element={<STS />} />
        <Route
          path="/layanan/marine/ship-operator"
          element={<ShipOperator />}
        />
        <Route path="/layanan/marine/ship-owner" element={<ShipOwner />} />
        <Route path="/layanan/marine/fpso" element={<FPSO />} />
        <Route path="/layanan/port-service" element={<PortService />} />
        <Route
          path="/layanan/port-service/dry-docking"
          element={<DryDocking />}
        />
        <Route path="/layanan/logistik" element={<Logistic />} />
        <Route
          path="/layanan/logistik/terminal-stevedoring"
          element={<TerminalStevedoring />}
        />
        <Route path="/layanan/logistik/trucking" element={<Trucking />} />
        <Route path="/layanan/logistik/travel" element={<Travel />} />
        <Route path="/layanan/konsultan" element={<Konsultan />} />
        <Route path="/quality" element={<Quality />} />
        <Route path="/portofolio" element={<Portofolio />} />
        <Route path="/fasilitas" element={<Kapal />} />
        <Route path="/fasilitas/mobil" element={<Mobil />} />
        <Route path="/fasilitas/kantor" element={<Kantor />} />
        <Route path="/kontak" element={<Kontak />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
