import { useState, lazy, Suspense } from "react";

// Lazy load heavy component
const HeavyComponent = lazy(() => import("./HeavyComponent"));

export default function App() {
  const [count, setCount] = useState(0);

  console.log("Parent component rendered");

  return (
    <div style={{ padding: "20px" }}>
      <h2>React.memo & Lazy Loading Demo</h2>

      <h3>Counter: {count}</h3>

      <button onClick={() => setCount(count + 1)}>
        Increment Counter
      </button>

      <hr />

      {/*  Suspense for lazy loading */}
      <Suspense fallback={<p>Loading Heavy Component...</p>}>
        <HeavyComponent />
      </Suspense>
    </div>
  );
}
