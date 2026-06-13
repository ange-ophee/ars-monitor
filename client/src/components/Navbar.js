import { Link, useLocation } from "react-router-dom";

function Navbar() {

  const location = useLocation();

  return (

    <nav style={styles.navbar}>

      {/* LOGO */}
      <Link to="/" style={styles.logo}>
        ARS Monitor
      </Link>

      {/* NAVIGATION LINKS */}
      <div style={styles.links}>

        <Link
          to="/"
          style={{
            ...styles.link,
            color: location.pathname === "/" ? "#C9A227" : "#FFFFFF"
          }}
        >
          Home
        </Link>

        <Link
          to="/about"
          style={{
            ...styles.link,
            color: location.pathname === "/about" ? "#C9A227" : "#FFFFFF"
          }}
        >
          About
        </Link>

        <Link
          to="/contact"
          style={{
            ...styles.link,
            color: location.pathname === "/contact" ? "#C9A227" : "#FFFFFF"
          }}
        >
          Contact
        </Link>

      </div>

      {/* AUTH BUTTON */}
      <Link to="/login" style={styles.button}>
        Login
      </Link>

    </nav>

  );

}

const styles = {

  navbar: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "80px",
    padding: "0 7%",
    background: "rgba(14, 14, 14, 0.72)",
    backdropFilter: "blur(14px)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: 1000,
    borderBottom: "1px solid rgba(255,255,255,0.08)",
    boxSizing: "border-box"
  },

  logo: {
    textDecoration: "none",
    color: "#C9A227",
    fontSize: "26px",
    fontWeight: "700"
  },

  links: {
    display: "flex",
    gap: "35px"
  },

  link: {
    textDecoration: "none",
    fontWeight: "500",
    transition: "0.3s ease",
    fontSize: "15px"
  },

  button: {
    textDecoration: "none",
    background: "#1B5E20",
    color: "white",
    padding: "10px 22px",
    borderRadius: "12px",
    fontWeight: "600",
    transition: "0.3s ease"
  }

};

export default Navbar;