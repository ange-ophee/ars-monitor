import { NavLink } from "react-router-dom";

function Sidebar() {

  const links = [
    { path: "/dashboard", label: "Dashboard" },
    { path: "/farmers", label: "Farmers" },
    { path: "/farms", label: "Farms" },
    { path: "/monitoring", label: "Monitoring" },
    { path: "/evaluations", label: "Evaluations" },
    { path: "/reports", label: "Reports" }
  ];

  return (

    <div style={styles.sidebar}>

      {/* LOGO */}
      <div>

        <h2 style={styles.logo}>
          ARS Monitor
        </h2>

        <p style={styles.subtitle}>
          Sustainability Platform
        </p>

      </div>

      {/* NAVIGATION */}
      <div style={styles.nav}>

        {links.map((link) => (

          <NavLink
            key={link.path}
            to={link.path}
            style={({ isActive }) => ({
              ...styles.link,
              background: isActive ? "#5D4037" : "transparent",
              color: isActive ? "#FFFFFF" : "#D6D6D6",
              borderLeft: isActive
                ? "4px solid #C9A227"
                : "4px solid transparent"
            })}
          >
            {link.label}
          </NavLink>

        ))}

      </div>

      {/* FOOTER */}
      <div style={styles.footer}>
        ARS 1000 Compliance System
      </div>

    </div>

  );
}

const styles = {

  sidebar: {
    width: "260px",
    height: "100vh",
    background: "#3f5238",
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "30px 20px",
    position: "sticky",
    top: 0
  },

  logo: {
    color: "#C9A227",
    marginBottom: "5px",
    fontSize: "28px"
  },

  subtitle: {
    color: "#B0B0B0",
    fontSize: "14px"
  },

  nav: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    marginTop: "40px"
  },

  link: {
    padding: "14px 18px",
    borderRadius: "12px",
    textDecoration: "none",
    transition: "0.3s ease",
    fontWeight: "500"
  },

  footer: {
    color: "#888",
    fontSize: "13px"
  }

};

export default Sidebar;