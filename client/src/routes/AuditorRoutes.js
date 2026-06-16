import { Routes, Route } from "react-router-dom";

import AuditorDashboard from "../pages/auditor/AuditorDashboard";
import Assignments from "../pages/auditor/Assignments";
import Monitoring from "../pages/auditor/Monitoring";
import Evaluations from "../pages/auditor/Evaluations";
import Actions from "../pages/auditor/Actions";

function AuditorRoutes() {
  return (
    <Routes>

      {/* DASHBOARD */}
      <Route index element={<AuditorDashboard />} />

      {/* MODULES */}
      <Route path="assignments" element={<Assignments />} />
      <Route path="monitoring" element={<Monitoring />} />
      <Route path="evaluations" element={<Evaluations />} />
      <Route path="actions" element={<Actions />} />

    </Routes>
  );
}

export default AuditorRoutes;