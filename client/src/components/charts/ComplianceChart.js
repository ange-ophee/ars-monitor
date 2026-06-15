import React from "react";

function ComplianceChart({ score = 0 }) {

  const color =
    score >= 90 ? "#2E7D32" :
    score >= 75 ? "#F9A825" :
    score >= 50 ? "#EF6C00" :
    "#C62828";

  return (

    <div style={{
      background: "rgba(20,20,20,0.75)",
      border: "1px solid rgba(255,255,255,0.08)",
      borderRadius: "16px",
      padding: "20px",
      color: "white"
    }}>

      <h3>📊 ARS Compliance Score</h3>

      <div style={{
        height: "18px",
        width: "100%",
        background: "rgba(255,255,255,0.1)",
        borderRadius: "10px",
        marginTop: "10px"
      }}>

        <div style={{
          width: `${score}%`,
          height: "100%",
          background: color,
          borderRadius: "10px",
          transition: "0.3s"
        }} />

      </div>

      <p style={{ marginTop: "10px" }}>
        Score: <b>{score}%</b>
      </p>

    </div>

  );
}

export default ComplianceChart;