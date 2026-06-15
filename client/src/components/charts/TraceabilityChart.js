import React from "react";

function TraceabilityChart({ steps = [] }) {

  return (

    <div style={{
      background: "rgba(20,20,20,0.75)",
      border: "1px solid rgba(255,255,255,0.08)",
      borderRadius: "16px",
      padding: "20px",
      color: "white"
    }}>

      <h3>🌍 Traceability Flow</h3>

      <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        marginTop: "15px"
      }}>

        {steps.map((step, index) => (

          <div key={index} style={{
            display: "flex",
            alignItems: "center",
            gap: "10px"
          }}>

            <div style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              background: "#C9A227"
            }} />

            <div>{step}</div>

          </div>

        ))}

      </div>

    </div>

  );
}

export default TraceabilityChart;