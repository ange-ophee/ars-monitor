import { useState } from "react";
import FarmerLayout from "../../layouts/FarmerLayout";

function MyFarms() {
  const [search, setSearch] = useState("");

  const [farms] = useState([
    {
      id: 1,
      name: "Nkong Farm",
      location: "South West",
      size: "4.5 ha",
      status: "Active",
      production: "2.8 Tons"
    },
    {
      id: 2,
      name: "Buea Highlands",
      location: "South West",
      size: "6.2 ha",
      status: "Pending",
      production: "3.4 Tons"
    },
    {
      id: 3,
      name: "Limbe Coastal Farm",
      location: "Littoral",
      size: "3.1 ha",
      status: "Certified",
      production: "1.9 Tons"
    }
  ]);

  const getStatus = (status) => {
    switch (status) {
      case "Certified":
        return styles.certified;
      case "Active":
        return styles.active;
      default:
        return styles.pending;
    }
  };

  const filtered = farms.filter((f) =>
    f.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <FarmerLayout>

      {/* HEADER */}
      <div style={styles.hero}>
        <div>
          <h1>🌿 My Farms</h1>
          <p>
            Manage all your cocoa farms, track production,
            and monitor certification progress in real time.
          </p>
        </div>

        <button style={styles.createBtn}>
          + Add Farm
        </button>
      </div>

      {/* SEARCH */}
      <input
        placeholder="Search farms..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={styles.search}
      />

      {/* GRID */}
      <div style={styles.grid}>
        {filtered.map((f) => (
          <div key={f.id} style={styles.card}>
            
            <div style={styles.top}>
              <h3>{f.name}</h3>
              <span style={{ ...styles.badge, ...getStatus(f.status) }}>
                {f.status}
              </span>
            </div>

            <p>{f.location}</p>
            <p>{f.size}</p>
            <p>{f.production}</p>

            <div style={styles.actions}>
              <button>View</button>
              <button>Edit</button>
              <button>Analytics</button>
            </div>
          </div>
        ))}
      </div>

    </FarmerLayout>
  );
}

const styles = {
  hero: { display: "flex", justifyContent: "space-between", marginBottom: 20 },
  createBtn: { background: "#0F766E", color: "#fff", padding: "10px 15px", borderRadius: 10 },
  search: { width: "100%", padding: 12, marginBottom: 20 },
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))", gap: 15 },
  card: { background: "#fff", padding: 15, borderRadius: 15, boxShadow: "0 10px 25px rgba(0,0,0,0.06)" },
  top: { display: "flex", justifyContent: "space-between" },
  badge: { padding: "5px 10px", borderRadius: 20, fontSize: 12 },
  certified: { background: "#DCFCE7", color: "#16A34A" },
  active: { background: "#DBEAFE", color: "#2563EB" },
  pending: { background: "#FEF3C7", color: "#CA8A04" },
  actions: { display: "flex", gap: 8, marginTop: 10 }
};

export default MyFarms;