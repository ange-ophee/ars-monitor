import React, { useState } from "react";

function MonitoringForm({ onSubmit }) {

  const [form, setForm] = useState({
    farm_id: "",
    observations: "",
    disease_presence: "",
    production_status: ""
  });

  return (

    <form onSubmit={(e) => {
      e.preventDefault();
      onSubmit(form);
    }}>

      <input
        placeholder="Farm ID"
        onChange={(e) => setForm({ ...form, farm_id: e.target.value })}
      />

      <input
        placeholder="Disease presence"
        onChange={(e) => setForm({ ...form, disease_presence: e.target.value })}
      />

      <input
        placeholder="Production status"
        onChange={(e) => setForm({ ...form, production_status: e.target.value })}
      />

      <textarea
        placeholder="Observations"
        onChange={(e) => setForm({ ...form, observations: e.target.value })}
      />

      <button type="submit">
        Save Monitoring
      </button>

    </form>

  );
}

export default MonitoringForm;