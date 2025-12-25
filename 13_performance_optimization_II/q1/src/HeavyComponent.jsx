import React from "react";

function HeavyComponent() {
  console.log("HeavyComponent rendered");

  // Simulate heavy UI
  let total = 0;
  for (let i = 0; i < 1_000_000; i++) {
    total += i;
  }

  return (
    <div style={{ background: "#eee", padding: "20px" }}>
      <h3>Heavy Component</h3>
      <p>Expensive calculation result: {total}</p>
    </div>
  );
}

// React.memo prevents re-render
export default React.memo(HeavyComponent);
