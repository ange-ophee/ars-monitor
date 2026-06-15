import AdminLayout from "../../layouts/AdminLayout";
import StatCard from "../../components/cards/StatCard";

function AdminDashboard() {

  return (

    <AdminLayout>

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
          title="Evaluations"
          value="53"
        />

        <StatCard
          title="Certificates"
          value="39"
        />

      </div>

    </AdminLayout>

  );
}

export default AdminDashboard;