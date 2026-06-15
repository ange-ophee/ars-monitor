import { Routes, Route } from "react-router-dom";

import FarmerDashboard from "../pages/farmer/FarmerDashboard";

function FarmerRoutes() {

  return (
    <Routes>

      <Route
        index
        element={<FarmerDashboard />}
      />

    </Routes>
  );

}

export default FarmerRoutes;