import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function FarmerLayout({ children }) {

  const links = [
    {
      path: "/farmer",
      label: "Dashboard",
      icon: "🏠"
    },
    {
      path: "/farmer/farms",
      label: "My Farms",
      icon: "🌱"
    },
    {
      path: "/farmer/harvests",
      label: "Harvests",
      icon: "🌾"
    },
    {
      path: "/farmer/compliance",
      label: "Compliance Status",
      icon: "📈"
    },
    {
      path: "/farmer/recommendations",
      label: "Recommendations",
      icon: "💡"
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
        <Navbar title="Farmer Dashboard" />

        <div style={{ padding: "30px" }}>
          {children}
        </div>
      </div>
    </>
  );
}

export default FarmerLayout;