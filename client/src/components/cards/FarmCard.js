import React from "react";

function FarmCard({
  farmName,
  location,
  size,
  status = "Active",
  riskLevel = "Low"
}) {

  const statusColor =
    status === "Active"
      ? "#2E7D32"
      : "#C62828";

  const riskColor =
    riskLevel === "High"
      ? "#C62828"
      : riskLevel === "Medium"
      ? "#F9A825"
      : "#2E7D32";

  return (

    <div style={{
      background: "rgba(20,20,20,0.75)",
      border: "1px solid rgba(255,255,255,0.08)",
      borderRadius: "16px",
      padding: "18px",
      color: "white",
      boxShadow: "0 8px 25px rgba(0,0,0,0.4)"
    }}>

      <h3 style={{ margin: 0 }}>
        🌱 {farmName}
      </h3>

      <p style={{ color: "#bbb", margin: "6px 0" }}>
        📍 {location}
      </p>

      <p style={{ margin: "6px 0" }}>
        📏 Size: {size} ha
      </p>

      <div style={{
        display: "flex",
        justifyContent: "space-between",
        marginTop: "12px"
      }}>

        <span style={{
          background: statusColor,
          padding: "5px 10px",
          borderRadius: "10px",
          fontSize: "12px"
        }}>
          {status}
        </span>

        <span style={{
          background: riskColor,
          padding: "5px 10px",
          borderRadius: "10px",
          fontSize: "12px"
        }}>
          Risk: {riskLevel}
        </span>

      </div>

    </div>

  );
}

export default FarmCard;