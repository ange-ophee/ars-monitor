import { useEffect, useState } from "react";
import API from "../services/api";

function Evaluations() {

  const [evaluations, setEvaluations] = useState([]);

  const [form, setForm] = useState({
    farm_id: "",
    evaluator_id: "",
    evaluation_date: "",
    compliance_score: "",
    evaluation_status: "Pending",
    recommendations: "",
    corrective_actions: ""
  });

  const [editId, setEditId] = useState(null);

  // FETCH
  const fetchEvaluations = () => {
    API.get("/evaluations")
      .then(res => setEvaluations(res.data))
      .catch(err => console.log(err));
  };

  useEffect(() => {
    fetchEvaluations();
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
      farm_id: "",
      evaluator_id: "",
      evaluation_date: "",
      compliance_score: "",
      evaluation_status: "Pending",
      recommendations: "",
      corrective_actions: ""
    });

    setEditId(null);
  };

  // SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId) {
      API.put(`/evaluations/${editId}`, form)
        .then(() => {
          fetchEvaluations();
          resetForm();
        });
    } else {
      API.post("/evaluations", form)
        .then(() => {
          fetchEvaluations();
          resetForm();
        });
    }
  };

  // DELETE
  const deleteEvaluation = (id) => {
    API.delete(`/evaluations/${id}`)
      .then(() => fetchEvaluations());
  };

  // EDIT
  const handleEdit = (item) => {

    setForm({
      farm_id: item.farm_id,
      evaluator_id: item.evaluator_id,
      evaluation_date: item.evaluation_date?.split("T")[0] || "",
      compliance_score: item.compliance_score,
      evaluation_status: item.evaluation_status,
      recommendations: item.recommendations,
      corrective_actions: item.corrective_actions
    });

    setEditId(item.id);

  };

  // STATUS STYLE
  const getStatusStyle = (status) => {

    switch (status) {

      case "Compliant":
        return { background: "#1B5E20", color: "white" };

      case "Non-Compliant":
        return { background: "#C62828", color: "white" };

      case "Partially Compliant":
        return { background: "#C9A227", color: "#1E1E1E" };

      default:
        return { background: "#444", color: "white" };

    }

  };

  // SCORE COLOR INTELLIGENCE
  const getScoreColor = (score) => {
    if (score >= 80) return "#1B5E20";
    if (score >= 50) return "#C9A227";
    return "#C62828";
  };

  return (

    <div style={styles.container}>

      {/* HEADER */}
      <div style={styles.header}>

        <h1 style={styles.title}>Evaluation & Compliance Engine</h1>

        <p style={styles.subtitle}>
          ARS 1000 compliance scoring, audit assessments, and sustainability verification system.
        </p>

      </div>

      {/* FORM */}
      <div style={styles.card}>

        <h3 style={styles.sectionTitle}>
          {editId ? "Update Evaluation Report" : "New Compliance Evaluation"}
        </h3>

        <form onSubmit={handleSubmit} style={styles.form}>

          <input
            type="number"
            name="farm_id"
            value={form.farm_id}
            onChange={handleChange}
            placeholder="Farm ID"
            style={styles.input}
            required
          />

          <input
            type="number"
            name="evaluator_id"
            value={form.evaluator_id}
            onChange={handleChange}
            placeholder="Evaluator ID"
            style={styles.input}
            required
          />

          <input
            type="date"
            name="evaluation_date"
            value={form.evaluation_date}
            onChange={handleChange}
            style={styles.input}
            required
          />

          <input
            type="number"
            min="0"
            max="100"
            step="0.01"
            name="compliance_score"
            value={form.compliance_score}
            onChange={handleChange}
            placeholder="Compliance Score"
            style={styles.input}
          />

          <select
            name="evaluation_status"
            value={form.evaluation_status}
            onChange={handleChange}
            style={styles.input}
          >
            <option value="Pending">Pending</option>
            <option value="Compliant">Compliant</option>
            <option value="Partially Compliant">Partially Compliant</option>
            <option value="Non-Compliant">Non-Compliant</option>
          </select>

          <textarea
            name="recommendations"
            value={form.recommendations}
            onChange={handleChange}
            placeholder="Recommendations"
            style={styles.inputFull}
            rows={4}
          />

          <textarea
            name="corrective_actions"
            value={form.corrective_actions}
            onChange={handleChange}
            placeholder="Corrective Actions"
            style={styles.inputFull}
            rows={4}
          />

          <button style={styles.submitBtn}>
            {editId ? "Update Evaluation" : "Save Evaluation"}
          </button>

        </form>

      </div>

      {/* TABLE */}
      <div style={styles.card}>

        <h3 style={styles.sectionTitle}>Compliance Records</h3>

        <div style={styles.tableWrapper}>

          <table style={styles.table}>

            <thead>
              <tr>
                <th>ID</th>
                <th>Farm</th>
                <th>Evaluator</th>
                <th>Date</th>
                <th>Score</th>
                <th>Status</th>
                <th>Recommendations</th>
                <th>Corrective Actions</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>

              {evaluations.map((item) => (

                <tr key={item.id}>

                  <td>{item.id}</td>

                  <td>{item.farm_id}</td>

                  <td>{item.evaluator_id}</td>

                  <td>{item.evaluation_date}</td>

                  <td>
                    <span
                      style={{
                        color: getScoreColor(item.compliance_score),
                        fontWeight: "700"
                      }}
                    >
                      {item.compliance_score}%
                    </span>
                  </td>

                  <td>
                    <span
                      style={{
                        ...styles.badge,
                        ...getStatusStyle(item.evaluation_status)
                      }}
                    >
                      {item.evaluation_status}
                    </span>
                  </td>

                  <td>{item.recommendations}</td>

                  <td>{item.corrective_actions}</td>

                  <td>

                    <div style={styles.actions}>

                      <button
                        onClick={() => handleEdit(item)}
                        style={styles.editBtn}
                      >
                        Edit
                      </button>

                      <button
                        onClick={() => deleteEvaluation(item.id)}
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

  sectionTitle: {
    marginBottom: "15px",
    borderBottom: "1px solid #EEE",
    paddingBottom: "10px"
  },

  form: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "15px"
  },

  input: {
    padding: "12px",
    borderRadius: "10px",
    border: "1px solid #DDD",
    background: "#FAFAFA"
  },

  inputFull: {
    gridColumn: "1 / -1",
    padding: "12px",
    borderRadius: "10px",
    border: "1px solid #DDD",
    background: "#FAFAFA",
    resize: "vertical"
  },

  submitBtn: {
    gridColumn: "1 / -1",
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
    borderRadius: "20px",
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
    padding: "8px 12px",
    borderRadius: "8px",
    cursor: "pointer"
  },

  deleteBtn: {
    background: "#C62828",
    color: "white",
    border: "none",
    padding: "8px 12px",
    borderRadius: "8px",
    cursor: "pointer"
  }

};

export default Evaluations;