import { useState } from "react";
import CooperativeLayout from "../../layouts/CooperativeLayout";

function Traceability() {
  const [search, setSearch] = useState("");

  const batches = [
    {
      id: "BATCH-2026-001",
      farm: "FARM-102",
      harvestDate: "2026-05-20",
      location: "Cooperative Warehouse",
      percentage: 100,
      status: "Verified"
    },
    {
      id: "BATCH-2026-002",
      farm: "FARM-087",
      harvestDate: "2026-05-25",
      location: "Quality Control Center",
      percentage: 92,
      status: "In Review"
    },
    {
      id: "BATCH-2026-003",
      farm: "FARM-055",
      harvestDate: "2026-05-28",
      location: "Export Processing Facility",
      percentage: 98,
      status: "Verified"
    },
    {
      id: "BATCH-2026-004",
      farm: "FARM-144",
      harvestDate: "2026-06-01",
      location: "Transit Hub",
      percentage: 84,
      status: "Pending"
    }
  ];

  const filteredBatches = batches.filter(
    (b) =>
      b.id.toLowerCase().includes(search.toLowerCase()) ||
      b.farm.toLowerCase().includes(search.toLowerCase())
  );

  const getStatusStyle = (status) => {
    switch (status) {
      case "Verified":
        return styles.verified;
      case "In Review":
        return styles.review;
      default:
        return styles.pending;
    }
  };

  return (
    <CooperativeLayout>

      {/* HERO */}
      <div style={styles.hero}>
        <div>
          <h1 style={styles.title}>🌱 Traceability Command Center</h1>

          <p style={styles.subtitle}>
            End-to-end cocoa traceability system tracking every batch
            from farm harvest to export processing. This module ensures
            full ARS 1000 transparency compliance across the supply chain.
          </p>

          <div style={styles.tagLine}>
            🔗 Farm → Collection → Processing → Export → Market
          </div>
        </div>
      </div>

      {/* KPI STRIP */}
      <div style={styles.kpiGrid}>
        <div style={styles.kpi}>
          <h2>4</h2>
          <p>Total Batches</p>
        </div>

        <div style={styles.kpi}>
          <h2>98%</h2>
          <p>Traceability Coverage</p>
        </div>

        <div style={styles.kpi}>
          <h2>3</h2>
          <p>Verified Chain Links</p>
        </div>

        <div style={styles.kpi}>
          <h2>5</h2>
          <p>Pending Validation</p>
        </div>
      </div>

      {/* SEARCH */}
      <div style={styles.searchWrap}>
        <input
          placeholder="Search batch ID or farm..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={styles.search}
        />
      </div>

      {/* GRID */}
      <div style={styles.grid}>
        {filteredBatches.map((b) => (
          <div
            key={b.id}
            style={styles.card}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-6px)";
              e.currentTarget.style.boxShadow = "0 18px 40px rgba(0,0,0,0.12)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.06)";
            }}
          >

            <div style={styles.top}>
              <h3 style={styles.batchId}>{b.id}</h3>

              <span style={{
                ...styles.badge,
                ...getStatusStyle(b.status)
              }}>
                {b.status}
              </span>
            </div>

            <div style={styles.meta}>
              <p><b>Origin Farm:</b> {b.farm}</p>
              <p><b>Harvest Date:</b> {b.harvestDate}</p>
              <p><b>Current Node:</b> {b.location}</p>
            </div>

            <div style={styles.progressWrap}>
              <div style={styles.progressLabel}>
                Traceability Integrity
              </div>

              <div style={styles.progressBar}>
                <div
                  style={{
                    ...styles.progressFill,
                    width: `${b.percentage}%`
                  }}
                />
              </div>

              <span style={styles.percent}>{b.percentage}% verified</span>
            </div>

            <div style={styles.footer}>
              View full supply chain record →
            </div>

          </div>
        ))}
      </div>

      {/* EDUCATION PANEL */}
      <div style={styles.infoBox}>
        <h3>Why Traceability Matters (ARS 1000)</h3>

        <p>
          Traceability ensures every cocoa batch can be verified from origin to export.
          This protects farmers, strengthens certification credibility, and guarantees
          that sustainable cocoa practices are enforced across the entire supply chain.
        </p>
      </div>

    </CooperativeLayout>
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
    maxWidth: "850px",
    lineHeight: "1.7"
  },

  tagLine: {
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

  kpi: {
    background: "#fff",
    padding: "18px",
    borderRadius: "16px",
    textAlign: "center",
    boxShadow: "0 10px 25px rgba(0,0,0,0.06)"
  },

  searchWrap: {
    marginBottom: "25px"
  },

  search: {
    width: "100%",
    padding: "14px",
    borderRadius: "12px",
    border: "1px solid #E2E8F0",
    outline: "none"
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
    gap: "20px"
  },

  card: {
    background: "#fff",
    padding: "18px",
    borderRadius: "18px",
    border: "1px solid rgba(15,23,42,0.06)",
    boxShadow: "0 10px 25px rgba(0,0,0,0.06)",
    transition: "0.3s ease",
    cursor: "pointer"
  },

  top: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "12px"
  },

  batchId: {
    margin: 0,
    fontSize: "15px",
    fontWeight: "700"
  },

  meta: {
    fontSize: "14px",
    color: "#475569",
    lineHeight: "1.7"
  },

  progressWrap: {
    marginTop: "14px"
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
    background: "#0F766E",
    borderRadius: "999px"
  },

  percent: {
    fontSize: "12px",
    marginTop: "6px",
    display: "block",
    color: "#0F766E",
    fontWeight: "600"
  },

  footer: {
    marginTop: "14px",
    fontSize: "12px",
    color: "#64748B"
  },

  badge: {
    padding: "5px 10px",
    borderRadius: "999px",
    fontSize: "12px",
    fontWeight: "600"
  },

  verified: {
    background: "#DCFCE7",
    color: "#16A34A"
  },

  review: {
    background: "#DBEAFE",
    color: "#2563EB"
  },

  pending: {
    background: "#FEF3C7",
    color: "#CA8A04"
  },

  infoBox: {
    marginTop: "30px",
    background: "#fff",
    padding: "22px",
    borderRadius: "18px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.06)"
  }
};

export default Traceability;