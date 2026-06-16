import { Routes, Route } from "react-router-dom";

import AdminDashboard from "../pages/admin/AdminDashboard";
import Reports from "../pages/admin/Reports";
import Certifications from "../pages/admin/Certifications";
import Users from "../pages/admin/Users";

import AdminLayout from "../layouts/AdminLayout";

function AdminRoutes() {

  return (
    <Routes>

    {/* DASHBOARD */}
      <Route
        index
        element={<AdminDashboard />}
      />

    {/* USERS */}
      <Route
        path="/users"
        element={
          <AdminLayout>
            <Users />
          </AdminLayout>
        }
      />

      {/* REPORTS */}
      <Route
        path="/reports"
        element={
          <AdminLayout>
            <Reports />
          </AdminLayout>
        }
      />

      {/* CERTIFICATIONS */}
      <Route
        path="/certifications"
        element={
          <AdminLayout>
            <Certifications />
          </AdminLayout>
        }
      />

    </Routes>
  );

}

export default AdminRoutes;