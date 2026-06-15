import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function CooperativeLayout({ children }) {

  const links = [
    {
      path: "/cooperative",
      label: "Dashboard",
      icon: "🏠"
    },
    {
      path: "/cooperative/farmers",
      label: "Farmers",
      icon: "👨‍🌾"
    },
    {
      path: "/cooperative/traceability",
      label: "Traceability",
      icon: "🔗"
    },
    {
      path: "/cooperative/quality",
      label: "Quality Control",
      icon: "🏆"
    },
    {
      path: "/cooperative/analytics",
      label: "Analytics",
      icon: "📊"
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
        <Navbar title="Cooperative Dashboard" />

        <div style={{ padding: "30px" }}>
          {children}
        </div>
      </div>
    </>
  );
}

export default CooperativeLayout;