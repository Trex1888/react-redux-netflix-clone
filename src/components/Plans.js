import React, { useState } from "react";
import "../styles/Plans.css";

function Plans() {
  const [state] = useState([
    {
      id: 1,
      plan: "Basic",
      pixel: "480p",
      button: "Subscribe",
    },
    { id: 2, plan: "Standard", pixel: "1080p", button: "Subscribe" },
    { id: 3, plan: "Premium", pixel: "4K+HDR", button: "Subscribe" },
  ]);

  return (
    <div className="plansScreen">
      {state.map((info) => (
        <div className="plansScreen __plan" key={info.id}>
          <div className="plansScreen__info">
            <h4>{info.plan} ~</h4>
            <h5>{info.pixel}</h5>
            <button>{info.button}</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Plans;
