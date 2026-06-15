import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function AuditorLayout({ children }) {

  const links = [
    {
      path: "/auditor",
      label: "Dashboard",
      icon: "🏠"
    },
    {
      path: "/auditor/assignments",
      label: "Assignments",
      icon: "📋"
    },
    {
      path: "/auditor/monitoring",
      label: "Monitoring",
      icon: "📝"
    },
    {
      path: "/auditor/evaluations",
      label: "Evaluations",
      icon: "📊"
    },
    {
      path: "/auditor/actions",
      label: "Corrective Actions",
      icon: "✅"
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
        <Navbar title="Auditor Dashboard" />

        <div style={{ padding: "30px" }}>
          {children}
        </div>
      </div>
    </>
  );
}

export default AuditorLayout;