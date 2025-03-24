import React, { useState, useMemo, useCallback } from "react";

const ExpensiveComponent = ({ count }) => {
  // Memoizing the factorial calculation
  const factorial = useMemo(() => {
    console.log("Calculating factorial...");
    const calculateFactorial = (num) => {
      if (num <= 1) return 1;
      return num * calculateFactorial(num - 1);
    };
    return calculateFactorial(count);
  }, [count]); // Recalculates only when count changes

  return (
    <div>
      <h3>Factorial of {count} is: {factorial}</h3>
    </div>
  );
};

const Counter = () => {
  const [count, setCount] = useState(1);
  const [toggle, setToggle] = useState(false);

  // useCallback to memoize the increment function
  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>React Memoization Example</h2>
      <button onClick={increment}>Increment</button>
      <ExpensiveComponent count={count} />
      
      {/* Toggle button to check if ExpensiveComponent re-renders */}
      <button onClick={() => setToggle(!toggle)} style={{ marginTop: "10px" }}>
        Toggle State (Trigger Re-render)
      </button>
      <p>Toggle state: {toggle ? "ON" : "OFF"}</p>
    </div>
  );
};

export default Counter;
