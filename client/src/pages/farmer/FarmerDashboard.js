import FarmerLayout from "../../layouts/FarmerLayout";
import StatCard from "../../components/cards/StatCard";

function FarmerDashboard() {

  return (

    <FarmerLayout>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px"
        }}
      >

        <StatCard
          title="My Farms"
          value="3"
        />

        <StatCard
          title="Harvest Records"
          value="15"
        />

        <StatCard
          title="Compliance Score"
          value="82%"
        />

        <StatCard
          title="Recommendations"
          value="5"
        />

      </div>

    </FarmerLayout>

  );

}

export default FarmerDashboard;