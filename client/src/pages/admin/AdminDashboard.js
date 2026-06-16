import AdminLayout from "../../layouts/AdminLayout";
import StatCard from "../../components/cards/StatCard";
import { useNavigate } from "react-router-dom";

function AdminDashboard() {

  const navigate = useNavigate();

  const activities = [
    {
      icon: "👨‍🌾",
      title: "New Farmer Registered",
      time: "5 minutes ago"
    },
    {
      icon: "📋",
      title: "Evaluation Completed",
      time: "20 minutes ago"
    },
    {
      icon: "🏆",
      title: "Certificate Issued",
      time: "1 hour ago"
    },
    {
      icon: "🌱",
      title: "Farm Added",
      time: "2 hours ago"
    }
  ];

  const modules = [
    {
      title: "👨‍🌾 User Management",
      path: "/admin/users"
    },
    {
      title: "📄 Reports",
      path: "/admin/reports"
    },
    {
      title: "🏆 Certifications",
      path: "/admin/certifications"
    },
    {
      title: "🌱 Farms",
      path: "/admin/farms"
    }
  ];

  return (

    <AdminLayout>

      {/* HERO */}
      <div style={styles.hero}>

        <div>

          <p style={styles.heroTag}>
            ARS 1000 COMPLIANCE PLATFORM
          </p>

          <h1 style={styles.heroTitle}>
            Welcome Back, Administrator
          </h1>

          <p style={styles.heroText}>
            Manage farmers, monitor compliance,
            supervise evaluations, certifications,
            traceability and sustainability indicators
            across the ARS 1000 monitoring platform.
          </p>

        </div>

        <div style={styles.heroStatus}>

          <div>🟢 System Online</div>
          <div>🔒 Secure Access</div>
          <div>💾 Database Active</div>
          <div>⚡ Monitoring Enabled</div>

        </div>

      </div>

      {/* STATISTICS */}
      <div style={styles.statsGrid}>

        <StatCard
          title="Total Farms"
          value="4"
          icon="🌱"
          color="#2E7D32"
        />

        <StatCard
          title="Registered Farmers"
          value="8"
          icon="👨‍🌾"
          color="#1565C0"
        />

        <StatCard
          title="Evaluations"
          value="3"
          icon="📋"
          color="#EF6C00"
        />

        <StatCard
          title="Certificates"
          value="2"
          icon="🏆"
          color="#C9A227"
        />

      </div>

      {/* MIDDLE SECTION */}
      <div style={styles.contentGrid}>

        {/* ACTIVITIES */}
        <div style={styles.card}>

          <h2 style={styles.sectionTitle}>
            Recent Activities
          </h2>

          {activities.map((activity, index) => (

            <div
              key={index}
              style={styles.activityItem}
            >

              <span style={styles.activityIcon}>
                {activity.icon}
              </span>

              <div>

                <div style={styles.activityTitle}>
                  {activity.title}
                </div>

                <div style={styles.activityTime}>
                  {activity.time}
                </div>

              </div>

            </div>

          ))}

        </div>

        {/* COMPLIANCE */}
        <div style={styles.card}>

          <h2 style={styles.sectionTitle}>
            Compliance Overview
          </h2>

          <div style={styles.progressRow}>
            <span>Certified Farms</span>
            <span>72%</span>
          </div>

          <div style={styles.progressBar}>
            <div
              style={{
                ...styles.progressFill,
                width: "72%"
              }}
            />
          </div>

          <div style={styles.progressRow}>
            <span>Pending Review</span>
            <span>18%</span>
          </div>

          <div style={styles.progressBar}>
            <div
              style={{
                ...styles.progressFill,
                width: "18%",
                background: "#C9A227"
              }}
            />
          </div>

          <div style={styles.progressRow}>
            <span>Rejected</span>
            <span>10%</span>
          </div>

          <div style={styles.progressBar}>
            <div
              style={{
                ...styles.progressFill,
                width: "10%",
                background: "#B71C1C"
              }}
            />
          </div>

        </div>

      </div>

      {/* QUICK ACCESS */}
      <div style={styles.card}>

        <h2 style={styles.sectionTitle}>
          Quick Access Modules
        </h2>

        <div style={styles.moduleGrid}>

          {modules.map((module, index) => (

            <div
              key={index}
              style={styles.moduleCard}
              onClick={() => navigate(module.path)}
            >

              <h3>
                {module.title}
              </h3>

              <p>
                Open Module →
              </p>

            </div>

          ))}

        </div>

      </div>

    </AdminLayout>

  );

}

const styles = {

  hero: {
    background:
"linear-gradient(135deg,#0B3D2E,#14532D,#1B4332)",
    color: "white",
    borderRadius: "25px",
    padding: "35px",
    marginBottom: "25px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow:
      "0 15px 35px rgba(0,0,0,0.2)"
  },

  heroTag: {
    color: "#C9A227",
    fontWeight: "bold",
    letterSpacing: "2px"
  },

  heroTitle: {
    textShadow:
      "0 2px 10px rgba(0,0,0,0.25)",
    margin: "10px 0",
    fontSize: "36px"
  },

  heroText: {
    maxWidth: "650px",
    lineHeight: "1.8",
    color: "#CBD5E1"
  },

  heroStatus: {
    background:
    "rgba(255,255,255,0.15)",
    border:
    "1px solid rgba(255,255,255,0.25)",
    padding: "20px",
    borderRadius: "15px",
    display: "flex",
    flexDirection: "column",
    gap: "10px"
  },

  statsGrid: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit,minmax(250px,1fr))",
    gap: "20px",
    marginBottom: "25px"
  },

  contentGrid: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit,minmax(400px,1fr))",
    gap: "20px",
    marginBottom: "25px"
  },

  card: {
    background: "white",
    padding: "25px",
    borderRadius: "20px",
    boxShadow:
      "0 8px 25px rgba(0,0,0,0.08)",
    marginBottom: "20px"
  },

  sectionTitle: {
    marginBottom: "20px",
    color: "#1E293B"
  },

  activityItem: {
    display: "flex",
    gap: "15px",
    padding: "15px 0",
    borderBottom:
      "1px solid rgba(0,0,0,0.08)"
  },

  activityIcon: {
    fontSize: "24px"
  },

  activityTitle: {
    fontWeight: "600"
  },

  activityTime: {
    fontSize: "13px",
    color: "#64748B"
  },

  progressRow: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "18px"
  },

  progressBar: {
    width: "100%",
    height: "10px",
    background: "#E2E8F0",
    borderRadius: "30px",
    overflow: "hidden",
    marginTop: "8px"
  },

  progressFill: {
    height: "100%",
    background: "#2E7D32"
  },

  moduleGrid: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit,minmax(220px,1fr))",
    gap: "20px"
  },

  moduleCard: {
  background:
  "linear-gradient(135deg,#2E7D32,#4CAF50)",
  color: "white",
  borderRadius: "18px",
  padding: "25px",
  cursor: "pointer",
  textAlign: "center",
  fontWeight: "600",
  transition: "0.3s",
  boxShadow:
  "0 10px 25px rgba(46,125,50,0.25)"
}

};

export default AdminDashboard;