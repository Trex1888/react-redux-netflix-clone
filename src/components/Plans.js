import React from "react";
import "../styles/Plans.css";

function Plans() {
  return (
    <div className="plans">
      <p>Renewal date: 07/01/2021</p>
      <h4>NetFlix Standard</h4>
      <h5>1080p</h5>
      <button>Subscribe</button>
      <h4>NetFlix Basic</h4>
      <h5>480p</h5>
      <button>Subscribe</button>
      <h4>NetFlix Premium</h4>
      <h5>4K+HDR</h5>
      <button>Current Package</button>
    </div>
  );
}

export default Plans;
