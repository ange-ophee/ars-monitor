import { useEffect, useState } from "react";
import API from "../services/api";

import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, BarChart, Bar } from "recharts";

import { FaUsers, FaSeedling, FaClipboardCheck, FaChartLine, FaExclamationTriangle } from "react-icons/fa";

function Dashboard() {

  const [summary, setSummary] = useState({});
  const [complianceData, setComplianceData] = useState([]);
  const [evaluationData, setEvaluationData] = useState([]);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {

    API.get("/dashboard/summary")
      .then((res) => {
        setSummary(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    setComplianceData([
      { month: "Jan", rate: 60 },
      { month: "Feb", rate: 68 },
      { month: "Mar", rate: 74 },
      { month: "Apr", rate: 80 },
      { month: "May", rate: 86 }
    ]);

    setEvaluationData([
      { name: "Compliant", value: 80 },
      { name: "Partial", value: 15 },
      { name: "Non-Compliant", value: 5 }
    ]);

    const userId = localStorage.getItem("userId");
    API.get(`/notifications/${userId}`)
      .then((res) => {
        setNotifications(res.data);
      })
      .catch((err) => console.log(err));

  }, []);

  return (

    <div style={styles.container}>

      {/* HEADER */}

      <div style={styles.header}>

        <div>

          <h1 style={styles.pageTitle}>
            Dashboard Overview
          </h1>

          <p style={styles.subtitle}>
            ARS 1000 Monitoring & Compliance Management Platform
          </p>

        </div>

      </div>

      {/* KPI CARDS */}

      <div style={styles.kpiGrid}>

        <div style={styles.kpiCard}>
          <FaUsers size={28} />
          <h3>{summary.totalFarmers || 0}</h3>
          <p>Total Farmers</p>
        </div>

        <div style={styles.kpiCard}>
          <FaSeedling size={28} />
          <h3>{summary.totalFarms || 0}</h3>
          <p>Total Farms</p>
        </div>

        <div style={styles.kpiCard}>
          <FaClipboardCheck size={28} />
          <h3>{summary.totalMonitoring || 0}</h3>
          <p>Monitoring Records</p>
        </div>

        <div style={styles.kpiCard}>
          <FaChartLine size={28} />
          <h3>{summary.totalEvaluations || 0}</h3>
          <p>Evaluations</p>
        </div>

      </div>

      {/* CHARTS */}

      <div style={styles.chartGrid}>

        <div style={styles.card}>

          <h3>Compliance Trend</h3>

          <ResponsiveContainer width="100%" height={300}>

            <LineChart data={complianceData}>

              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />

              <Line
                type="monotone"
                dataKey="rate"
                stroke="#1B5E20"
                strokeWidth={3}
              />

            </LineChart>

          </ResponsiveContainer>

        </div>

        <div style={styles.card}>

          <h3>Evaluation Results</h3>

          <ResponsiveContainer width="100%" height={300}>

            <BarChart data={evaluationData}>

              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />

              <Bar
                dataKey="value"
                fill="#C9A227"
              />

            </BarChart>

          </ResponsiveContainer>

        </div>

      </div>

      {/* LOWER GRID */}

      <div style={styles.lowerGrid}>

        <div style={styles.card}>

          <h3>Recent Activities</h3>

          <ul style={styles.list}>
            <li>New farm registered</li>
            <li>Evaluation completed</li>
            <li>Monitoring report submitted</li>
            <li>Farmer profile updated</li>
          </ul>

        </div>

        <div style={styles.card}>

          <h3>Recent Notifications</h3>

          {notifications.length === 0 ? (

            <p>No notifications available.</p>

          ) : (

            notifications.slice(0, 5).map(notification => (

              <div
                key={notification.id}
                style={{
                  padding: "10px 0",
                  borderBottom: "1px solid #EEE"
                }}
              >

                <p>{notification.message}</p>

                <small>
                  {notification.notification_type}
                </small>

              </div>

            ))

          )}

        </div>

        <div style={styles.card}>

          <h3>Quick Statistics</h3>

          <div style={styles.statsBox}>
            <p><strong>Average Compliance:</strong> 82%</p>
            <p><strong>Pending Evaluations:</strong> 14</p>
            <p><strong>Active Farms:</strong> {summary.totalFarms || 0}</p>
          </div>

        </div>

      </div>

      {/* ALERTS */}

      <div style={styles.alertCard}>

        <h3>
          <FaExclamationTriangle />
          {" "}Alerts & Risks
        </h3>

        <ul style={styles.list}>
          <li>5 farms require inspection</li>
          <li>12 monitoring records pending review</li>
          <li>2 evaluations below compliance threshold</li>
        </ul>

      </div>

      {/* RECOMMENDATIONS */}

      <div style={styles.card}>

        <h3>Recommendations</h3>

        <ul style={styles.list}>
          <li>Increase monitoring frequency in high-risk farms.</li>
          <li>Complete pending evaluations before next audit cycle.</li>
          <li>Improve compliance documentation records.</li>
        </ul>

      </div>

    </div>

  );

}

const styles = {

  container: {
    padding: "25px",
    background: "#F8F9FA",
    minHeight: "100vh"
  },

  header: {
    marginBottom: "30px"
  },

  pageTitle: {
    fontSize: "32px",
    color: "#1B5E20",
    marginBottom: "5px"
  },

  subtitle: {
    color: "#666"
  },

  kpiGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px",
    marginBottom: "25px"
  },

  kpiCard: {
    background: "#FFF",
    padding: "25px",
    borderRadius: "16px",
    textAlign: "center",
    boxShadow: "0 5px 15px rgba(0,0,0,0.08)"
  },

  chartGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(400px,1fr))",
    gap: "20px",
    marginBottom: "25px"
  },

  lowerGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(350px,1fr))",
    gap: "20px",
    marginBottom: "25px"
  },

  card: {
    background: "#FFF",
    padding: "25px",
    borderRadius: "16px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.08)"
  },

  alertCard: {
    background: "#FFF8E1",
    borderLeft: "5px solid #C9A227",
    padding: "25px",
    borderRadius: "16px",
    marginBottom: "25px"
  },

  list: {
    paddingLeft: "20px",
    lineHeight: "2"
  },

  statsBox: {
    lineHeight: "2"
  }

};

export default Dashboard;