import CooperativeLayout from "../../layouts/CooperativeLayout";

function CooperativeDashboard() {
  return (
    <CooperativeLayout>

      {/* HERO */}
      <div style={styles.hero}>
        <div>
          <h1 style={styles.title}>
            🌱 Cooperative Management Center
          </h1>

          <p style={styles.subtitle}>
            Monitor farmer participation, cocoa traceability,
            quality performance, and sustainability compliance
            across the cooperative ecosystem.
          </p>
        </div>

        <div style={styles.healthCard}>
          <h3 style={{ margin: 0 }}>ARS 1000 Readiness</h3>
          <div style={styles.healthScore}>91%</div>
          <p style={styles.healthText}>
            Excellent Compliance
          </p>
        </div>
      </div>

      {/* KPI SECTION */}
      <div style={styles.kpiGrid}>

        <div style={styles.kpiCard}>
          <div style={styles.icon}>👨🏾‍🌾</div>
          <h2>12</h2>
          <p>Registered Farmers</p>
          <span style={styles.growth}>12 this month</span>
        </div>

        <div style={styles.kpiCard}>
          <div style={styles.icon}>🌳</div>
          <h2>4</h2>
          <p>Active Farms</p>
          <span style={styles.growth}>97% Active</span>
        </div>

        <div style={styles.kpiCard}>
          <div style={styles.icon}>📦</div>
          <h2>10</h2>
          <p>Traceability Records</p>
          <span style={styles.growth}>Updated Daily</span>
        </div>

        <div style={styles.kpiCard}>
          <div style={styles.icon}>⭐</div>
          <h2>89%</h2>
          <p>Quality Compliance</p>
          <span style={styles.growth}>+3% Improvement</span>
        </div>

      </div>

      {/* OPERATIONS */}
      <div style={styles.sectionTitle}>
        Cooperative Operations
      </div>

      <div style={styles.moduleGrid}>

        <div style={styles.moduleCard}>
          <h3>👨🏾‍🌾 Farmers</h3>

          <p>
            Manage farmer profiles, farm ownership,
            participation records, and certification eligibility.
          </p>

          <div style={styles.metric}>
            Active Farmers: <b>8</b>
          </div>
        </div>

        <div style={styles.moduleCard}>
          <h3>🔗 Traceability</h3>

          <p>
            Track cocoa movement from farm production
            to certification verification.
          </p>

          <div style={styles.metric}>
            Tracked Batches: <b>15</b>
          </div>
        </div>

        <div style={styles.moduleCard}>
          <h3>🧪 Quality Control</h3>

          <p>
            Monitor bean quality, moisture levels,
            grading results, and inspection outcomes.
          </p>

          <div style={styles.metric}>
            Quality Score: <b>89%</b>
          </div>
        </div>

        <div style={styles.moduleCard}>
          <h3>📈 Analytics</h3>

          <p>
            View performance trends, compliance indicators,
            and sustainability metrics.
          </p>

          <div style={styles.metric}>
            Reports Generated: <b>8</b>
          </div>
        </div>

      </div>

      {/* BOTTOM SECTION */}
      <div style={styles.bottomGrid}>

        <div style={styles.activityCard}>
          <h3>📋 Recent Cooperative Activities</h3>

          <ul style={styles.activityList}>
            <li>New farmer registration approved</li>
            <li>Quality inspection completed for Batch #241</li>
            <li>Traceability record updated</li>
            <li>ARS 1000 compliance review submitted</li>
            <li>Monthly sustainability report generated</li>
          </ul>
        </div>

        <div style={styles.activityCard}>
          <h3>🎯 Performance Overview</h3>

          <div style={styles.progressRow}>
            <span>Compliance</span>
            <span>91%</span>
          </div>

          <div style={styles.progress}>
            <div style={{ ...styles.fill, width: "91%" }} />
          </div>

          <div style={styles.progressRow}>
            <span>Traceability</span>
            <span>95%</span>
          </div>

          <div style={styles.progress}>
            <div style={{ ...styles.fill, width: "95%" }} />
          </div>

          <div style={styles.progressRow}>
            <span>Quality Control</span>
            <span>89%</span>
          </div>

          <div style={styles.progress}>
            <div style={{ ...styles.fill, width: "89%" }} />
          </div>
        </div>

      </div>

    </CooperativeLayout>
  );
}

const styles = {

  hero: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "30px",
    gap: "20px"
  },

  title: {
    fontSize: "34px",
    margin: 0,
    color: "#0F172A"
  },

  subtitle: {
    color: "#64748B",
    maxWidth: "700px",
    lineHeight: "1.7"
  },

  healthCard: {
    background: "#0F172A",
    color: "white",
    padding: "25px",
    borderRadius: "20px",
    minWidth: "220px",
    textAlign: "center"
  },

  healthScore: {
    fontSize: "42px",
    fontWeight: "700",
    marginTop: "10px"
  },

  healthText: {
    color: "#CBD5E1"
  },

  kpiGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
    gap: "20px",
    marginBottom: "30px"
  },

  kpiCard: {
    background: "#fff",
    padding: "20px",
    borderRadius: "20px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.06)"
  },

  icon: {
    fontSize: "30px"
  },

  growth: {
    color: "#16A34A",
    fontSize: "13px",
    fontWeight: "600"
  },

  sectionTitle: {
    fontSize: "22px",
    fontWeight: "700",
    marginBottom: "20px",
    color: "#0F172A"
  },

  moduleGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
    gap: "20px",
    marginBottom: "30px"
  },

  moduleCard: {
    background: "#fff",
    padding: "22px",
    borderRadius: "20px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.06)"
  },

  metric: {
    marginTop: "12px",
    color: "#2563EB"
  },

  bottomGrid: {
    display: "grid",
    gridTemplateColumns: "2fr 1fr",
    gap: "20px"
  },

  activityCard: {
    background: "#fff",
    padding: "22px",
    borderRadius: "20px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.06)"
  },

  activityList: {
    lineHeight: "2"
  },

  progressRow: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "15px",
    marginBottom: "5px"
  },

  progress: {
    height: "8px",
    background: "#E2E8F0",
    borderRadius: "999px",
    overflow: "hidden"
  },

  fill: {
    height: "100%",
    background: "#16A34A"
  }
};

export default CooperativeDashboard;