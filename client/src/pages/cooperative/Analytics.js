import { useState } from "react";
import CooperativeLayout from "../../layouts/CooperativeLayout";

function Analytics() {
  const [range] = useState("2026");

  const kpis = [
    {
      title: "Total Production",
      value: "18,420 tons",
      sub: "+12% vs last year"
    },
    {
      title: "Compliance Rate",
      value: "94%",
      sub: "ARS 1000 aligned"
    },
    {
      title: "Certified Farms",
      value: "62",
      sub: "Out of 74 farms"
    },
    {
      title: "Export Readiness",
      value: "87%",
      sub: "Quality approved batches"
    }
  ];

  const productionTrend = [
    { month: "Jan", value: 1200 },
    { month: "Feb", value: 1350 },
    { month: "Mar", value: 1420 },
    { month: "Apr", value: 1600 },
    { month: "May", value: 1580 },
    { month: "Jun", value: 1750 }
  ];

  const complianceTrend = [
    { label: "Q1", value: 88 },
    { label: "Q2", value: 91 },
    { label: "Q3", value: 93 },
    { label: "Q4", value: 94 }
  ];

  return (
    <CooperativeLayout>

      {/* HERO */}
      <div style={styles.hero}>
        <h1 style={styles.title}>📈 Analytics Overview</h1>

        <p style={styles.subtitle}>
          Executive intelligence dashboard providing insights into cocoa production,
          ARS 1000 compliance performance, certification progress, and cooperative-wide
          operational trends for strategic decision making.
        </p>

        <div style={styles.badge}>
          📊 Reporting Period: {range}
        </div>
      </div>

      {/* KPI GRID */}
      <div style={styles.kpiGrid}>
        {kpis.map((k, i) => (
          <div key={i} style={styles.kpiCard}>
            <h2>{k.value}</h2>
            <p style={{ fontWeight: "600" }}>{k.title}</p>
            <span style={styles.kpiSub}>{k.sub}</span>
          </div>
        ))}
      </div>

      {/* INSIGHT BANNER */}
      <div style={styles.insight}>
        ⚡ Insight: Compliance is steadily increasing due to improved traceability enforcement
        and farmer training programs across cooperatives.
      </div>

      {/* MAIN GRID */}
      <div style={styles.grid}>

        {/* PRODUCTION TREND */}
        <div style={styles.card}>
          <h3>🌱 Production Trend</h3>
          <p style={styles.cardSub}>Monthly cocoa output (tons)</p>

          <div style={styles.fakeChart}>
            {productionTrend.map((p, i) => (
              <div key={i} style={styles.barWrapper}>
                <div
                  style={{
                    ...styles.bar,
                    height: `${p.value / 20}px`
                  }}
                />
                <span style={styles.barLabel}>{p.month}</span>
              </div>
            ))}
          </div>
        </div>

        {/* COMPLIANCE TREND */}
        <div style={styles.card}>
          <h3>📊 Compliance Trend</h3>
          <p style={styles.cardSub}>ARS 1000 compliance evolution</p>

          <div style={styles.trendBox}>
            {complianceTrend.map((c, i) => (
              <div key={i} style={styles.trendRow}>
                <span>{c.label}</span>

                <div style={styles.progress}>
                  <div
                    style={{
                      ...styles.progressFill,
                      width: `${c.value}%`
                    }}
                  />
                </div>

                <b>{c.value}%</b>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* BREAKDOWN SECTION */}
      <div style={styles.breakdown}>
        <h3>📌 Executive Breakdown</h3>

        <div style={styles.breakGrid}>

          <div style={styles.smallCard}>
            <h2>+18%</h2>
            <p>Production Growth</p>
          </div>

          <div style={styles.smallCard}>
            <h2>-6%</h2>
            <p>Defect Rate Reduction</p>
          </div>

          <div style={styles.smallCard}>
            <h2>+11%</h2>
            <p>Certification Adoption</p>
          </div>

          <div style={styles.smallCard}>
            <h2>92%</h2>
            <p>Overall System Health</p>
          </div>

        </div>
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
    marginBottom: "10px",
    color: "#0F172A"
  },

  subtitle: {
    color: "#64748B",
    maxWidth: "850px",
    lineHeight: "1.7"
  },

  badge: {
    marginTop: "12px",
    display: "inline-block",
    background: "#E0F2FE",
    color: "#075985",
    padding: "6px 12px",
    borderRadius: "999px",
    fontWeight: "600",
    fontSize: "12px"
  },

  kpiGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
    gap: "16px",
    marginBottom: "20px"
  },

  kpiCard: {
    background: "#fff",
    padding: "20px",
    borderRadius: "18px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.06)"
  },

  kpiSub: {
    fontSize: "12px",
    color: "#64748B"
  },

  insight: {
    background: "#ECFDF5",
    border: "1px solid #A7F3D0",
    padding: "14px",
    borderRadius: "14px",
    marginBottom: "20px",
    color: "#065F46",
    fontWeight: "500"
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
    gap: "18px"
  },

  card: {
    background: "#fff",
    padding: "18px",
    borderRadius: "18px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.06)"
  },

  cardSub: {
    color: "#64748B",
    fontSize: "13px",
    marginBottom: "10px"
  },

  fakeChart: {
    display: "flex",
    alignItems: "flex-end",
    gap: "8px",
    height: "140px",
    marginTop: "10px"
  },

  barWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },

  bar: {
    width: "20px",
    background: "#16A34A",
    borderRadius: "6px"
  },

  barLabel: {
    fontSize: "11px",
    color: "#64748B",
    marginTop: "6px"
  },

  trendBox: {
    marginTop: "10px"
  },

  trendRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "12px",
    gap: "10px"
  },

  progress: {
    flex: 1,
    height: "8px",
    background: "#E2E8F0",
    borderRadius: "999px",
    overflow: "hidden",
    margin: "0 10px"
  },

  progressFill: {
    height: "100%",
    background: "#2563EB"
  },

  breakdown: {
    marginTop: "30px"
  },

  breakGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
    gap: "15px",
    marginTop: "10px"
  },

  smallCard: {
    background: "#fff",
    padding: "16px",
    borderRadius: "16px",
    textAlign: "center",
    boxShadow: "0 10px 25px rgba(0,0,0,0.06)"
  }
};

export default Analytics;