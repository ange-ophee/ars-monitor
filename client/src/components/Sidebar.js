import { Link } from "react-router-dom";
import theme from "../assets/theme";

function Sidebar({ links }) {

  return (
    <div style={styles.sidebar}>

      <div style={styles.logoSection}>
        <h2 style={styles.logo}>
          ARS 1000 Monitor
        </h2>

        <p style={styles.subtitle}>
          Sustainable Cocoa
        </p>
      </div>

      <div style={styles.menu}>

        {links.map((link) => (

          <Link
            key={link.path}
            to={link.path}
            style={styles.link}
          >
            {link.icon} {link.label}
          </Link>

        ))}

      </div>

    </div>
  );
}

const styles = {

  sidebar: {
    width: "260px",
    height: "100vh",
    background: theme.colors.primary,
    color: "white",
    padding: "25px",
    boxSizing: "border-box",
    position: "fixed",
    left: 0,
    top: 0
  },

  logoSection: {
    marginBottom: "40px"
  },

  logo: {
    color: theme.colors.gold,
    marginBottom: "5px"
  },

  subtitle: {
    color: "#ddd",
    fontSize: "14px"
  },

  menu: {
    display: "flex",
    flexDirection: "column",
    gap: "12px"
  },

  link: {
    color: "white",
    textDecoration: "none",
    padding: "12px",
    borderRadius: "10px",
    transition: "0.3s"
  }

};

export default Sidebar;