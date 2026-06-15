import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import Auth from "../pages/Auth";

import AdminRoutes from "./AdminRoutes";
import AuditorRoutes from "./AuditorRoutes";
import FarmerRoutes from "./FarmerRoutes";
import CooperativeRoutes from "./CooperativeRoutes";

import ProtectedRoute from "../components/ProtectedRoute";

function AppRoutes() {

  return (

    <BrowserRouter>

      <Routes>

        {/* AUTH */}
        <Route
          path="/"
          element={<Auth />}
        />

        {/* ADMIN */}
        <Route
          path="/admin/*"
          element={
            <ProtectedRoute>
              <AdminRoutes />
            </ProtectedRoute>
          }
        />

        {/* AUDITOR */}
        <Route
          path="/auditor/*"
          element={
            <ProtectedRoute>
              <AuditorRoutes />
            </ProtectedRoute>
          }
        />

        {/* FARMER */}
        <Route
          path="/farmer/*"
          element={
            <ProtectedRoute>
              <FarmerRoutes />
            </ProtectedRoute>
          }
        />

        {/* COOPERATIVE */}
        <Route
          path="/cooperative/*"
          element={
            <ProtectedRoute>
              <CooperativeRoutes />
            </ProtectedRoute>
          }
        />

        {/* FALLBACK */}
        <Route
          path="*"
          element={<Navigate to="/" />}
        />

      </Routes>

    </BrowserRouter>

  );

}

export default AppRoutes;