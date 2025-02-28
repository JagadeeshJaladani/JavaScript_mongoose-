import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  let message = "Keep going!";
  let textColor = "text-black";

  if (count > 10) {
    message = "Your numbers have reached higher!";
    textColor = "text-green-600";
  } else if (count < 0) {
    message = "Negative counter!";
    textColor = "text-red-600";
  }

  return (
    <div className="flex flex-col items-center p-5 border rounded-lg shadow-lg max-w-sm mx-auto">
      <h1 className="text-2xl font-bold">Counter: {count}</h1>
      <p className={`mt-2 text-lg font-medium ${textColor}`}>{message}</p>
      <div className="mt-4 flex gap-4">
        <button 
          onClick={decrement} 
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-700">
          Decrement
        </button>
        <button 
          onClick={increment} 
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700">
          Increment
        </button>
      </div>
    </div>
  );
}
