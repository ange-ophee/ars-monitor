import { useEffect, useState } from "react";
import API from "../services/api";

function Farms() {

  const [farms, setFarms] = useState([]);

  const [form, setForm] = useState({
    farmer_id: "",
    farm_name: "",
    location: "",
    gps_coordinates: "",
    farm_size: "",
    production_capacity: "",
    status: "Active"
  });

  const [editId, setEditId] = useState(null);

  // FETCH
  const fetchFarms = () => {
    API.get("/farms")
      .then(res => setFarms(res.data))
      .catch(err => console.log(err));
  };

  useEffect(() => {
    fetchFarms();
  }, []);

  // INPUT
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  // RESET
  const resetForm = () => {
    setForm({
      farmer_id: "",
      farm_name: "",
      location: "",
      gps_coordinates: "",
      farm_size: "",
      production_capacity: "",
      status: "Active"
    });

    setEditId(null);
  };

  // SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId) {

      API.put(`/farms/${editId}`, form)
        .then(() => {
          fetchFarms();
          resetForm();
        });

    } else {

      API.post("/farms", form)
        .then(() => {
          fetchFarms();
          resetForm();
        });

    }
  };

  // DELETE
  const deleteFarm = (id) => {
    API.delete(`/farms/${id}`)
      .then(() => fetchFarms());
  };

  // EDIT
  const handleEdit = (farm) => {
    setForm({
      farmer_id: farm.farmer_id,
      farm_name: farm.farm_name,
      location: farm.location,
      gps_coordinates: farm.gps_coordinates,
      farm_size: farm.farm_size,
      production_capacity: farm.production_capacity,
      status: farm.status
    });

    setEditId(farm.id);
  };

  // STATUS STYLE
  const getStatusStyle = (status) => {

    switch (status) {

      case "Active":
        return { background: "#1B5E20", color: "white" };

      case "Inactive":
        return { background: "#C62828", color: "white" };

      case "Under Monitoring":
        return { background: "#C9A227", color: "#1E1E1E" };

      default:
        return { background: "#777", color: "white" };

    }

  };

  return (

    <div style={styles.container}>

      {/* HEADER */}
      <div style={styles.header}>

        <h1 style={styles.title}>Farms Management</h1>

        <p style={styles.subtitle}>
          Manage farms, track agricultural zones, and monitor operational status across regions.
        </p>

      </div>

      {/* FORM */}
      <div style={styles.card}>

        <div style={styles.cardHeader}>
          <h3>{editId ? "Update Farm Record" : "Register New Farm"}</h3>
        </div>

        <form onSubmit={handleSubmit} style={styles.form}>

          <input
            name="farmer_id"
            value={form.farmer_id}
            onChange={handleChange}
            placeholder="Farmer ID"
            style={styles.input}
          />

          <input
            name="farm_name"
            value={form.farm_name}
            onChange={handleChange}
            placeholder="Farm Name"
            style={styles.input}
          />

          <input
            name="location"
            value={form.location}
            onChange={handleChange}
            placeholder="Location"
            style={styles.input}
          />

          <input
            name="gps_coordinates"
            value={form.gps_coordinates}
            onChange={handleChange}
            placeholder="GPS Coordinates"
            style={styles.input}
          />

          <input
            type="number"
            step="0.01"
            name="farm_size"
            value={form.farm_size}
            onChange={handleChange}
            placeholder="Farm Size (ha)"
            style={styles.input}
          />

          <input
            type="number"
            step="0.01"
            name="production_capacity"
            value={form.production_capacity}
            onChange={handleChange}
            placeholder="Production Capacity (kg)"
            style={styles.input}
          />

          <select
            name="status"
            value={form.status}
            onChange={handleChange}
            style={styles.input}
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
            <option value="Under Monitoring">Under Monitoring</option>
          </select>

          <button style={styles.submitBtn}>
            {editId ? "Update Farm" : "Add Farm"}
          </button>

        </form>

      </div>

      {/* TABLE */}
      <div style={styles.card}>

        <div style={styles.cardHeader}>
          <h3>Farm Records</h3>
        </div>

        <div style={styles.tableWrapper}>

          <table style={styles.table}>

            <thead>
              <tr>
                <th>ID</th>
                <th>Farmer ID</th>
                <th>Farm Name</th>
                <th>Location</th>
                <th>GPS</th>
                <th>Size (ha)</th>
                <th>Capacity (kg)</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

           <tbody>

            {farms.map((farm) => (

              <tr key={farm.id}>

                <td>{farm.id}</td>

                <td>{farm.farmer_id}</td>

                <td>{farm.farm_name}</td>

                <td>{farm.location}</td>

                <td>{farm.gps_coordinates}</td>

                <td>{farm.farm_size}</td>

                <td>{farm.production_capacity}</td>

                <td>
                  <span
                    style={{
                      ...styles.badge,
                      ...getStatusStyle(farm.status)
                    }}
                  >
                    {farm.status}
                  </span>
                </td>

                <td>

                  <div style={styles.actions}>

                    <button
                      onClick={() => handleEdit(farm)}
                      style={styles.editBtn}
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => deleteFarm(farm.id)}
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
    background: "white",
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
    background: "#FAFAFA",
    outline: "none"
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

  actions: {
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

export default Farms;