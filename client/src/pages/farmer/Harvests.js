import { useState } from "react";
import FarmerLayout from "../../layouts/FarmerLayout";

function Harvests() {
  const [harvests] = useState([
    {
      id: 1,
      season: "2026 Mid-Year",
      quantity: "2.4 Tons",
      quality: "A",
      status: "Approved"
    },
    {
      id: 2,
      season: "2025 End-Year",
      quantity: "3.1 Tons",
      quality: "B",
      status: "Reviewed"
    }
  ]);

  return (
    <FarmerLayout>

      <h1>🌾 Harvests</h1>
      <p>Track your cocoa production cycles and yield performance.</p>

      <div style={styles.grid}>
        {harvests.map((h) => (
          <div key={h.id} style={styles.card}>
            <h3>{h.season}</h3>
            <p>Quantity: {h.quantity}</p>
            <p>Quality Grade: {h.quality}</p>
            <span>{h.status}</span>
          </div>
        ))}
      </div>

    </FarmerLayout>
  );
}

const styles = {
  grid: { display: "grid", gap: 15, gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))" },
  card: { background: "#fff", padding: 15, borderRadius: 15 }
};

export default Harvests;