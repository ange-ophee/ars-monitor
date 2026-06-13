import { Outlet, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../services/api";
import Sidebar from "./Sidebar";

function Layout() {

  const [unreadCount, setUnreadCount] = useState(0);

  useEffect(() => {

    const userId = localStorage.getItem("userId");

    if (!userId) return;

    API.get(`/notifications/${userId}`)
      .then((res) => {

        const unread = res.data.filter(
          n => n.status === "unread"
        ).length;

        setUnreadCount(unread);

      })
      .catch((err) => console.log(err));

  }, []);

  return (

    <div style={{ display: "flex" }}>

      <Sidebar />

      <div style={{ flex: 1 }}>

        {/* HEADER */}

        <div style={styles.header}>

          <h2 style={styles.title}>
            ARS Monitor
          </h2>

          <Link
            to="/notifications"
            style={styles.notificationBell}
          >

            🔔

            {unreadCount > 0 && (

              <span style={styles.badge}>
                {unreadCount}
              </span>

            )}

          </Link>

        </div>

        {/* PAGE CONTENT */}

        <div style={{ padding: "20px" }}>
          <Outlet />
        </div>

      </div>

    </div>

  );

}

const styles = {

  header: {
    height: "70px",
    background: "#FFFFFF",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 30px",
    borderBottom: "1px solid #E5E5E5",
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
  },

  title: {
    color: "#1B5E20",
    margin: 0
  },

  notificationBell: {
    position: "relative",
    textDecoration: "none",
    fontSize: "26px",
    color: "#1B5E20"
  },

  badge: {
    position: "absolute",
    top: "-8px",
    right: "-12px",
    background: "#D32F2F",
    color: "#FFF",
    borderRadius: "50%",
    width: "22px",
    height: "22px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "12px",
    fontWeight: "bold"
  }

};

export default Layout;