import { useState } from "react";
import AuditorLayout from "../../layouts/AuditorLayout";

function Assignments() {
  const [assignments] = useState([
    {
      id: 1,
      farm: "FARM-102",
      region: "South Zone",
      status: "Pending",
      priority: "High",
      due: "2026-06-18",
      note: "New compliance audit required after pesticide alert."
    },
    {
      id: 2,
      farm: "FARM-087",
      region: "North Zone",
      status: "In Progress",
      priority: "Medium",
      due: "2026-06-20",
      note: "Follow-up evaluation after last inspection findings."
    },
    {
      id: 3,
      farm: "FARM-055",
      region: "East Zone",
      status: "Completed",
      priority: "Low",
      due: "2026-06-10",
      note: "Full compliance verified and approved."
    }
  ]);

  const getStatusStyle = (status) => {
    switch (status) {
      case "Completed":
        return styles.statusCompleted;
      case "In Progress":
        return styles.statusProgress;
      default:
        return styles.statusPending;
    }
  };

  const getPriorityStyle = (priority) => {
    switch (priority) {
      case "High":
        return styles.priorityHigh;
      case "Medium":
        return styles.priorityMedium;
      default:
        return styles.priorityLow;
    }
  };

  return (
    <AuditorLayout>

      {/* HERO */}
      <div style={styles.hero}>
        <h1 style={styles.title}>📋 Audit Assignments</h1>

        <p style={styles.subtitle}>
          These assignments represent real field audit operations.
          Each task contributes directly to ARS 1000 certification decisions,
          sustainability compliance, and farmer eligibility validation.
        </p>

        <div style={styles.notice}>
          ⚠️ Each assignment must be completed with evidence before status updates are accepted.
        </div>
      </div>

      {/* CONTEXT STRIP */}
      <div style={styles.contextRow}>
        <div style={styles.contextCard}>
          <h3>3</h3>
          <p>Total Assignments</p>
        </div>

        <div style={styles.contextCard}>
          <h3>1</h3>
          <p>Requires Immediate Attention</p>
        </div>

        <div style={styles.contextCard}>
          <h3>2</h3>
          <p>Under Active Review</p>
        </div>
      </div>

      {/* GRID */}
      <div style={styles.grid}>
        {assignments.map((a) => (
          <div
            key={a.id}
            style={styles.card}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-6px)";
              e.currentTarget.style.boxShadow =
                "0 18px 45px rgba(0,0,0,0.12)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0px)";
              e.currentTarget.style.boxShadow =
                "0 10px 25px rgba(0,0,0,0.06)";
            }}
          >

            <div style={styles.top}>
              <h3 style={styles.farm}>{a.farm}</h3>

              <span style={{
                ...styles.badge,
                ...getStatusStyle(a.status)
              }}>
                {a.status}
              </span>
            </div>

            <div style={styles.meta}>
              <div><b>Region:</b> {a.region}</div>
              <div><b>Priority:</b> {a.priority}
              <span style={{
                color: getPriorityStyle(a.priority),
                fontWeight: "600"
                }}>
                {a.priority} Priority
                </span>
              </div>
              <div><b>Due Date:</b> {a.due}</div>
            </div>

            <div style={styles.note}>
              💡 {a.note}
            </div>

            <div style={styles.footerHint}>
              Click to open full audit workflow →
            </div>

          </div>
        ))}
      </div>

    </AuditorLayout>
  );
}

const styles = {

  hero: {
    marginBottom: "25px",
    padding: "20px 0"
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
    marginTop: "15px",
    padding: "12px 15px",
    background: "#FFF7ED",
    border: "1px solid #FED7AA",
    borderRadius: "12px",
    color: "#9A3412",
    fontSize: "14px",
    fontWeight: "500"
  },

  contextRow: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
    gap: "12px",
    marginBottom: "20px"
  },

  contextCard: {
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
    marginBottom: "12px"
  },

  farm: {
    margin: 0,
    fontSize: "16px",
    fontWeight: "700",
    color: "#0F172A"
  },

  meta: {
    color: "#475569",
    fontSize: "14px",
    display: "flex",
    flexDirection: "column",
    gap: "6px"
  },

  note: {
    marginTop: "12px",
    padding: "10px",
    background: "#F8FAFC",
    borderRadius: "10px",
    fontSize: "13px",
    color: "#334155"
  },

  footerHint: {
    marginTop: "12px",
    fontSize: "12px",
    color: "#64748B"
  },

  badge: {
    padding: "5px 10px",
    borderRadius: "999px",
    fontSize: "12px",
    fontWeight: "600"
  },

  statusCompleted: {
    background: "#DCFCE7",
    color: "#16A34A"
  },

  statusProgress: {
    background: "#DBEAFE",
    color: "#2563EB"
  },

  statusPending: {
    background: "#FEF3C7",
    color: "#CA8A04"
  }
};

export default Assignments;