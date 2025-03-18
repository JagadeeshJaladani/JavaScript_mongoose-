import React, { useState, memo } from "react";

// Custom Hook: useCounter
const useCounter = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return { count, increment, decrement };
};

const CounterDisplay = memo(({ count }) => {
  console.log("CounterDisplay re-rendered!");
  return <h2>Count: {count}</h2>;
});

const App = () => {
  const { count, increment, decrement } = useCounter();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>React.memo and Custom Hook Example</h1>
      <CounterDisplay count={count} />
      <button onClick={increment}>Increment</button>
      <button onClick={decrement} style={{ marginLeft: "10px" }}>
        Decrement
      </button>
    </div>
  );
};

export default App;
