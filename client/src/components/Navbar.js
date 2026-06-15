import theme from "../assets/theme";

function Navbar({ title }) {

  return (
    <div style={styles.navbar}>

      <h2>{title}</h2>

      <div style={styles.profile}>
        👤 User
      </div>

    </div>
  );
}

const styles = {

  navbar: {
    background: "#fff",
    padding: "20px 30px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: theme.shadow.card
  },

  profile: {
    fontWeight: "600"
  }

};

export default Navbar;