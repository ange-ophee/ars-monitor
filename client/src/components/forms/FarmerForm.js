import React, { useState } from "react";

function FarmerForm({ onSubmit }) {

  const [form, setForm] = useState({
    full_name: "",
    email: "",
    phone: "",
    region: ""
  });

  return (

    <form onSubmit={(e) => {
      e.preventDefault();
      onSubmit(form);
    }}>

      <input
        placeholder="Full name"
        onChange={(e) => setForm({ ...form, full_name: e.target.value })}
      />

      <input
        placeholder="Email"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />

      <input
        placeholder="Phone"
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
      />

      <input
        placeholder="Region"
        onChange={(e) => setForm({ ...form, region: e.target.value })}
      />

      <button type="submit">
        Save Farmer
      </button>

    </form>

  );
}

export default FarmerForm;