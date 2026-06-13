import { useEffect, useState } from "react";
import API from "../services/api";

function Monitoring() {

  const [records, setRecords] = useState([]);

  const [form, setForm] = useState({
    farm_id: "",
    auditor_id: "",
    inspection_date: "",
    observations: "",
    disease_presence: "",
    environmental_conditions: "",
    production_status: "",
    monitoring_status: "Pending"
  });

  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchRecords();
  }, []);

  const fetchRecords = () => {
    API.get("/monitoring")
      .then((res) => setRecords(res.data))
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const resetForm = () => {
    setForm({
      farm_id: "",
      auditor_id: "",
      inspection_date: "",
      observations: "",
      disease_presence: "",
      environmental_conditions: "",
      production_status: "",
      monitoring_status: "Pending"
    });

    setEditId(null);
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    if (editId) {

      API.put(`/monitoring/${editId}`, form)
        .then(() => {
          fetchRecords();
          resetForm();
        });

    } else {

      API.post("/monitoring", form)
        .then(() => {
          fetchRecords();
          resetForm();
        });

    }

  };

  const handleEdit = (record) => {

    setForm({
      farm_id: record.farm_id,
      auditor_id: record.auditor_id,
      inspection_date: record.inspection_date?.split("T")[0],
      observations: record.observations,
      disease_presence: record.disease_presence,
      environmental_conditions: record.environmental_conditions,
      production_status: record.production_status,
      monitoring_status: record.monitoring_status
    });

    setEditId(record.id);

  };

  const deleteRecord = (id) => {

    if (window.confirm("Delete this monitoring record?")) {

      API.delete(`/monitoring/${id}`)
        .then(() => fetchRecords());

    }

  };

  const getStatusStyle = (status) => {

    switch (status) {

      case "Completed":
        return {
          background: "#DCFCE7",
          color: "#166534"
        };

      case "Flagged":
        return {
          background: "#FEE2E2",
          color: "#991B1B"
        };

      case "In Progress":
        return {
          background: "#DBEAFE",
          color: "#1E40AF"
        };

      default:
        return {
          background: "#FEF3C7",
          color: "#92400E"
        };
    }

  };

  return (

    <div style={styles.container}>

      <div style={styles.header}>
        <h1 style={styles.title}>Monitoring Records</h1>

        <p style={styles.subtitle}>
          Monitor farm inspections, environmental conditions and compliance activities.
        </p>
      </div>

      <div style={styles.card}>

        <h3 style={styles.sectionTitle}>
          {editId ? "Update Inspection" : "New Inspection"}
        </h3>

        <form onSubmit={handleSubmit}>

          <div style={styles.formGrid}>

            <input
              type="number"
              name="farm_id"
              placeholder="Farm ID"
              value={form.farm_id}
              onChange={handleChange}
              style={styles.input}
              required
            />

            <input
              type="number"
              name="auditor_id"
              placeholder="Auditor ID"
              value={form.auditor_id}
              onChange={handleChange}
              style={styles.input}
              required
            />

            <input
              type="date"
              name="inspection_date"
              value={form.inspection_date}
              onChange={handleChange}
              style={styles.input}
              required
            />

            <input
              type="text"
              name="disease_presence"
              placeholder="Disease Presence"
              value={form.disease_presence}
              onChange={handleChange}
              style={styles.input}
            />

            <input
              type="text"
              name="production_status"
              placeholder="Production Status"
              value={form.production_status}
              onChange={handleChange}
              style={styles.input}
            />

            <select
              name="monitoring_status"
              value={form.monitoring_status}
              onChange={handleChange}
              style={styles.input}
            >
              <option value="Pending">Pending</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
              <option value="Flagged">Flagged</option>
            </select>

          </div>

          <textarea
            name="environmental_conditions"
            placeholder="Environmental Conditions"
            value={form.environmental_conditions}
            onChange={handleChange}
            style={styles.textarea}
          />

          <textarea
            name="observations"
            placeholder="Inspection Observations"
            value={form.observations}
            onChange={handleChange}
            style={styles.textarea}
          />

          <div style={styles.buttonGroup}>

            <button type="submit" style={styles.saveBtn}>
              {editId ? "Update Record" : "Save Record"}
            </button>

            {editId && (
              <button
                type="button"
                style={styles.cancelBtn}
                onClick={resetForm}
              >
                Cancel
              </button>
            )}

          </div>

        </form>

      </div>

      <div style={styles.card}>

        <h3 style={styles.sectionTitle}>
          Inspection Records
        </h3>

        <div style={styles.tableWrapper}>

          <table style={styles.table}>

            <thead>

              <tr>
                <th>ID</th>
                <th>Farm</th>
                <th>Auditor</th>
                <th>Date</th>
                <th>Disease</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>

            </thead>

            <tbody>

              {records.map((record) => (

                <tr key={record.id}>

                  <td>{record.id}</td>
                  <td>{record.farm_id}</td>
                  <td>{record.auditor_id}</td>
                  <td>{record.inspection_date}</td>
                  <td>{record.disease_presence}</td>

                  <td>
                    <span
                      style={{
                        ...styles.badge,
                        ...getStatusStyle(record.monitoring_status)
                      }}
                    >
                      {record.monitoring_status}
                    </span>
                  </td>

                  <td>

                    <div style={styles.actions}>

                      <button
                        style={styles.editBtn}
                        onClick={() => handleEdit(record)}
                      >
                        Edit
                      </button>

                      <button
                        style={styles.deleteBtn}
                        onClick={() => deleteRecord(record.id)}
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
    padding: "20px"
  },

  header: {
    marginBottom: "25px"
  },

  title: {
    fontSize: "32px",
    color: "#1E293B"
  },

  subtitle: {
    color: "#64748B"
  },

  card: {
    background: "#FFF",
    borderRadius: "18px",
    padding: "25px",
    marginBottom: "25px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.05)"
  },

  sectionTitle: {
    marginBottom: "20px"
  },

  formGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
    gap: "15px",
    marginBottom: "15px"
  },

  input: {
    padding: "12px",
    border: "1px solid #E2E8F0",
    borderRadius: "10px"
  },

  textarea: {
    width: "100%",
    minHeight: "100px",
    padding: "12px",
    border: "1px solid #E2E8F0",
    borderRadius: "10px",
    marginBottom: "15px",
    resize: "vertical"
  },

  buttonGroup: {
    display: "flex",
    gap: "10px"
  },

  saveBtn: {
    background: "#166534",
    color: "#FFF",
    border: "none",
    padding: "12px 20px",
    borderRadius: "10px",
    cursor: "pointer"
  },

  cancelBtn: {
    background: "#64748B",
    color: "#FFF",
    border: "none",
    padding: "12px 20px",
    borderRadius: "10px",
    cursor: "pointer"
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
    borderRadius: "20px",
    fontSize: "12px",
    fontWeight: "600"
  },

  actions: {
    display: "flex",
    gap: "10px"
  },

  editBtn: {
    background: "#F59E0B",
    border: "none",
    padding: "8px 12px",
    borderRadius: "8px",
    cursor: "pointer"
  },

  deleteBtn: {
    background: "#DC2626",
    color: "#FFF",
    border: "none",
    padding: "8px 12px",
    borderRadius: "8px",
    cursor: "pointer"
  }

};

export default Monitoring;