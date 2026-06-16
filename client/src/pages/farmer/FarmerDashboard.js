import FarmerLayout from "../../layouts/FarmerLayout";

function FarmerDashboard() {

  const kpis = [
    { title: "My Farms", value: 3, hint: "Active registered farms" },
    { title: "Harvests", value: 15, hint: "Recorded production cycles" },
    { title: "Compliance Score", value: "82%", hint: "ARS 1000 readiness level" },
    { title: "Recommendations", value: 5, hint: "Actions to improve yield & compliance" }
  ];

  const alerts = [
    {
      type: "warning",
      message: "One of your farms requires updated pesticide records."
    },
    {
      type: "info",
      message: "Harvest season optimization plan is now available."
    },
    {
      type: "success",
      message: "Your compliance score improved by +6% this month."
    }
  ];

  return (
    <FarmerLayout>

      {/* HERO */}
      <div style={styles.hero}>
        <h1 style={styles.title}>🌿 Farmer Dashboard</h1>

        <p style={styles.subtitle}>
          This is your personal control center for managing farms, tracking harvests,
          improving compliance, and receiving tailored recommendations under ARS 1000 standards.
        </p>

        <div style={styles.statusLine}>
          🟢 Account Active • 🌱 Farms Verified • 📊 Compliance Tracking Enabled
        </div>
      </div>

      {/* KPI STRIP */}
      <div style={styles.kpiGrid}>
        {kpis.map((k, i) => (
          <div key={i} style={styles.kpiCard}>
            <h2 style={styles.kpiValue}>{k.value}</h2>
            <p style={styles.kpiTitle}>{k.title}</p>
            <span style={styles.kpiHint}>{k.hint}</span>
          </div>
        ))}
      </div>

      {/* MAIN CONTENT GRID */}
      <div style={styles.grid}>

        {/* QUICK ACTIONS */}
        <div style={styles.card}>
          <h3>⚡ Quick Actions</h3>

          <button style={styles.btn}>➕ Register New Farm</button>
          <button style={styles.btn}>🌾 Add Harvest Record</button>
          <button style={styles.btn}>📊 View Compliance Report</button>
          <button style={styles.btnSecondary}>📥 Download Farm Report</button>
        </div>

        {/* ALERT CENTER */}
        <div style={styles.card}>
          <h3>🔔 Alerts & Insights</h3>

          {alerts.map((a, i) => (
            <div key={i} style={{
              ...styles.alert,
              background:
                a.type === "warning"
                  ? "#FEF3C7"
                  : a.type === "success"
                  ? "#DCFCE7"
                  : "#DBEAFE"
            }}>
              {a.message}
            </div>
          ))}
        </div>

        {/* PERFORMANCE INSIGHT */}
        <div style={styles.card}>
          <h3>📈 Farm Performance Insight</h3>

          <p style={styles.text}>
            Your farms are performing above regional average.
            Compliance is strong, but pesticide documentation
            remains the main improvement area.
          </p>

          <div style={styles.progressWrap}>
            <div style={styles.progressLabel}>Overall Compliance</div>

            <div style={styles.progressBar}>
              <div style={styles.progressFill} />
            </div>

            <span style={styles.percent}>82% ARS 1000 Ready</span>
          </div>
        </div>

      </div>

    </FarmerLayout>
  );
}

const styles = {

  hero: {
    marginBottom: "25px"
  },

  title: {
    fontSize: "34px",
    margin: 0,
    color: "#0F172A"
  },

  subtitle: {
    marginTop: "10px",
    color: "#64748B",
    maxWidth: "800px",
    lineHeight: "1.7"
  },

  statusLine: {
    marginTop: "12px",
    fontSize: "13px",
    color: "#0F766E",
    fontWeight: "600"
  },

  kpiGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
    gap: "15px",
    marginBottom: "25px"
  },

  kpiCard: {
    background: "#fff",
    padding: "18px",
    borderRadius: "16px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.06)",
    textAlign: "center"
  },

  kpiValue: {
    margin: 0,
    fontSize: "24px",
    fontWeight: "700",
    color: "#0F172A"
  },

  kpiTitle: {
    marginTop: "6px",
    fontWeight: "600"
  },

  kpiHint: {
    fontSize: "12px",
    color: "#64748B"
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
    gap: "18px"
  },

  card: {
    background: "#fff",
    padding: "18px",
    borderRadius: "18px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.06)",
    border: "1px solid rgba(15,23,42,0.06)"
  },

  btn: {
    width: "100%",
    padding: "10px",
    marginTop: "10px",
    borderRadius: "10px",
    border: "none",
    background: "#0F766E",
    color: "white",
    fontWeight: "600",
    cursor: "pointer"
  },

  btnSecondary: {
    width: "100%",
    padding: "10px",
    marginTop: "10px",
    borderRadius: "10px",
    border: "1px solid #CBD5E1",
    background: "white",
    color: "#0F172A",
    fontWeight: "600",
    cursor: "pointer"
  },

  alert: {
    padding: "10px",
    borderRadius: "10px",
    marginBottom: "10px",
    fontSize: "13px",
    color: "#0F172A"
  },

  text: {
    fontSize: "14px",
    color: "#475569",
    lineHeight: "1.6"
  },

  progressWrap: {
    marginTop: "15px"
  },

  progressLabel: {
    fontSize: "13px",
    fontWeight: "600",
    marginBottom: "6px"
  },

  progressBar: {
    height: "8px",
    background: "#E2E8F0",
    borderRadius: "999px",
    overflow: "hidden"
  },

  progressFill: {
    height: "100%",
    width: "82%",
    background: "#0F766E",
    borderRadius: "999px"
  },

  percent: {
    fontSize: "12px",
    marginTop: "6px",
    display: "block",
    color: "#0F766E",
    fontWeight: "600"
  }
};

export default FarmerDashboard;