import { Routes, Route } from "react-router-dom";

import CooperativeDashboard from "../pages/cooperative/CooperativeDashboard";

function CooperativeRoutes() {

  return (
    <Routes>

      <Route
        index
        element={<CooperativeDashboard />}
      />

    </Routes>
  );

}

export default CooperativeRoutes;