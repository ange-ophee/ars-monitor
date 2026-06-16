import { useState } from "react";
import CooperativeLayout from "../../layouts/CooperativeLayout";

function QualityControl() {

const [search, setSearch] = useState("");

const [batches] = useState([
{
id: "BATCH-2026-001",
farm: "FARM-102",
score: 92,
moisture: "6.8%",
defects: "2%",
fermentation: "Excellent",
grade: "A",
status: "Approved",
inspectionDate: "12 Jun 2026"
},
{
id: "BATCH-2026-002",
farm: "FARM-087",
score: 81,
moisture: "7.5%",
defects: "4%",
fermentation: "Good",
grade: "B",
status: "Approved",
inspectionDate: "10 Jun 2026"
},
{
id: "BATCH-2026-003",
farm: "FARM-055",
score: 58,
moisture: "11.2%",
defects: "12%",
fermentation: "Poor",
grade: "C",
status: "Flagged",
inspectionDate: "08 Jun 2026"
},
{
id: "BATCH-2026-004",
farm: "FARM-144",
score: 95,
moisture: "6.2%",
defects: "1%",
fermentation: "Excellent",
grade: "A",
status: "Approved",
inspectionDate: "14 Jun 2026"
}
]);

const filtered = batches.filter(
(b) =>
b.id.toLowerCase().includes(search.toLowerCase()) ||
b.farm.toLowerCase().includes(search.toLowerCase())
);

const getStatusStyle = (status) => {
if (status === "Approved") {
return {
background: "#DCFCE7",
color: "#16A34A"
};
}


return {
  background: "#FEE2E2",
  color: "#DC2626"
};


};

const getGradeStyle = (grade) => {
if (grade === "A")
return { background: "#DCFCE7", color: "#16A34A" };


if (grade === "B")
  return { background: "#FEF3C7", color: "#CA8A04" };

return { background: "#FEE2E2", color: "#DC2626" };

};

return ( <CooperativeLayout>


  {/* HERO */}

  <div style={styles.hero}>

    <h1 style={styles.title}>
      ⭐ Quality Control Center
    </h1>

    <p style={styles.subtitle}>
      Monitor cocoa quality inspections, fermentation performance,
      moisture levels, defect rates, and compliance indicators.
      This module helps cooperatives maintain ARS 1000 quality
      requirements before certification and export.
    </p>

  </div>

  {/* KPI CARDS */}

  <div style={styles.kpiGrid}>

    <div style={styles.kpiCard}>
      <h2>248</h2>
      <p>Total Inspections</p>
    </div>

    <div style={styles.kpiCard}>
      <h2>91%</h2>
      <p>Average Quality Score</p>
    </div>

    <div style={styles.kpiCard}>
      <h2>221</h2>
      <p>Approved Batches</p>
    </div>

    <div style={styles.kpiCard}>
      <h2>27</h2>
      <p>Flagged Batches</p>
    </div>

  </div>

  {/* INFO BOX */}

  <div style={styles.infoBox}>
    ARS 1000 quality control procedures ensure cocoa products meet
    sustainability, traceability, and safety requirements before
    entering the international supply chain.
  </div>

  {/* SEARCH */}

  <div style={styles.searchContainer}>
    <input
      type="text"
      placeholder="Search batch or farm..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      style={styles.search}
    />
  </div>

  {/* GRID */}

  <div style={styles.grid}>

    {filtered.map((batch) => (

      <div
        key={batch.id}
        style={styles.card}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform =
            "translateY(-8px)";
          e.currentTarget.style.boxShadow =
            "0 20px 40px rgba(0,0,0,0.12)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform =
            "translateY(0)";
          e.currentTarget.style.boxShadow =
            "0 10px 25px rgba(0,0,0,0.06)";
        }}
      >

        <div style={styles.cardTop}>

          <h3>{batch.id}</h3>

          <span
            style={{
              ...styles.badge,
              ...getStatusStyle(batch.status)
            }}
          >
            {batch.status}
          </span>

        </div>

        <p style={styles.farm}>
          🌱 Origin Farm: {batch.farm}
        </p>

        <div style={styles.row}>
          <span>Moisture Level</span>
          <b>{batch.moisture}</b>
        </div>

        <div style={styles.row}>
          <span>Defect Rate</span>
          <b>{batch.defects}</b>
        </div>

        <div style={styles.row}>
          <span>Fermentation</span>
          <b>{batch.fermentation}</b>
        </div>

        <div style={styles.row}>
          <span>Inspection Date</span>
          <b>{batch.inspectionDate}</b>
        </div>

        <div style={styles.scoreSection}>

          <div style={styles.scoreHeader}>
            <span>Quality Score</span>
            <b>{batch.score}%</b>
          </div>

          <div style={styles.progress}>
            <div
              style={{
                ...styles.progressFill,
                width: `${batch.score}%`
              }}
            />
          </div>

        </div>

        <div
          style={{
            ...styles.gradeBadge,
            ...getGradeStyle(batch.grade)
          }}
        >
          Grade {batch.grade}
        </div>

      </div>

    ))}

  </div>

  {/* SUMMARY */}

  <div style={styles.summary}>

    <h2>Inspection Summary</h2>

    <div style={styles.summaryGrid}>

      <div style={styles.summaryCard}>
        <h3>7.1%</h3>
        <p>Average Moisture</p>
      </div>

      <div style={styles.summaryCard}>
        <h3>3.2%</h3>
        <p>Average Defect Rate</p>
      </div>

      <div style={styles.summaryCard}>
        <h3>78%</h3>
        <p>Grade A Batches</p>
      </div>

      <div style={styles.summaryCard}>
        <h3>94%</h3>
        <p>Compliance Rate</p>
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
maxWidth: "800px",
lineHeight: "1.7"
},

kpiGrid: {
display: "grid",
gridTemplateColumns:
"repeat(auto-fit,minmax(220px,1fr))",
gap: "16px",
marginBottom: "25px"
},

kpiCard: {
background: "#fff",
padding: "20px",
borderRadius: "18px",
textAlign: "center",
boxShadow: "0 8px 20px rgba(0,0,0,0.06)"
},

infoBox: {
background: "#EFF6FF",
color: "#1E40AF",
padding: "16px",
borderRadius: "14px",
marginBottom: "20px"
},

searchContainer: {
marginBottom: "20px"
},

search: {
width: "100%",
padding: "14px",
borderRadius: "12px",
border: "1px solid #CBD5E1"
},

grid: {
display: "grid",
gridTemplateColumns:
"repeat(auto-fit,minmax(330px,1fr))",
gap: "20px"
},

card: {
background: "#fff",
borderRadius: "18px",
padding: "20px",
transition: "0.3s",
cursor: "pointer",
boxShadow: "0 10px 25px rgba(0,0,0,0.06)"
},

cardTop: {
display: "flex",
justifyContent: "space-between",
alignItems: "center"
},

farm: {
color: "#475569"
},

row: {
display: "flex",
justifyContent: "space-between",
marginTop: "10px"
},

badge: {
padding: "5px 12px",
borderRadius: "999px",
fontSize: "12px",
fontWeight: "600"
},

scoreSection: {
marginTop: "20px"
},

scoreHeader: {
display: "flex",
justifyContent: "space-between",
marginBottom: "8px"
},

progress: {
height: "10px",
background: "#E2E8F0",
borderRadius: "999px",
overflow: "hidden"
},

progressFill: {
height: "100%",
background: "#16A34A"
},

gradeBadge: {
marginTop: "18px",
padding: "8px 12px",
borderRadius: "10px",
display: "inline-block",
fontWeight: "600"
},

summary: {
marginTop: "40px"
},

summaryGrid: {
display: "grid",
gridTemplateColumns:
"repeat(auto-fit,minmax(220px,1fr))",
gap: "16px"
},

summaryCard: {
background: "#fff",
padding: "18px",
borderRadius: "16px",
textAlign: "center",
boxShadow: "0 8px 20px rgba(0,0,0,0.06)"
}
};

export default QualityControl;
