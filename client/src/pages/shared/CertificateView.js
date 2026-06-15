import { useEffect, useState } from "react";
import API from "../../api/axios";

function CertificateView() {
  const [certs, setCerts] = useState([]);

  useEffect(() => {
    const fetchCerts = async () => {
      try {
        const res = await API.get("/certifications");
        setCerts(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchCerts();
  }, []);

  return (
    <div style={styles.container}>
      <h2>Certificates</h2>

      {certs.map((c) => (
        <div key={c.id} style={styles.card}>
          <h3>Certificate #{c.certificate_number}</h3>
          <p>Status: {c.certification_status}</p>
          <p>Issue: {c.issue_date}</p>
          <p>Expiry: {c.expiry_date}</p>
        </div>
      ))}
    </div>
  );
}

const styles = {
  container: { padding: 20, color: "white" },
  card: {
    background: "rgba(0,0,0,0.6)",
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
  },
};

export default CertificateView;