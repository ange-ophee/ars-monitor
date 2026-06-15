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
        path="/admin/users"
        element={
          <AdminLayout>
            <Users />
          </AdminLayout>
        }
      />

      {/* REPORTS */}
      <Route
        path="/admin/reports"
        element={
          <AdminLayout>
            <Reports />
          </AdminLayout>
        }
      />

      {/* CERTIFICATIONS */}
      <Route
        path="/admin/certifications"
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