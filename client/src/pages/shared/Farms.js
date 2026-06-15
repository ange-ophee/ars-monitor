import { useEffect, useState } from "react";
import API from "../../api/axios";

function Farms() {
  const [farms, setFarms] = useState([]);

  useEffect(() => {
    const fetchFarms = async () => {
      try {
        const res = await API.get("/farms");
        setFarms(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchFarms();
  }, []);

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Farms Overview</h2>

      <div style={styles.grid}>
        {farms.map((farm) => (
          <div key={farm.id} style={styles.card}>
            <h3>{farm.farm_name}</h3>
            <p>Location: {farm.location}</p>
            <p>Size: {farm.size_hectares} ha</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: { padding: "20px", color: "white" },
  title: { marginBottom: "20px" },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "15px",
  },
  card: {
    background: "rgba(0,0,0,0.5)",
    padding: "15px",
    borderRadius: "12px",
    border: "1px solid rgba(255,255,255,0.1)",
  },
};

export default Farms;