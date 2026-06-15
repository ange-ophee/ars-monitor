import { useEffect, useState } from "react";
import API from "../../api/axios";

function TraceabilityView() {
  const [trace, setTrace] = useState([]);

  useEffect(() => {
    const fetchTrace = async () => {
      try {
        const res = await API.get("/traceability");
        setTrace(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchTrace();
  }, []);

  return (
    <div style={styles.container}>
      <h2>Traceability Chain</h2>

      {trace.map((t) => (
        <div key={t.id} style={styles.card}>
          <p><b>Batch:</b> {t.batch_id}</p>
          <p><b>Action:</b> {t.action_type}</p>
          <p><b>Location:</b> {t.location}</p>
          <p><b>Date:</b> {new Date(t.action_date).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
}

const styles = {
  container: { padding: 20, color: "white" },
  card: {
    background: "rgba(0,0,0,0.6)",
    marginBottom: 10,
    padding: 15,
    borderRadius: 10,
  },
};

export default TraceabilityView;