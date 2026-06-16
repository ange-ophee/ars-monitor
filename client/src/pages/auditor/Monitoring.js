import { useState } from "react";
import AuditorLayout from "../../layouts/AuditorLayout";

function Monitoring() {
  const [data] = useState([
    {
      farm: "FARM-102",
      zone: "South Zone",
      activity: "Soil & moisture sensors actively collecting field data",
      status: "Active",
      risk: "Low",
      lastUpdate: "2 min ago",
      progress: 72
    },
    {
      farm: "FARM-087",
      zone: "North Zone",
      activity: "Harvest compliance tracking in progress",
      status: "Active",
      risk: "Medium",
      lastUpdate: "10 min ago",
      progress: 45
    },
    {
      farm: "FARM-055",
      zone: "East Zone",
      activity: "Full inspection cycle completed and archived",
      status: "Completed",
      risk: "Low",
      lastUpdate: "1 hr ago",
      progress: 100
    }
  ]);

  const getStatus = (status) => {
    if (status === "Active") return styles.statusActive;
    return styles.statusDone;
  };

  const getRisk = (risk) => {
    if (risk === "High") return styles.riskHigh;
    if (risk === "Medium") return styles.riskMedium;
    return styles.riskLow;
  };

  return (
    <AuditorLayout>

      {/* HERO */}
      <div style={styles.hero}>
        <div>
          <h1 style={styles.title}>👁️ Monitoring Control Center</h1>

          <p style={styles.subtitle}>
            Live operational intelligence tracking field execution, compliance signals,
            and sustainability verification across all registered farms.
          </p>

          <div style={styles.systemLine}>
            🟢 Live System • 🔄 Real-time Sync • 📡 Field Devices Connected
          </div>
        </div>

        <div style={styles.alertBox}>
          <h3 style={{ margin: 0 }}>System Health</h3>
          <p style={{ marginTop: "8px", color: "#94A3B8" }}>98% Stable</p>
        </div>
      </div>

      {/* KPI STRIP */}
      <div style={styles.kpiGrid}>
        <div style={styles.kpi}>
          <h2>3</h2>
          <p>Active Monitoring</p>
        </div>
        <div style={styles.kpi}>
          <h2>1</h2>
          <p>Completed Today</p>
        </div>
        <div style={styles.kpi}>
          <h2>2</h2>
          <p>Risk Signals</p>
        </div>
        <div style={styles.kpi}>
          <h2>12</h2>
          <p>Live Updates</p>
        </div>
      </div>

      {/* GRID */}
      <div style={styles.grid}>
        {data.map((d, i) => (
          <div
            key={i}
            style={styles.card}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-10px)";
              e.currentTarget.style.boxShadow = "0 25px 60px rgba(0,0,0,0.12)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.06)";
            }}
          >

            <div style={styles.top}>
              <div>
                <h3 style={styles.farm}>{d.farm}</h3>
                <p style={styles.zone}>{d.zone}</p>
              </div>

              <span style={{ ...styles.status, ...getStatus(d.status) }}>
                {d.status}
              </span>
            </div>

            <p style={styles.activity}>{d.activity}</p>

            <div style={styles.metaRow}>
              <span style={{ ...styles.risk, ...getRisk(d.risk) }}>
                Risk: {d.risk}
              </span>

              <span style={styles.update}>⏱ {d.lastUpdate}</span>
            </div>

            {/* PROGRESS */}
            <div style={styles.bar}>
              <div
                style={{
                  ...styles.barFill,
                  width: `${d.progress}%`
                }}
              />
            </div>

            <div style={styles.footerHint}>
              Live monitoring data • Click for detailed inspection →
            </div>

          </div>
        ))}
      </div>

    </AuditorLayout>
  );
}

const styles = {

  hero: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: "25px",
    padding: "20px 0"
  },

  title: {
    margin: 0,
    fontSize: "32px",
    color: "#0F172A"
  },

  subtitle: {
    marginTop: "8px",
    color: "#475569",
    maxWidth: "700px",
    lineHeight: "1.6"
  },

  systemLine: {
    marginTop: "12px",
    fontSize: "13px",
    color: "#64748B"
  },

  alertBox: {
    background: "#0F172A",
    color: "white",
    padding: "18px",
    borderRadius: "16px",
    minWidth: "160px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
  },

  kpiGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
    gap: "12px",
    marginBottom: "20px"
  },

  kpi: {
    background: "#fff",
    padding: "14px",
    borderRadius: "14px",
    boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
    textAlign: "center",
    transition: "0.3s"
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
    gap: "18px"
  },

  card: {
    background: "#fff",
    borderRadius: "18px",
    padding: "18px",
    border: "1px solid rgba(15,23,42,0.06)",
    boxShadow: "0 10px 25px rgba(0,0,0,0.06)",
    transition: "0.3s ease",
    cursor: "pointer"
  },

  top: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "10px"
  },

  farm: {
    margin: 0,
    fontSize: "16px",
    fontWeight: "700",
    color: "#0F172A"
  },

  zone: {
    margin: "3px 0 0 0",
    fontSize: "12px",
    color: "#64748B"
  },

  activity: {
    fontSize: "14px",
    color: "#334155",
    marginBottom: "12px",
    lineHeight: "1.5"
  },

  metaRow: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "12px",
    marginBottom: "10px"
  },

  update: {
    color: "#64748B"
  },

  risk: {
    padding: "4px 10px",
    borderRadius: "999px",
    fontWeight: "600"
  },

  status: {
    padding: "5px 10px",
    borderRadius: "999px",
    fontSize: "12px",
    fontWeight: "600"
  },

  statusActive: {
    background: "#DBEAFE",
    color: "#2563EB"
  },

  statusDone: {
    background: "#DCFCE7",
    color: "#16A34A"
  },

  riskLow: {
    background: "#DCFCE7",
    color: "#16A34A"
  },

  riskMedium: {
    background: "#FEF3C7",
    color: "#CA8A04"
  },

  riskHigh: {
    background: "#FEE2E2",
    color: "#DC2626"
  },

  bar: {
    height: "6px",
    background: "#E2E8F0",
    borderRadius: "999px",
    overflow: "hidden"
  },

  barFill: {
    height: "100%",
    background: "#0F172A",
    borderRadius: "999px",
    transition: "0.4s ease"
  },

  footerHint: {
    marginTop: "12px",
    fontSize: "12px",
    color: "#64748B"
  }
};

export default Monitoring;