import { useState, useEffect } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Count updated: ${count}`);
  }, [count]); // Runs when 'count' changes

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold">Counter: {count}</h1>
      <button 
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
    </div>
  );
}
