import React, { useState } from "react";

function EvaluationForm({ onSubmit }) {

  const [form, setForm] = useState({
    farm_id: "",
    compliance_score: "",
    recommendations: ""
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
        placeholder="Score"
        onChange={(e) => setForm({ ...form, compliance_score: e.target.value })}
      />

      <textarea
        placeholder="Recommendations"
        onChange={(e) => setForm({ ...form, recommendations: e.target.value })}
      />

      <button type="submit">
        Submit Evaluation
      </button>

    </form>

  );
}

export default EvaluationForm;