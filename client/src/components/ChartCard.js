import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

function ChartCard({ title, data }) {

  return (
    <div className="card" style={{ marginTop: "20px" }}>

      <h3 style={{ marginBottom: "10px" }}>{title}</h3>

      <div style={{ width: "100%", height: 250 }}>

        <ResponsiveContainer>

          <LineChart data={data}>

            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />

            <Line
              type="monotone"
              dataKey="value"
              stroke="#1B5E20"
              strokeWidth={3}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}

export default ChartCard;