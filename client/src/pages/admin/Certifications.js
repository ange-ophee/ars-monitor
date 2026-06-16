import { useState, useMemo } from "react";

function Certifications() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const [certs] = useState([
    {
      id: 1,
      certificate_number: "ARS-2026-0001",
      status: "Approved",
      farm_id: "FARM-102",
      issued_at: "2026-06-10"
    },
    {
      id: 2,
      certificate_number: "ARS-2026-0002",
      status: "Pending",
      farm_id: "FARM-087",
      issued_at: "2026-06-12"
    },
    {
      id: 3,
      certificate_number: "ARS-2026-0003",
      status: "Rejected",
      farm_id: "FARM-055",
      issued_at: "2026-06-13"
    }
  ]);

  const filteredCerts = useMemo(() => {
    return certs.filter((c) => {
      const matchesSearch =
        c.certificate_number.toLowerCase().includes(search.toLowerCase()) ||
        c.farm_id.toLowerCase().includes(search.toLowerCase());

      const matchesFilter =
        filter === "All" || c.status === filter;

      return matchesSearch && matchesFilter;
    });
  }, [certs, search, filter]);

  const getStatusStyle = (status) => {
    switch (status.toLowerCase()) {
      case "approved":
        return styles.statusApproved;
      case "pending":
        return styles.statusPending;
      case "rejected":
        return styles.statusRejected;
      default:
        return styles.statusDefault;
    }
  };

  return (
    <div style={styles.page}>

     

      {/* HEADER */}
      <div style={styles.header}>
        <h1 style={styles.title}>🏆 Certifications</h1>

        <p style={styles.subtitle}>
          ARS 1000 certification registry and compliance tracking system
        </p>

        {/* SUMMARY */}
        <div style={styles.summaryBar}>
          <div style={styles.summaryCard}>
            <h3>3</h3>
            <p>Total</p>
          </div>
          <div style={styles.summaryCard}>
            <h3>1</h3>
            <p>Approved</p>
          </div>
          <div style={styles.summaryCard}>
            <h3>1</h3>
            <p>Pending</p>
          </div>
          <div style={styles.summaryCard}>
            <h3>1</h3>
            <p>Rejected</p>
          </div>
        </div>
      </div>

      {/* CONTROLS */}
      <div style={styles.controls}>
        <input
          placeholder="Search certificate or farm..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={styles.search}
        />

        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          style={styles.select}
        >
          <option>All</option>
          <option>Approved</option>
          <option>Pending</option>
          <option>Rejected</option>
        </select>
      </div>

      {/* GRID */}
      <div style={styles.grid}>
        {filteredCerts.map((c) => (
          <div key={c.id} style={styles.card}>
            <div style={styles.cardTop}>
              <h3 style={styles.certNumber}>{c.certificate_number}</h3>

              <span style={{
                ...styles.status,
                ...getStatusStyle(c.status)
              }}>
                {c.status}
              </span>
            </div>

            <div style={styles.info}>
              <div style={styles.row}>
                <span>Farm</span>
                <b>{c.farm_id}</b>
              </div>

              <div style={styles.row}>
                <span>Issued</span>
                <b>{c.issued_at}</b>
              </div>
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
    background: "#F6F7FB",
    color: "#0F172A"
  },

  header: {
    marginBottom: "20px"
  },

  title: {
    margin: 0,
    fontSize: "32px"
  },

  subtitle: {
    color: "#64748B",
    marginTop: "6px"
  },

  summaryBar: {
    marginTop: "20px",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(120px,1fr))",
    gap: "12px"
  },

  summaryCard: {
    background: "white",
    borderRadius: "14px",
    padding: "12px",
    textAlign: "center",
    boxShadow: "0 6px 20px rgba(0,0,0,0.06)"
  },

  controls: {
    display: "flex",
    gap: "10px",
    marginTop: "15px"
  },

  search: {
    flex: 1,
    padding: "10px",
    borderRadius: "10px",
    border: "1px solid #ddd"
  },

  select: {
    padding: "10px",
    borderRadius: "10px",
    border: "1px solid #ddd"
  },

  grid: {
    marginTop: "20px",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
    gap: "18px"
  },

  card: {
    background: "white",
    borderRadius: "18px",
    padding: "18px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
    transition: "all 0.25s ease",
    cursor: "pointer",
    border: "1px solid rgba(15,23,42,0.06)"
  },

  cardTop: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "14px"
  },

  certNumber: {
    margin: 0,
    fontSize: "15px",
    fontWeight: "700"
  },

  info: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    color: "#475569",
    fontSize: "14px"
  },

  row: {
    display: "flex",
    justifyContent: "space-between"
  },

  status: {
    padding: "5px 10px",
    borderRadius: "999px",
    fontSize: "12px",
    fontWeight: "600"
  },

  statusApproved: {
    background: "#DCFCE7",
    color: "#16A34A"
  },

  statusPending: {
    background: "#FEF9C3",
    color: "#CA8A04"
  },

  statusRejected: {
    background: "#FEE2E2",
    color: "#DC2626"
  },

  statusDefault: {
    background: "#E2E8F0",
    color: "#475569"
  }
};

export default Certifications;