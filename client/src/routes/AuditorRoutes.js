import { Routes, Route } from "react-router-dom";

import AuditorDashboard from "../pages/auditor/AuditorDashboard";

function AuditorRoutes() {

  return (
    <Routes>

      <Route
        index
        element={<AuditorDashboard />}
      />

    </Routes>
  );

}

export default AuditorRoutes;