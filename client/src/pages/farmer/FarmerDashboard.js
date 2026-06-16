import { useState } from "react";
import FarmerLayout from "../../layouts/FarmerLayout";

function FarmerDashboard() {

  const [loading, setLoading] = useState(false);

  const kpis = [
    { title: "My Farms", value: 3, hint: "Active registered farms" },
    { title: "Harvest Records", value: 15, hint: "Logged production cycles" },
    { title: "Compliance Score", value: "82%", hint: "ARS 1000 readiness level" },
    { title: "Recommendations", value: 5, hint: "Pending improvement actions" }
  ];

  const apiCall = async (url, options = {}) => {
    const res = await fetch(`http://localhost:5000${url}`, {
      headers: { "Content-Type": "application/json" },
      ...options
    });

    if (!res.ok) throw new Error("Request failed");
    return res.json();
  };

  const handleCreateFarm = async () => {
    try {
      setLoading(true);

      await apiCall("/api/farms", {
        method: "POST",
        body: JSON.stringify({
          name: "New Farm",
          createdAt: new Date().toISOString()
        })
      });

      console.log("Farm created");
    } catch (err) {
      console.error("Create farm failed", err);
    } finally {
      setLoading(false);
    }
  };

  const handleAddHarvest = async () => {
    try {
      setLoading(true);

      await apiCall("/api/harvests", {
        method: "POST",
        body: JSON.stringify({
          farmId: "FARM-101",
          quantity: 0,
          createdAt: new Date().toISOString()
        })
      });

      console.log("Harvest added");
    } catch (err) {
      console.error("Harvest failed", err);
    } finally {
      setLoading(false);
    }
  };

  const handleViewCompliance = () => {
    window.location.href = "/farmer/compliance";
  };

  const handleDownloadReport = async () => {
    try {
      setLoading(true);

      const res = await fetch("http://localhost:5000/api/reports/farmer");

      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = "farmer-report.pdf";
      a.click();

      window.URL.revokeObjectURL(url);

    } catch (err) {
      console.error("Download failed", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <FarmerLayout>

      {/* HERO */}
      <div style={styles.hero}>
        <h1 style={styles.title}>🌿 Farmer Command Center</h1>

        <p style={styles.subtitle}>
          Manage your farms, track harvests, monitor compliance,
          and receive actionable recommendations under ARS 1000 standards.
        </p>

        {loading && (
          <div style={styles.loadingBar}>
            Processing request...
          </div>
        )}
      </div>

      {/* KPI */}
      <div style={styles.kpiGrid}>
        {kpis.map((k, i) => (
          <div key={i} style={styles.kpiCard}>
            <h2>{k.value}</h2>
            <p>{k.title}</p>
            <span style={styles.hint}>{k.hint}</span>
          </div>
        ))}
      </div>

      {/* ACTIONS + INSIGHTS */}
      <div style={styles.grid}>

        {/* ACTIONS */}
        <div style={styles.card}>
          <h3>⚡ Quick Actions</h3>

          <button style={styles.btn} onClick={handleCreateFarm}>
            ➕ Register Farm
          </button>

          <button style={styles.btn} onClick={handleAddHarvest}>
            🌾 Add Harvest Record
          </button>

          <button style={styles.btn} onClick={handleViewCompliance}>
            📊 View Compliance
          </button>

          <button style={styles.btnSecondary} onClick={handleDownloadReport}>
            📥 Download Report
          </button>
        </div>

        {/* INSIGHTS */}
        <div style={styles.card}>
          <h3>📊 System Insight</h3>

          <p style={styles.text}>
            Your farms are currently performing above regional average.
            Main improvement focus: pesticide documentation and traceability updates.
          </p>

          <div style={styles.progressWrap}>
            <div style={styles.progressLabel}>Compliance Level</div>

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

  loadingBar: {
    marginTop: "10px",
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
    textAlign: "center",
    boxShadow: "0 10px 25px rgba(0,0,0,0.06)"
  },

  hint: {
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
    boxShadow: "0 10px 25px rgba(0,0,0,0.06)"
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
    fontWeight: "600",
    cursor: "pointer"
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