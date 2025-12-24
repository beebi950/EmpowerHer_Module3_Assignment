import { useState, useMemo, useCallback } from "react";
import ProductList from "./ProductList";

const productsData = Array.from({ length: 10000 }, (_, i) => ({
  id: i,
  name: `Product ${i}`,
  price: i + 1
}));

export default function App() {
  const [counter, setCounter] = useState(0);

  /* Without useMemo:
     This would run on EVERY render
  */
  const totalPrice = useMemo(() => {
    console.log("🔁 Calculating total price...");
    return productsData.reduce((sum, p) => sum + p.price, 0);
  }, [productsData]);

  /*Without useCallback:
     New function reference on every render
  */
  const handleSelectProduct = useCallback((product) => {
    console.log("Selected:", product.name);
  }, []);

  console.log("🔄 App rendered");

  return (
    <div>
      <h1>Total Price: ₹{totalPrice}</h1>

      <h2>Counter: {counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>
        Increment Counter
      </button>

      <ProductList
        products={productsData}
        onSelectProduct={handleSelectProduct}
      />
    </div>
  );
}
