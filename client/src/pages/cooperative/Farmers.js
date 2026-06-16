import { useState } from "react";
import CooperativeLayout from "../../layouts/CooperativeLayout";

function Farmers() {
  const [search, setSearch] = useState("");

  const [farmers, setFarmers] = useState([
    {
      id: 1,
      name: "John Nkem",
      farm: "FARM-101",
      location: "South Region",
      size: 4.8,
      production: 3.2,
      status: "Certified"
    },
    {
      id: 2,
      name: "Marie Ndzi",
      farm: "FARM-102",
      location: "Centre Region",
      size: 3.5,
      production: 2.4,
      status: "Pending"
    },
    {
      id: 3,
      name: "Peter Ndzi",
      farm: "FARM-103",
      location: "East Region",
      size: 6.1,
      production: 4.5,
      status: "Certified"
    }
  ]);

  const [showModal, setShowModal] = useState(false);

  const [form, setForm] = useState({
    name: "",
    farm: "",
    location: "",
    size: "",
    production: "",
    status: "Pending"
  });

  const filtered = farmers.filter(
    (f) =>
      f.name.toLowerCase().includes(search.toLowerCase()) ||
      f.farm.toLowerCase().includes(search.toLowerCase())
  );

  const stats = {
    total: farmers.length,
    certified: farmers.filter((f) => f.status === "Certified").length,
    area: farmers.reduce((sum, f) => sum + Number(f.size), 0).toFixed(1),
    production: farmers.reduce((sum, f) => sum + Number(f.production), 0).toFixed(1)
  };

  const handleCreate = () => {
    const newFarmer = {
      ...form,
      id: farmers.length + 1
    };

    setFarmers([newFarmer, ...farmers]);
    setShowModal(false);

    setForm({
      name: "",
      farm: "",
      location: "",
      size: "",
      production: "",
      status: "Pending"
    });
  };

  const getBadge = (status) => {
    if (status === "Certified") return styles.certified;
    if (status === "Pending") return styles.pending;
    return styles.review;
  };

  return (
    <CooperativeLayout>

      {/* HERO */}
      <div style={styles.hero}>
        <div>
          <h1 style={styles.title}>🌱 Farmers Registry</h1>
          <p style={styles.subtitle}>
            Manage cooperative members, production data, certification status,
            and farm-level sustainability performance in real time.
          </p>
        </div>

        <button style={styles.createBtn} onClick={() => setShowModal(true)}>
          + Create Farmer
        </button>
      </div>

      {/* KPI */}
      <div style={styles.kpiGrid}>
        <div style={styles.kpi}><h2>{stats.total}</h2><p>Total Farmers</p></div>
        <div style={styles.kpi}><h2>{stats.certified}</h2><p>Certified</p></div>
        <div style={styles.kpi}><h2>{stats.area} ha</h2><p>Total Area</p></div>
        <div style={styles.kpi}><h2>{stats.production} T</h2><p>Production</p></div>
      </div>

      {/* SEARCH */}
      <input
        placeholder="Search farmer or farm ID..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={styles.search}
      />

      {/* TABLE */}
      <div style={styles.table}>
        {filtered.map((f) => (
          <div key={f.id} style={styles.row}>
            <div>
              <h3 style={{ margin: 0 }}>{f.name}</h3>
              <p style={styles.small}>{f.farm} • {f.location}</p>
            </div>

            <div style={styles.metrics}>
              <span>{f.size} ha</span>
              <span>{f.production} T</span>
            </div>

            <span style={{ ...styles.badge, ...getBadge(f.status) }}>
              {f.status}
            </span>
          </div>
        ))}
      </div>

      {/* INSIGHT */}
      <div style={styles.insight}>
        <h3>📊 Cooperative Insight</h3>
        <p>
          Your cooperative manages <b>{stats.total}</b> farmers with
          <b> {stats.production} tons</b> annual cocoa output.
          Certification coverage is strong, indicating stable compliance with ARS 1000 standards.
        </p>
      </div>

      {/* MODAL */}
      {showModal && (
        <div style={styles.modal}>
          <div style={styles.modalBox}>
            <h2>Create Farmer</h2>

            <input placeholder="Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />

            <input placeholder="Farm ID"
              value={form.farm}
              onChange={(e) => setForm({ ...form, farm: e.target.value })}
            />

            <input placeholder="Location"
              value={form.location}
              onChange={(e) => setForm({ ...form, location: e.target.value })}
            />

            <input placeholder="Farm Size (ha)"
              value={form.size}
              onChange={(e) => setForm({ ...form, size: e.target.value })}
            />

            <input placeholder="Production (T)"
              value={form.production}
              onChange={(e) => setForm({ ...form, production: e.target.value })}
            />

            <button onClick={handleCreate} style={styles.saveBtn}>
              Save Farmer
            </button>

            <button onClick={() => setShowModal(false)} style={styles.cancelBtn}>
              Cancel
            </button>
          </div>
        </div>
      )}

    </CooperativeLayout>
  );
}

const styles = {

  hero: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "25px"
  },

  title: { fontSize: "34px", margin: 0 },
  subtitle: { color: "#64748B", maxWidth: "700px" },

  createBtn: {
    background: "#0F766E",
    color: "white",
    border: "none",
    padding: "12px 16px",
    borderRadius: "10px",
    cursor: "pointer"
  },

  kpiGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
    gap: "12px",
    marginBottom: "20px"
  },

  kpi: {
    background: "white",
    padding: "16px",
    borderRadius: "14px",
    textAlign: "center"
  },

  search: {
    width: "100%",
    padding: "12px",
    borderRadius: "10px",
    border: "1px solid #CBD5E1",
    marginBottom: "15px"
  },

  table: {
    display: "flex",
    flexDirection: "column",
    gap: "10px"
  },

  row: {
    background: "white",
    padding: "14px",
    borderRadius: "12px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },

  small: { fontSize: "12px", color: "#64748B" },

  metrics: {
    display: "flex",
    gap: "20px",
    color: "#334155"
  },

  badge: {
    padding: "6px 10px",
    borderRadius: "999px",
    fontSize: "12px",
    fontWeight: "600"
  },

  certified: { background: "#DCFCE7", color: "#16A34A" },
  pending: { background: "#FEF3C7", color: "#CA8A04" },
  review: { background: "#FEE2E2", color: "#DC2626" },

  insight: {
    marginTop: "20px",
    background: "white",
    padding: "18px",
    borderRadius: "14px"
  },

  modal: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },

  modalBox: {
    background: "white",
    padding: "20px",
    borderRadius: "14px",
    width: "320px",
    display: "flex",
    flexDirection: "column",
    gap: "10px"
  },

  saveBtn: {
    background: "#0F766E",
    color: "white",
    padding: "10px",
    border: "none",
    borderRadius: "10px"
  },

  cancelBtn: {
    background: "#E2E8F0",
    padding: "10px",
    border: "none",
    borderRadius: "10px"
  }
};

export default Farmers;