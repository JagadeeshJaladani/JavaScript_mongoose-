import React from "react";
import useWindowWidth from "./useWindowWidth";

const App = () => {
  const width = useWindowWidth();

  return (
    <div className="max-w-lg mx-auto mt-10 p-4 bg-white shadow-lg rounded-lg text-center">
      <h2 className="text-2xl font-bold mb-4">React Custom Hook Example</h2>
      <p className="text-lg">Current Window Width: <strong>{width}px</strong></p>
    </div>
  );
};

export default App;
