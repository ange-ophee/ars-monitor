import AuditorLayout from "../../layouts/AuditorLayout";
import StatCard from "../../components/cards/StatCard";

function AuditorDashboard() {

  return (

    <AuditorLayout>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px"
        }}
      >

        <StatCard
          title="Assigned Farms"
          value="24"
        />

        <StatCard
          title="Monitoring Sessions"
          value="18"
        />

        <StatCard
          title="Pending Evaluations"
          value="7"
        />

        <StatCard
          title="Corrective Actions"
          value="12"
        />

      </div>

    </AuditorLayout>

  );

}

export default AuditorDashboard;