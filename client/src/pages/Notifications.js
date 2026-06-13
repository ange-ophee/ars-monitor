import { useEffect, useState } from "react";

function Notifications() {

  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  const userId = localStorage.getItem("userId");

    useEffect(() => {

    const fetchNotifications = async () => {

        try {

        const response = await fetch(
            `http://localhost:5000/api/notifications/${userId}`
        );

        const data = await response.json();

        setNotifications(data);

        } catch (error) {

        console.error("Error fetching notifications:", error);

        } finally {

        setLoading(false);

        }

    };

    fetchNotifications();

    }, [userId]);


  const markAsRead = async (id) => {

    try {

      await fetch(
        `http://localhost:5000/api/notifications/${id}/read`,
        {
          method: "PUT"
        }
      );

      setNotifications(prev =>
        prev.map(notification =>
          notification.id === id
            ? { ...notification, status: "read" }
            : notification
        )
      );

    } catch (error) {

      console.error("Error updating notification:", error);

    }
  };

  return (

    <div style={styles.container}>

      <h1 style={styles.title}>
        Notifications
      </h1>

      {loading ? (

        <p>Loading notifications...</p>

      ) : notifications.length === 0 ? (

        <div style={styles.empty}>
          No notifications available.
        </div>

      ) : (

        notifications.map(notification => (

          <div
            key={notification.id}
            onClick={() => markAsRead(notification.id)}
            style={{
              ...styles.card,
              background:
                notification.status === "unread"
                  ? "#FFF8E1"
                  : "#FFFFFF"
            }}
          >

            <div style={styles.header}>

              <span style={styles.type}>
                {notification.notification_type}
              </span>

              <span style={styles.status}>
                {notification.status}
              </span>

            </div>

            <p style={styles.message}>
              {notification.message}
            </p>

            <small style={styles.date}>
              {new Date(
                notification.created_at
              ).toLocaleString()}
            </small>

          </div>

        ))

      )}

    </div>

  );
}

const styles = {

  container: {
    padding: "120px 8%",
    minHeight: "100vh",
    background: "#F5F5F5"
  },

  title: {
    marginBottom: "30px",
    color: "#1B5E20"
  },

  empty: {
    background: "white",
    padding: "25px",
    borderRadius: "12px"
  },

  card: {
    padding: "20px",
    marginBottom: "15px",
    borderRadius: "12px",
    cursor: "pointer",
    boxShadow: "0 2px 10px rgba(0,0,0,0.08)"
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "10px"
  },

  type: {
    color: "#1B5E20",
    fontWeight: "bold",
    textTransform: "capitalize"
  },

  status: {
    color: "#C9A227",
    fontSize: "14px"
  },

  message: {
    marginBottom: "10px"
  },

  date: {
    color: "#777"
  }

};

export default Notifications;