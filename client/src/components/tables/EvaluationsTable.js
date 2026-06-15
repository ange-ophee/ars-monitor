import React from "react";

function EvaluationsTable({ evaluations = [] }) {

  const getColor = (status) => {
    if (status === "Certified") return "#2E7D32";
    if (status === "Compliant") return "#F9A825";
    if (status === "Needs Improvement") return "#EF6C00";
    return "#C62828";
  };

  return (

    <div style={{
      background: "rgba(20,20,20,0.75)",
      padding: "20px",
      borderRadius: "16px",
      color: "white",
      overflowX: "auto"
    }}>

      <h3>📊 Evaluations</h3>

      <table style={{ width: "100%", marginTop: "10px" }}>

        <thead>
          <tr style={{ color: "#ccc", textAlign: "left" }}>
            <th>Farm</th>
            <th>Score</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {evaluations.map((e, i) => (
            <tr key={i}>
              <td>{e.farm_name}</td>
              <td>{e.compliance_score}%</td>
              <td style={{ color: getColor(e.evaluation_status) }}>
                {e.evaluation_status}
              </td>
            </tr>
          ))}
        </tbody>

      </table>

    </div>

  );
}

export default EvaluationsTable;