import { useState } from "react";
import AuditorLayout from "../../layouts/AuditorLayout";

function Actions() {
  const [actions] = useState([
    {
      id: 1,
      farm: "FARM-102",
      issue: "Pesticide overuse detected during field inspection",
      status: "Open",
      severity: "High",
      owner: "Field Audit Team",
      due: "2026-05-18"
    },
    {
      id: 2,
      farm: "FARM-087",
      issue: "Missing compliance documentation for export batch",
      status: "In Progress",
      severity: "Medium",
      owner: "Documentation Unit",
      due: "2026-05-20"
    },
    {
      id: 3,
      farm: "FARM-055",
      issue: "Labor safety violation reported in harvesting phase",
      status: "Resolved",
      severity: "High",
      owner: "Safety Compliance Unit",
      due: "2026-06-10"
    }
  ]);

  const getStatusStyle = (status) => {
    switch (status) {
      case "Resolved":
        return styles.statusResolved;
      case "In Progress":
        return styles.statusProgress;
      default:
        return styles.statusOpen;
    }
  };

  const getSeverityStyle = (severity) => {
    if (severity === "High") return styles.severityHigh;
    if (severity === "Medium") return styles.severityMedium;
    return styles.severityLow;
  };

  return (
    <AuditorLayout>

      {/* HERO */}
      <div style={styles.hero}>
        <h1 style={styles.title}>⚠️ Corrective Actions Center</h1>

        <p style={styles.subtitle}>
          This module tracks all compliance violations detected during audits.
          Every action here represents a real enforcement decision that must be
          resolved before certification approval can proceed.
        </p>

        <div style={styles.notice}>
          🚨 Unresolved actions may block certification approval and farmer eligibility.
        </div>
      </div>

      {/* KPI STRIP */}
      <div style={styles.kpiGrid}>
        <div style={styles.kpi}>
          <h2>3</h2>
          <p>Total Actions</p>
        </div>

        <div style={styles.kpi}>
          <h2>1</h2>
          <p>Open Issues</p>
        </div>

        <div style={styles.kpi}>
          <h2>1</h2>
          <p>In Progress</p>
        </div>

        <div style={styles.kpi}>
          <h2>1</h2>
          <p>Resolved</p>
        </div>
      </div>

      {/* GRID */}
      <div style={styles.grid}>
        {actions.map((a) => (
          <div
            key={a.id}
            style={styles.card}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-6px)";
              e.currentTarget.style.boxShadow =
                "0 18px 45px rgba(0,0,0,0.12)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 10px 25px rgba(0,0,0,0.06)";
            }}
          >

            {/* TOP */}
            <div style={styles.top}>
              <h3 style={styles.farm}>{a.farm}</h3>

              <span style={{
                ...styles.badge,
                ...getStatusStyle(a.status)
              }}>
                {a.status}
              </span>
            </div>

            {/* ISSUE */}
            <p style={styles.issue}>{a.issue}</p>

            {/* META */}
            <div style={styles.meta}>
              <span style={{
                ...styles.severity,
                ...getSeverityStyle(a.severity)
              }}>
                Severity: {a.severity}
              </span>

              <span style={styles.owner}>
                👤 {a.owner}
              </span>

              <span style={styles.due}>
                📅 Due: {a.due}
              </span>
            </div>

            {/* FOOTER */}
            <div style={styles.footerHint}>
              Open action → update status → attach evidence
            </div>

          </div>
        ))}
      </div>

    </AuditorLayout>
  );
}

const styles = {
  hero: {
    marginBottom: "25px"
  },

  title: {
    fontSize: "32px",
    margin: 0,
    color: "#0F172A"
  },

  subtitle: {
    marginTop: "8px",
    color: "#475569",
    maxWidth: "750px",
    lineHeight: "1.6"
  },

  notice: {
    marginTop: "12px",
    padding: "12px 15px",
    background: "#FEF2F2",
    border: "1px solid #FCA5A5",
    borderRadius: "12px",
    color: "#991B1B",
    fontSize: "14px",
    fontWeight: "500"
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
    textAlign: "center",
    boxShadow: "0 6px 18px rgba(0,0,0,0.06)"
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
    gap: "18px"
  },

  card: {
    background: "#fff",
    borderRadius: "18px",
    padding: "18px",
    border: "1px solid rgba(15,23,42,0.06)",
    boxShadow: "0 10px 25px rgba(0,0,0,0.06)",
    transition: "0.25s ease",
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

  issue: {
    fontSize: "14px",
    color: "#334155",
    marginBottom: "12px",
    lineHeight: "1.5"
  },

  meta: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
    fontSize: "13px",
    color: "#475569"
  },

  badge: {
    padding: "5px 10px",
    borderRadius: "999px",
    fontSize: "12px",
    fontWeight: "600"
  },

  severity: {
    padding: "4px 10px",
    borderRadius: "999px",
    fontSize: "12px",
    fontWeight: "600",
    display: "inline-block",
    width: "fit-content"
  },

  owner: {
    fontSize: "12px"
  },

  due: {
    fontSize: "12px",
    color: "#64748B"
  },

  footerHint: {
    marginTop: "12px",
    fontSize: "12px",
    color: "#94A3B8"
  },

  statusOpen: {
    background: "#FEF3C7",
    color: "#CA8A04"
  },

  statusProgress: {
    background: "#DBEAFE",
    color: "#2563EB"
  },

  statusResolved: {
    background: "#DCFCE7",
    color: "#16A34A"
  },

  severityHigh: {
    background: "#FEE2E2",
    color: "#DC2626"
  },

  severityMedium: {
    background: "#FEF9C3",
    color: "#CA8A04"
  },

  severityLow: {
    background: "#DCFCE7",
    color: "#16A34A"
  }
};

export default Actions;