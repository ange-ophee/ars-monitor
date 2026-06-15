import React from "react";

function FarmersTable({ farmers = [] }) {

  return (

    <div style={{
      background: "rgba(20,20,20,0.75)",
      padding: "20px",
      borderRadius: "16px",
      color: "white",
      overflowX: "auto"
    }}>

      <h3>👨‍🌾 Farmers List</h3>

      <table style={{ width: "100%", marginTop: "10px" }}>

        <thead>
          <tr style={{ textAlign: "left", color: "#ccc" }}>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Region</th>
          </tr>
        </thead>

        <tbody>
          {farmers.map((f, i) => (
            <tr key={i}>
              <td>{f.full_name}</td>
              <td>{f.email}</td>
              <td>{f.phone}</td>
              <td>{f.region}</td>
            </tr>
          ))}
        </tbody>

      </table>

    </div>

  );
}

export default FarmersTable;