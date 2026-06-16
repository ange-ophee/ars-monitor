import FarmerLayout from "../../layouts/FarmerLayout";

function ComplianceStatus() {
  const score = 82;

  const getColor = () => {
    if (score >= 80) return "#16A34A";
    if (score >= 60) return "#CA8A04";
    return "#DC2626";
  };

  return (
    <FarmerLayout>

      <h1>📊 Compliance Status</h1>

      <div style={styles.card}>
        <h2 style={{ color: getColor() }}>
          {score}%
        </h2>

        <p>
          Your farm is currently in a GOOD compliance state.
          Keep improving documentation and sustainability practices.
        </p>

        <ul>
          <li>✔ Waste management compliant</li>
          <li>✔ Harvest tracking active</li>
          <li>⚠ Improve pesticide reporting</li>
        </ul>
      </div>

    </FarmerLayout>
  );
}

const styles = {
  card: {
    background: "#fff",
    padding: 20,
    borderRadius: 15,
    boxShadow: "0 10px 25px rgba(0,0,0,0.06)"
  }
};

export default ComplianceStatus;