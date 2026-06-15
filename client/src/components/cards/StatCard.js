import React from "react";

function StatCard({
  title,
  value,
  icon,
  color = "#2E7D32"
}) {

  return (

    <div style={{
      background: "rgba(20,20,20,0.75)",
      border: "1px solid rgba(255,255,255,0.08)",
      borderRadius: "16px",
      padding: "20px",
      color: "white",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      boxShadow: "0 8px 25px rgba(0,0,0,0.4)"
    }}>

      {/* LEFT */}
      <div>

        <h4 style={{
          margin: 0,
          fontSize: "14px",
          color: "#ccc"
        }}>
          {title}
        </h4>

        <h2 style={{
          margin: "8px 0 0 0",
          fontSize: "28px",
          color: "white"
        }}>
          {value}
        </h2>

      </div>

      {/* ICON */}
      <div style={{
        fontSize: "28px",
        background: color,
        padding: "10px",
        borderRadius: "12px"
      }}>
        {icon}
      </div>

    </div>

  );
}

export default StatCard;