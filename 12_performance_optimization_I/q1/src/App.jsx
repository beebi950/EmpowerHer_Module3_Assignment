import { useState, useMemo, useCallback } from "react";
import ProductList from "./ProductList";

const productsData = [
  { id: 1, name: "Laptop", price: 800 },
  { id: 2, name: "Phone", price: 500 },
  { id: 3, name: "Headphones", price: 200 },
];

export default function App() {
  const [counter, setCounter] = useState(0);
  const [products] = useState(productsData);

  // ✅ useMemo: recalculates ONLY when products change
  const totalPrice = useMemo(() => {
    console.log("Calculating total price...");
    return products.reduce((sum, product) => sum + product.price, 0);
  }, [products]);

  // ✅ useCallback: stable function reference
  const handleProductSelect = useCallback((product) => {
    console.log("Selected product:", product.name);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>React Performance Optimization</h2>

      <h3>Total Price: ₹{totalPrice}</h3>

      <button onClick={() => setCounter(counter + 1)}>
        Increment Counter ({counter})
      </button>

      <ProductList
        products={products}
        onProductSelect={handleProductSelect}
      />
    </div>
  );
}
