import CooperativeLayout from "../../layouts/CooperativeLayout";
import StatCard from "../../components/cards/StatCard";

function CooperativeDashboard() {

  return (

    <CooperativeLayout>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px"
        }}
      >

        <StatCard
          title="Total Farmers"
          value="128"
        />

        <StatCard
          title="Total Farms"
          value="74"
        />

        <StatCard
          title="Traceability Records"
          value="256"
        />

        <StatCard
          title="Quality Score"
          value="88%"
        />

      </div>

    </CooperativeLayout>

  );

}

export default CooperativeDashboard;