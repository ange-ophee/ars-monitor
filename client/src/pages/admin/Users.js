import { useMemo, useState } from "react";

function Users() {
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("All");

  const users = useMemo(() => [
    { id: 1, name: "Jean Mvondo", email: "jean@example.com", role: "Farmer", status: "Active" },
    { id: 2, name: "Aline Nkeng", email: "aline@example.com", role: "Farmer", status: "Active" },
    { id: 3, name: "Paul Tamba", email: "paul@example.com", role: "Farmer", status: "Active" },
    { id: 4, name: "Grace Nfor", email: "grace@example.com", role: "Farmer", status: "Inactive" },
    { id: 5, name: "Samuel Ekotto", email: "samuel@example.com", role: "Farmer", status: "Active" },
    { id: 6, name: "Linda Fokou", email: "linda@example.com", role: "Farmer", status: "Active" },
    { id: 7, name: "Emmanuel Tata", email: "emma@example.com", role: "Farmer", status: "Active" },
    { id: 8, name: "Sarah Ngono", email: "sarah@example.com", role: "Farmer", status: "Active" },
    { id: 9, name: "Admin Root", email: "admin@ars.com", role: "Admin", status: "System" },
    { id: 10, name: "Auditor Chief", email: "auditor@ars.com", role: "Auditor", status: "System" },
    { id: 11, name: "Cooperative Lead", email: "coop@ars.com", role: "Cooperative", status: "System" },
    { id: 12, name: "System Analyst", email: "sys@ars.com", role: "Analyst", status: "System" }
  ], []);

  const filteredUsers = users.filter((u) => {
    const matchesSearch =
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase());

    const matchesRole =
      roleFilter === "All" || u.role === roleFilter;

    return matchesSearch && matchesRole;
  });

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();
  };

  return (
    <div style={styles.page}>

      {/* HEADER */}
      <div style={styles.header}>
        <div>
          <h1 style={styles.title}>👥 Users Management</h1>
          <p style={styles.subtitle}>
            Manage all system users across ARS 1000 platform
          </p>
        </div>

        <div style={styles.statBox}>
          <div style={styles.statNumber}>{users.length}</div>
          <div style={styles.statLabel}>Total Users</div>
        </div>
      </div>

      {/* CONTROLS */}
      <div style={styles.controls}>
        <input
          placeholder="Search users..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={styles.input}
        />

        <select
          value={roleFilter}
          onChange={(e) => setRoleFilter(e.target.value)}
          style={styles.select}
        >
          <option value="All">All Roles</option>
          <option value="Farmer">Farmer</option>
          <option value="Admin">Admin</option>
          <option value="Auditor">Auditor</option>
          <option value="Cooperative">Cooperative</option>
          <option value="Analyst">Analyst</option>
        </select>
      </div>

      {/* TABLE */}
      <div style={styles.table}>
        <div style={styles.tableHeader}>
          <span>User</span>
          <span>Email</span>
          <span>Role</span>
          <span>Status</span>
        </div>

        {filteredUsers.map((u, i) => (
          <div key={u.id} style={{ ...styles.row, animationDelay: `${i * 50}ms` }}>

            {/* USER INFO */}
            <div style={styles.userCell}>
              <div style={styles.avatar}>
                {getInitials(u.name)}
              </div>

              <div>
                <div style={styles.name}>{u.name}</div>
                <div style={styles.smallRole}>{u.role}</div>
              </div>
            </div>

            <div style={styles.email}>{u.email}</div>

            <span style={{ ...styles.badge, ...styles.role }}>
              {u.role}
            </span>

            <span style={{
              ...styles.badge,
              ...(u.status === "Active"
                ? styles.active
                : u.status === "Inactive"
                  ? styles.inactive
                  : styles.system)
            }}>
              {u.status}
            </span>

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
    background: "#F5F7FB",
    animation: "fadeIn 0.4s ease"
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px"
  },

  title: {
    margin: 0,
    fontSize: "30px",
    color: "#0F172A"
  },

  subtitle: {
    marginTop: "5px",
    color: "#64748B"
  },

  statBox: {
    background: "white",
    padding: "15px 20px",
    borderRadius: "14px",
    textAlign: "center",
    boxShadow: "0 10px 20px rgba(0,0,0,0.08)"
  },

  statNumber: {
    fontSize: "22px",
    fontWeight: "700",
    color: "#0F172A"
  },

  statLabel: {
    fontSize: "12px",
    color: "#64748B"
  },

  controls: {
    display: "flex",
    gap: "15px",
    marginBottom: "20px"
  },

  input: {
    flex: 1,
    padding: "12px",
    borderRadius: "10px",
    border: "1px solid #E2E8F0",
    outline: "none"
  },

  select: {
    padding: "12px",
    borderRadius: "10px",
    border: "1px solid #E2E8F0"
  },

  table: {
    background: "white",
    borderRadius: "16px",
    overflow: "hidden",
    boxShadow: "0 10px 25px rgba(0,0,0,0.08)"
  },

  tableHeader: {
    display: "grid",
    gridTemplateColumns: "2fr 2fr 1fr 1fr",
    padding: "15px",
    background: "#0F172A",
    color: "white",
    fontWeight: "600"
  },

  row: {
    display: "grid",
    gridTemplateColumns: "2fr 2fr 1fr 1fr",
    padding: "15px",
    borderBottom: "1px solid #E2E8F0",
    alignItems: "center",
    animation: "fadeUp 0.4s ease forwards",
    opacity: 0,
    transition: "0.2s"
  },

  userCell: {
    display: "flex",
    alignItems: "center",
    gap: "12px"
  },

  avatar: {
    width: "38px",
    height: "38px",
    borderRadius: "50%",
    background: "#0F172A",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "700",
    fontSize: "12px"
  },

  name: {
    fontWeight: "600"
  },

  smallRole: {
    fontSize: "12px",
    color: "#64748B"
  },

  email: {
    color: "#475569"
  },

  badge: {
    padding: "6px 10px",
    borderRadius: "999px",
    fontSize: "12px",
    fontWeight: "600",
    textAlign: "center"
  },

  role: {
    background: "rgba(15,23,42,0.08)",
    color: "#0F172A"
  },

  active: {
    background: "rgba(34,197,94,0.1)",
    color: "#16A34A"
  },

  inactive: {
    background: "rgba(239,68,68,0.1)",
    color: "#DC2626"
  },

  system: {
    background: "rgba(148,163,184,0.2)",
    color: "#475569"
  }
};

/* animations */
const styleSheet = document.styleSheets[0];

styleSheet.insertRule(`
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
`, styleSheet.cssRules.length);

styleSheet.insertRule(`
@keyframes fadeUp {
  from { transform: translateY(10px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}
`, styleSheet.cssRules.length);

export default Users;