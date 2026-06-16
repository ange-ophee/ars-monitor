import { useState } from "react";
import AuditorLayout from "../../layouts/AuditorLayout";

function Evaluations() {
  const [evals] = useState([
    {
      farm: "FARM-102",
      score: 78,
      status: "Pass",
      note: "Good compliance level with minor improvements needed"
    },
    {
      farm: "FARM-087",
      score: 62,
      status: "Review",
      note: "Several gaps in documentation and traceability"
    },
    {
      farm: "FARM-055",
      score: 45,
      status: "Fail",
      note: "Critical non-compliance detected in labor standards"
    },
    {
      farm: "FARM-144",
      score: 88,
      status: "Pass",
      note: "Strong sustainability and environmental compliance"
    },
    {
      farm: "FARM-210",
      score: 53,
      status: "Review",
      note: "Partial compliance, corrective actions required"
    }
  ]);

  const getColor = (score) => {
    if (score >= 75) return "#16A34A";
    if (score >= 50) return "#CA8A04";
    return "#DC2626";
  };

  const getBadge = (status) => {
    if (status === "Pass") return styles.badgeSuccess;
    if (status === "Review") return styles.badgeWarning;
    return styles.badgeDanger;
  };

  return (
    <AuditorLayout>

      {/* HEADER */}
      <div style={styles.header}>
        <h1 style={styles.title}>📊 Evaluations Center</h1>

        <p style={styles.subtitle}>
          Each farm is scored based on ARS 1000 compliance standards including
          environmental practices, labor conditions, and traceability systems.
        </p>

        {/* EXPLANATION STRIP (VERY IMPORTANT FOR DEFENSE) */}
        <div style={styles.explainer}>
          <b>How to read this:</b>  
          Scores above 75 = compliant ✔️ • 50–74 = needs review ⚠️ • below 50 = non-compliant ❌  
          Each card represents a real audit decision point.
        </div>
      </div>

      {/* KPI STRIP */}
      <div style={styles.kpiRow}>
        <div style={styles.kpiCard}>
          <h3>5</h3>
          <p>Total Evaluations</p>
        </div>
        <div style={styles.kpiCard}>
          <h3>2</h3>
          <p>Pass</p>
        </div>
        <div style={styles.kpiCard}>
          <h3>2</h3>
          <p>Review</p>
        </div>
        <div style={styles.kpiCard}>
          <h3>1</h3>
          <p>Fail</p>
        </div>
      </div>

      {/* GRID */}
      <div style={styles.grid}>
        {evals.map((e, i) => (
          <div
            key={i}
            style={styles.card}
            onMouseEnter={(ev) => {
              ev.currentTarget.style.transform = "translateY(-10px)";
              ev.currentTarget.style.boxShadow =
                "0 25px 60px rgba(0,0,0,0.12)";
            }}
            onMouseLeave={(ev) => {
              ev.currentTarget.style.transform = "translateY(0)";
              ev.currentTarget.style.boxShadow =
                "0 10px 25px rgba(0,0,0,0.06)";
            }}
          >

            {/* TOP */}
            <div style={styles.topRow}>
              <h3 style={styles.farm}>{e.farm}</h3>

              <span style={{ ...styles.badge, ...getBadge(e.status) }}>
                {e.status}
              </span>
            </div>

            {/* SCORE */}
            <div style={styles.scoreBlock}>
              <div
                style={{
                  ...styles.scoreCircle,
                  borderColor: getColor(e.score),
                  color: getColor(e.score)
                }}
              >
                {e.score}%
              </div>
            </div>

            {/* NOTE */}
            <p style={styles.note}>{e.note}</p>

            {/* FOOTER */}
            <div style={styles.footer}>
              ARS 1000 Compliance Evaluation
            </div>

          </div>
        ))}
      </div>

    </AuditorLayout>
  );
}

const styles = {
  header: { marginBottom: "25px" },

  title: {
    margin: 0,
    fontSize: "32px",
    fontWeight: "700",
    color: "#0F172A"
  },

  subtitle: {
    marginTop: "6px",
    color: "#64748B",
    maxWidth: "700px",
    lineHeight: "1.6"
  },

  explainer: {
    marginTop: "14px",
    padding: "12px 14px",
    borderRadius: "12px",
    background: "#EFF6FF",
    border: "1px solid #BFDBFE",
    color: "#1E3A8A",
    fontSize: "13px",
    lineHeight: "1.5"
  },

  kpiRow: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))",
    gap: "12px",
    marginBottom: "20px"
  },

  kpiCard: {
    background: "#fff",
    padding: "14px",
    borderRadius: "14px",
    textAlign: "center",
    boxShadow: "0 6px 18px rgba(0,0,0,0.06)"
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
    gap: "18px"
  },

  card: {
    background: "#FFFFFF",
    borderRadius: "18px",
    padding: "20px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.06)",
    border: "1px solid rgba(15,23,42,0.06)",
    transition: "0.3s ease",
    cursor: "pointer"
  },

  topRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },

  farm: {
    margin: 0,
    fontSize: "16px",
    fontWeight: "700",
    color: "#0F172A"
  },

  badge: {
    fontSize: "12px",
    padding: "5px 10px",
    borderRadius: "999px",
    fontWeight: "600"
  },

  badgeSuccess: {
    background: "#DCFCE7",
    color: "#16A34A"
  },

  badgeWarning: {
    background: "#FEF9C3",
    color: "#CA8A04"
  },

  badgeDanger: {
    background: "#FEE2E2",
    color: "#DC2626"
  },

  scoreBlock: {
    display: "flex",
    justifyContent: "center",
    margin: "18px 0"
  },

  scoreCircle: {
    width: "90px",
    height: "90px",
    borderRadius: "50%",
    border: "5px solid",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "20px",
    fontWeight: "700",
    background: "#F8FAFC"
  },

  note: {
    fontSize: "14px",
    color: "#475569",
    lineHeight: "1.6",
    textAlign: "center"
  },

  footer: {
    marginTop: "15px",
    textAlign: "center",
    fontSize: "12px",
    color: "#94A3B8"
  }
};

export default Evaluations;