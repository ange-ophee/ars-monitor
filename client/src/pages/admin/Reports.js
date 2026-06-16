import { useState } from "react";

function Reports() {
  const [reports] = useState([
    {
      id: 1,
      title: "Environmental Compliance Audit",
      description: "Assessment of pesticide usage and soil protection across Farm F-102.",
      status: "Completed",
      severity: "Low",
      date: "2026-06-10"
    },
    {
      id: 2,
      title: "Labor Standards Evaluation",
      description: "Fair labor practices and worker safety compliance verification.",
      status: "Pending Review",
      severity: "Medium",
      date: "2026-06-12"
    },
    {
      id: 3,
      title: "Traceability Verification",
      description: "Cocoa batch ARS-1000 supply chain tracking audit.",
      status: "Flagged",
      severity: "High",
      date: "2026-06-13"
    },
    {
      id: 4,
      title: "Soil Quality Assessment",
      description: "Soil fertility and chemical balance analysis for Farm F-211.",
      status: "Completed",
      severity: "Low",
      date: "2026-06-01"
    },
    {
      id: 5,
      title: "Water Usage Audit",
      description: "Evaluation of irrigation efficiency and water conservation practices.",
      status: "Pending Review",
      severity: "Medium",
      date: "2026-06-03"
    },
    {
      id: 6,
      title: "Deforestation Risk Report",
      description: "Satellite monitoring of forest encroachment near plantations.",
      status: "Flagged",
      severity: "High",
      date: "2026-06-05"
    },
    {
      id: 7,
      title: "Fertilizer Usage Review",
      description: "Chemical fertilizer application compliance tracking.",
      status: "Completed",
      severity: "Low",
      date: "2026-06-08"
    },
    {
      id: 8,
      title: "Harvest Quality Inspection",
      description: "Cocoa bean grading and export readiness evaluation.",
      status: "Completed",
      severity: "Low",
      date: "2026-06-14"
    }
  ]);

  const getStatusStyle = (status) => {
    switch (status.toLowerCase()) {
      case "completed": return styles.success;
      case "pending review": return styles.pending;
      case "flagged": return styles.danger;
      default: return styles.default;
    }
  };

  const getSeverityStyle = (severity) => {
    switch (severity.toLowerCase()) {
      case "low": return styles.low;
      case "medium": return styles.medium;
      case "high": return styles.high;
      default: return styles.default;
    }
  };

  return (
    <div style={styles.page}>

      {/* HEADER */}
      <div style={styles.header}>
        <h1 style={styles.title}>📊 Reports</h1>
        <p style={styles.subtitle}>
          ARS 1000 monitoring, compliance audits, and sustainability tracking
        </p>
      </div>

      {/* GRID */}
      <div style={styles.grid}>
        {reports.map((r, i) => (
          <div
            key={r.id}
            style={{
              ...styles.card,
              animationDelay: `${i * 60}ms`
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform =
                "translateY(-8px) scale(1.02)";
              e.currentTarget.style.boxShadow =
                "0 18px 40px rgba(0,0,0,0.12)";
              e.currentTarget.style.borderColor =
                "rgba(15, 23, 42, 0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0) scale(1)";
              e.currentTarget.style.boxShadow =
                "0 8px 20px rgba(0,0,0,0.06)";
              e.currentTarget.style.borderColor = "#E2E8F0";
            }}
          >

            <h3 style={styles.cardTitle}>{r.title}</h3>

            <p style={styles.description}>{r.description}</p>

            <div style={styles.tagsRow}>
              <span style={{ ...styles.tag, ...getStatusStyle(r.status) }}>
                {r.status}
              </span>

              <span style={{ ...styles.tag, ...getSeverityStyle(r.severity) }}>
                {r.severity}
              </span>

              <span style={styles.date}>{r.date}</span>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {

  page: {
    padding: "30px",
    minHeight: "100vh",
    background: "#F6F8FC",
    color: "#0F172A"
  },

  header: {
    marginBottom: "25px"
  },

  title: {
    margin: 0,
    fontSize: "32px",
    fontWeight: "700"
  },

  subtitle: {
    marginTop: "8px",
    color: "#64748B",
    maxWidth: "650px"
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
    gap: "18px"
  },

  card: {
    background: "white",
    border: "1px solid #E2E8F0",
    borderRadius: "16px",
    padding: "18px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.06)",
    transition: "all 0.25s ease",
    cursor: "pointer",
    animation: "fadeUp 0.4s ease forwards",
    opacity: 0
  },

  cardTitle: {
    margin: 0,
    fontSize: "16px",
    fontWeight: "700"
  },

  description: {
    marginTop: "10px",
    fontSize: "14px",
    color: "#475569",
    lineHeight: "1.6"
  },

  tagsRow: {
    marginTop: "14px",
    display: "flex",
    gap: "10px",
    alignItems: "center",
    flexWrap: "wrap"
  },

  tag: {
    padding: "6px 10px",
    borderRadius: "999px",
    fontSize: "12px",
    fontWeight: "600"
  },

  date: {
    marginLeft: "auto",
    fontSize: "12px",
    color: "#64748B"
  },

  /* STATUS */
  success: {
    background: "rgba(34,197,94,0.12)",
    color: "#16A34A"
  },

  pending: {
    background: "rgba(245,158,11,0.12)",
    color: "#D97706"
  },

  danger: {
    background: "rgba(239,68,68,0.12)",
    color: "#DC2626"
  },

  default: {
    background: "rgba(148,163,184,0.12)",
    color: "#475569"
  },

  /* SEVERITY */
  low: {
    background: "rgba(59,130,246,0.12)",
    color: "#2563EB"
  },

  medium: {
    background: "rgba(245,158,11,0.12)",
    color: "#D97706"
  },

  high: {
    background: "rgba(220,38,38,0.12)",
    color: "#DC2626"
  }
};

/* animation */
const styleSheet = document.styleSheets[0];

styleSheet.insertRule(`
@keyframes fadeUp {
  from { transform: translateY(10px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}
`, styleSheet.cssRules.length);

export default Reports;