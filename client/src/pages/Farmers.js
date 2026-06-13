import { useEffect, useState } from "react";
import API from "../services/api";

function Farmers() {

  const [farmers, setFarmers] = useState([]);

  const [form, setForm] = useState({
    user_id: "",
    gender: "",
    cooperative_name: "",
    region: "",
    village: ""
  });

  const [editId, setEditId] = useState(null);

  // FETCH
  const fetchFarmers = () => {
    API.get("/farmers")
      .then(res => setFarmers(res.data))
      .catch(err => console.log(err));
  };

  useEffect(() => {
    fetchFarmers();
  }, []);

  // HANDLE INPUT
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  // RESET
  const resetForm = () => {
    setForm({
      user_id: "",
      gender: "",
      cooperative_name: "",
      region: "",
      village: ""
    });

    setEditId(null);
  };

  // SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId) {

      API.put(`/farmers/${editId}`, form)
        .then(() => {
          fetchFarmers();
          resetForm();
        });

    } else {

      API.post("/farmers", form)
        .then(() => {
          fetchFarmers();
          resetForm();
        });

    }
  };

  // DELETE
  const deleteFarmer = (id) => {
    API.delete(`/farmers/${id}`)
      .then(() => fetchFarmers());
  };

  // EDIT
  const handleEdit = (farmer) => {

    setForm({
      user_id: farmer.user_id,
      gender: farmer.gender,
      cooperative_name: farmer.cooperative_name,
      region: farmer.region,
      village: farmer.village
    });

    setEditId(farmer.id);
  };

  return (

    <div style={styles.container}>

      {/* HEADER */}
      <div style={styles.header}>

      <div>
        <h1 style={styles.title}>Farmers Management</h1>

        <p style={styles.subtitle}>
          Monitor registered farmers, cooperatives and regional activities
          across the ARS 1000 sustainability framework.
        </p>
      </div>

    </div>

      {/* FORM CARD */}
      <div style={styles.card}>

        <div style={styles.cardHeader}>
          <h3>
            {editId ? "Update Farmer Information" : "Register New Farmer"}
          </h3>
        </div>

        <form onSubmit={handleSubmit} style={styles.form}>

          <input
            type="text"
            name="user_id"
            value={form.user_id}
            onChange={handleChange}
            placeholder="User ID"
            style={styles.input}
          />

          <select
            name="gender"
            value={form.gender}
            onChange={handleChange}
            style={styles.input}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>

          <input
            type="text"
            name="cooperative_name"
            value={form.cooperative_name}
            onChange={handleChange}
            placeholder="Cooperative Name"
            style={styles.input}
          />

          <input
            type="text"
            name="region"
            value={form.region}
            onChange={handleChange}
            placeholder="Region"
            style={styles.input}
          />

          <input
            type="text"
            name="village"
            value={form.village}
            onChange={handleChange}
            placeholder="Village"
            style={styles.input}
          />

          <button style={styles.submitBtn}>
            {editId ? "Update Farmer" : "Add Farmer"}
          </button>

        </form>

      </div>

      {/* TABLE CARD */}
      <div style={styles.card}>

        <div style={styles.cardHeader}>
          <h3>Registered Farmers</h3>
        </div>

        <div style={styles.tableWrapper}>

          <table style={styles.table}>

            <thead>

              <tr>
                <th>ID</th>
                <th>Gender</th>
                <th>Cooperative</th>
                <th>Region</th>
                <th>Village</th>
                <th>Actions</th>
              </tr>

            </thead>

            <tbody>

              {farmers.map((f) => (

                <tr key={f.id}>

                  <td>{f.id}</td>

                  <td>
                    <span style={{
                      ...styles.badge,
                      background:
                        f.gender === "Male"
                          ? "#E8F0FE"
                          : "#FCE4EC",
                      color:
                        f.gender === "Male"
                          ? "#1E40AF"
                          : "#AD1457"
                    }}>
                      {f.gender}
                    </span>
                  </td>

                  <td>{f.cooperative_name}</td>
                  <td>{f.region}</td>
                  <td>{f.village}</td>

                  <td>

                    <div style={styles.actionGroup}>

                      <button
                        onClick={() => handleEdit(f)}
                        style={styles.editBtn}
                      >
                        Edit
                      </button>

                      <button
                        onClick={() => deleteFarmer(f.id)}
                        style={styles.deleteBtn}
                      >
                        Delete
                      </button>

                    </div>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>

  );
}

const styles = {

  container: {
    padding: "10px"
  },

  header: {
    marginBottom: "25px"
  },

  title: {
    fontSize: "32px",
    color: "#1E1E1E",
    marginBottom: "8px"
  },

  subtitle: {
    color: "#777",
    fontSize: "15px"
  },

  card: {
    background: "#FFFFFF",
    padding: "25px",
    borderRadius: "18px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
    marginBottom: "25px"
  },

  cardHeader: {
    marginBottom: "20px",
    borderBottom: "1px solid #EEE",
    paddingBottom: "10px"
  },

  form: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "15px"
  },

  input: {
    padding: "14px",
    borderRadius: "10px",
    border: "1px solid #DDD",
    outline: "none",
    fontSize: "14px",
    background: "#FAFAFA"
  },

  submitBtn: {
    background: "#5D4037",
    color: "white",
    border: "none",
    padding: "14px",
    borderRadius: "10px",
    cursor: "pointer",
    fontWeight: "600"
  },

  tableWrapper: {
    overflowX: "auto"
  },

  table: {
    width: "100%",
    borderCollapse: "collapse"
  },

  badge: {
    padding: "6px 12px",
    borderRadius: "30px",
    fontSize: "12px",
    fontWeight: "600"
  },

  actionGroup: {
    display: "flex",
    gap: "10px"
  },

  editBtn: {
    background: "#C9A227",
    border: "none",
    padding: "8px 14px",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "600"
  },

  deleteBtn: {
    background: "#C62828",
    color: "white",
    border: "none",
    padding: "8px 14px",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "600"
  }

};

export default Farmers;