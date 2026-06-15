import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function AdminLayout({ children }) {

  const links = [
    {
      path: "/admin",
      label: "Dashboard"
    },
    {
      path: "/admin/users",
      label: "Users"
    },
    {
      path: "/admin/reports",
      label: "Reports"
    },
    {
      path: "/admin/certifications",
      label: "Certifications"
    }
  ];

  return (

    <>
      <Sidebar links={links} />

      <div
        style={{
          marginLeft: "260px",
          minHeight: "100vh",
          background: "#F5F3EF"
        }}
      >

        <Navbar title="Admin Dashboard" />

        <div style={{ padding: "30px" }}>
          {children}
        </div>

      </div>
    </>

  );
}

export default AdminLayout;