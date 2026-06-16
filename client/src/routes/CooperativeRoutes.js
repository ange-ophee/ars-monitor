import { Routes, Route } from "react-router-dom";

import CooperativeDashboard from "../pages/cooperative/CooperativeDashboard";
import Farmers from "../pages/cooperative/Farmers";
import Traceability from "../pages/cooperative/Traceability";
import QualityControl from "../pages/cooperative/QualityControl";
import Analytics from "../pages/cooperative/Analytics";

function CooperativeRoutes() {
  return (
    <Routes>

      {/* DASHBOARD */}
      <Route index element={<CooperativeDashboard />} />

      {/* CORE MODULES */}
      <Route path="farmers" element={<Farmers />} />
      <Route path="traceability" element={<Traceability />} />
      <Route path="quality" element={<QualityControl />} />
      <Route path="analytics" element={<Analytics />} />

    </Routes>
  );
}

export default CooperativeRoutes;