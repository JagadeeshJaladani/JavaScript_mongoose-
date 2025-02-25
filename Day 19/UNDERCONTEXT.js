import React, { useState, useEffect, createContext, useContext, useMemo } from "react";

// Create a context
const CountContext = createContext();

const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <CountContext.Provider value={{ count, setCount }}>
      {children}
    </CountContext.Provider>
  );
};

const Counter = () => {
  const { count, setCount } = useContext(CountContext);

  const doubledCount = useMemo(() => count * 2, [count]);

  return (
    <div>
      <h2>Counter: {count}</h2>
      <h3>Doubled: {doubledCount}</h3>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};

const App = () => {
  return (
    <CounterProvider>
      <Counter />
    </CounterProvider>
  );
};

export default App;

import React from "react"
const use