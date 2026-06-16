import FarmerLayout from "../../layouts/FarmerLayout";

function Recommendations() {

  const tips = [
    "Improve drying process to increase cocoa quality grade.",
    "Update pesticide usage logs weekly for ARS compliance.",
    "Increase traceability documentation accuracy.",
    "Schedule next farm inspection within 14 days."
  ];

  return (
    <FarmerLayout>

      <h1>💡 Recommendations</h1>
      <p>Personalized insights to improve your farm performance.</p>

      <div style={styles.grid}>
        {tips.map((t, i) => (
          <div key={i} style={styles.card}>
            {t}
          </div>
        ))}
      </div>

    </FarmerLayout>
  );
}

const styles = {
  grid: {
    display: "grid",
    gap: 15
  },
  card: {
    background: "#fff",
    padding: 15,
    borderRadius: 15,
    boxShadow: "0 10px 25px rgba(0,0,0,0.06)"
  }
};

export default Recommendations;