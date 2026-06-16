import { useNavigate } from "react-router-dom";
import AuditorLayout from "../../layouts/AuditorLayout";
import StatCard from "../../components/cards/StatCard";

function AuditorDashboard() {

  const navigate = useNavigate();

  const modules = [
    {
      title: "Assignments",
      icon: "📋",
      path: "/auditor/assignments",
      desc: "Manage audit tasks"
    },
    {
      title: "Monitoring",
      icon: "👁️",
      path: "/auditor/monitoring",
      desc: "Real-time farm tracking"
    },
    {
      title: "Evaluations",
      icon: "📊",
      path: "/auditor/evaluations",
      desc: "Compliance scoring"
    },
    {
      title: "Corrective Actions",
      icon: "⚠️",
      path: "/auditor/actions",
      desc: "Enforcement & fixes"
    }
  ];

  const activity = [
    { text: "Farm F-102 scheduled for inspection", time: "2 min ago", type: "info" },
    { text: "Evaluation submitted for Farm F-087", time: "25 min ago", type: "success" },
    { text: "Corrective action issued to Farm F-055", time: "1 hr ago", type: "warning" },
    { text: "New assignment assigned", time: "3 hrs ago", type: "info" },
    { text: "Monitoring session completed", time: "Yesterday", type: "success" }
  ];

  const alerts = [
    { label: "High Risk Farms", value: 3 },
    { label: "Overdue Evaluations", value: 2 },
    { label: "Pending Actions", value: 5 }
  ];

  const getDot = (type) => {
    if (type === "success") return "#16A34A";
    if (type === "warning") return "#CA8A04";
    return "#2563EB";
  };

  return (
    <AuditorLayout>

      {/* HEADER */}
      <div style={styles.header}>
        <h1 style={styles.title}>Auditor Control Center</h1>
        <p style={styles.subtitle}>
          Operational overview of audits, compliance tracking, and enforcement
        </p>
      </div>

      {/* MAIN STATS */}
      <div style={styles.stats}>
        <StatCard title="Assigned Farms" value="24" icon="🌾" />
        <StatCard title="Monitoring Sessions" value="18" icon="👁️" />
        <StatCard title="Pending Evaluations" value="7" icon="📋" />
        <StatCard title="Corrective Actions" value="12" icon="⚠️" />
      </div>

      {/* MODULES */}
      <div style={styles.moduleGrid}>
        {modules.map((m, i) => (
          <div
            key={i}
            style={styles.moduleCard}
            onClick={() => navigate(m.path)}
          >
            <div style={styles.moduleTop}>
              <span style={styles.icon}>{m.icon}</span>
              <h3 style={styles.moduleTitle}>{m.title}</h3>
            </div>
            <p style={styles.moduleDesc}>{m.desc}</p>
            <div style={styles.open}>Open →</div>
          </div>
        ))}
      </div>

      {/* LOWER GRID (THIS FIXES THE “BABY DASHBOARD” FEEL) */}
      <div style={styles.lowerGrid}>

        {/* ACTIVITY FEED */}
        <div style={styles.card}>
          <h2 style={styles.sectionTitle}>Recent Activity</h2>

          {activity.map((a, i) => (
            <div key={i} style={styles.activityItem}>
              <div style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                background: getDot(a.type)
              }} />

              <div style={{ flex: 1 }}>
                <div style={styles.activityText}>{a.text}</div>
                <div style={styles.activityTime}>{a.time}</div>
              </div>
            </div>
          ))}
        </div>

        {/* ALERT PANEL */}
        <div style={styles.card}>
          <h2 style={styles.sectionTitle}>Risk Overview</h2>

          {alerts.map((a, i) => (
            <div key={i} style={styles.alertRow}>
              <span style={styles.alertLabel}>{a.label}</span>
              <span style={styles.alertValue}>{a.value}</span>
            </div>
          ))}

          <div style={styles.noteBox}>
            ⚡ System analyzing compliance trends in real time
          </div>
        </div>

      </div>

    </AuditorLayout>
  );
}

const styles = {

  header: {
    marginBottom: "25px"
  },

  title: {
    fontSize: "34px",
    margin: 0,
    color: "#0F172A"
  },

  subtitle: {
    marginTop: "6px",
    color: "#64748B"
  },

  stats: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
    gap: "18px",
    marginBottom: "20px"
  },

  moduleGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
    gap: "18px",
    marginBottom: "20px"
  },

  moduleCard: {
    background: "white",
    borderRadius: "18px",
    padding: "18px",
    cursor: "pointer",
    border: "1px solid rgba(15,23,42,0.06)",
    boxShadow: "0 10px 25px rgba(0,0,0,0.06)",
    transition: "all 0.25s ease"
  },

  moduleTop: {
    display: "flex",
    gap: "10px",
    alignItems: "center"
  },

  icon: {
    fontSize: "20px"
  },

  moduleTitle: {
    margin: 0,
    fontSize: "16px"
  },

  moduleDesc: {
    marginTop: "10px",
    fontSize: "13px",
    color: "#64748B"
  },

  open: {
    marginTop: "10px",
    fontSize: "12px",
    fontWeight: "600",
    color: "#2563EB"
  },

  lowerGrid: {
    display: "grid",
    gridTemplateColumns: "2fr 1fr",
    gap: "18px",
    marginTop: "10px"
  },

  card: {
    background: "white",
    borderRadius: "18px",
    padding: "20px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.06)"
  },

  sectionTitle: {
    marginBottom: "15px",
    color: "#0F172A"
  },

  activityItem: {
    display: "flex",
    gap: "12px",
    padding: "12px 0",
    borderBottom: "1px solid #F1F5F9"
  },

  activityText: {
    fontSize: "14px",
    fontWeight: "500"
  },

  activityTime: {
    fontSize: "12px",
    color: "#94A3B8"
  },

  alertRow: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 0",
    borderBottom: "1px solid #F1F5F9"
  },

  alertLabel: {
    fontSize: "14px"
  },

  alertValue: {
    fontWeight: "700",
    color: "#0F172A"
  },

  noteBox: {
    marginTop: "15px",
    padding: "12px",
    background: "#F1F5F9",
    borderRadius: "12px",
    fontSize: "12px",
    color: "#334155"
  }
};

export default AuditorDashboard;