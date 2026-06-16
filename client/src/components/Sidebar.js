import { Link, useLocation } from "react-router-dom";

function Sidebar({ links }) {

  const location = useLocation();

  return (

    <div style={styles.sidebar}>

      {/* LOGO SECTION */}
      <div style={styles.logoSection}>

        <div style={styles.logoBadge}>
          🌱
        </div>

        <h2 style={styles.logo}>
          ARS 1000
        </h2>

        <p style={styles.subtitle}>
          Sustainable Cocoa Monitoring
        </p>

      </div>

      {/* MENU */}
      <div style={styles.menu}>

        {links.map((link) => (

          <Link
            key={link.path}
            to={link.path}
            style={{
              ...styles.link,
              ...(location.pathname === link.path
                ? styles.activeLink
                : {})
            }}
          >

            <span style={styles.icon}>
              {link.icon}
            </span>

            {link.label}

          </Link>

        ))}

      </div>

      {/* FOOTER */}
      <div style={styles.footer}>

        <div style={styles.status}>

          <span style={styles.statusDot}></span>

          System Online

        </div>

        <p style={styles.version}>
          Version 1.0
        </p>

      </div>

    </div>

  );

}

const styles = {

  sidebar: {
    width: "280px",
    height: "100vh",
    position: "fixed",
    left: 0,
    top: 0,

    background:
"linear-gradient(135deg,#0B3D2E,#14532D,#1B4332)",

    color: "white",

    padding: "25px",

    display: "flex",
    flexDirection: "column",

    justifyContent: "space-between",

    boxSizing: "border-box",

    borderRight:
      "1px solid rgba(255,255,255,0.08)",

    boxShadow:
      "10px 0 40px rgba(0,0,0,0.2)"
  },

  logoSection: {
    textAlign: "center",
    marginBottom: "40px"
  },

  logoBadge: {
    width: "70px",
    height: "70px",

    margin: "0 auto 15px",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    borderRadius: "20px",

    fontSize: "32px",

    background:
      "linear-gradient(135deg,#C9A227,#E6C75A)",
    color: "#1B1B1B",

    boxShadow:
      "0 10px 20px rgba(201,162,39,0.3)"
  },

  logo: {
    margin: 0,
    color: "#F8FAFC",
    fontSize: "28px"
  },

  subtitle: {
    color: "#94A3B8",
    fontSize: "14px",
    marginTop: "8px"
  },

  menu: {
    display: "flex",
    flexDirection: "column",
    gap: "10px"
  },

  link: {
    display: "flex",
    alignItems: "center",

    gap: "12px",

    color: "#CBD5E1",

    textDecoration: "none",

    padding: "14px 18px",

    borderRadius: "14px",

    transition: "0.3s",

    fontWeight: "500"
  },

  activeLink: {
    background:
      "linear-gradient(135deg,#1B5E20,#2E7D32)",

    color: "white",

    boxShadow:
      "0 8px 20px rgba(46,125,50,0.3)"
  },

  icon: {
    fontSize: "18px"
  },

  footer: {
    borderTop:
      "1px solid rgba(255,255,255,0.08)",

    paddingTop: "20px"
  },

  status: {
    display: "flex",
    alignItems: "center",
    gap: "10px",

    color: "#CBD5E1",
    fontSize: "14px"
  },

  statusDot: {
    width: "10px",
    height: "10px",

    borderRadius: "50%",

    background: "#22C55E",

    boxShadow:
      "0 0 12px #22C55E"
  },

  version: {
    color: "#64748B",
    fontSize: "12px",
    marginTop: "10px"
  }

};

export default Sidebar;