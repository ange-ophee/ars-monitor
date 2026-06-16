import { Routes, Route } from "react-router-dom";

import FarmerDashboard from "../pages/farmer/FarmerDashboard";
import MyFarms from "../pages/farmer/MyFarms";
import Harvests from "../pages/farmer/Harvests";
import ComplianceStatus from "../pages/farmer/ComplianceStatus";
import Recommendations from "../pages/farmer/Recommendations";

function FarmerRoutes() {
  return (
    <Routes>

      {/* DASHBOARD */}
      <Route index element={<FarmerDashboard />} />

      {/* CORE MODULES */}
      <Route path="farms" element={<MyFarms />} />
      <Route path="harvests" element={<Harvests />} />
      <Route path="compliance" element={<ComplianceStatus />} />
      <Route path="recommendations" element={<Recommendations />} />

    </Routes>
  );
}

export default FarmerRoutes;