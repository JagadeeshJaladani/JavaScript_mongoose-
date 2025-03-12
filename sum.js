import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const maxLimit = 10;
  const minLimit = 0;

  const increment = () => {
    if (count < maxLimit) setCount(count + 1);
  };

  const decrement = () => {
    if (count > minLimit) setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="flex flex-col items-center gap-4 p-6 border rounded-lg shadow-lg w-72 mx-auto mt-10 bg-white">
      <h1 className="text-2xl font-bold">Counter: {count}</h1>
      <div className="flex gap-4">
        <button 
          className={`px-4 py-2 rounded-md text-white ${count >= maxLimit ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-700'}`}
          onClick={increment}
          disabled={count >= maxLimit}
        >
          Increment
        </button>
        <button 
          className={`px-4 py-2 rounded-md text-white ${count <= minLimit ? 'bg-gray-400 cursor-not-allowed' : 'bg-red-500 hover:bg-red-700'}`}
          onClick={decrement}
          disabled={count <= minLimit}
        >
          Decrement
        </button>
      </div>
      <button 
        className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-700"
        onClick={reset}
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
