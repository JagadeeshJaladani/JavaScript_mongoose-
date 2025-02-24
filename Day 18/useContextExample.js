import React, { useState } from 'react';
import UseContext from './hooks/UseContext';
import UseMemo from './hooks/UseMemo';

function App() {
  const [selectedHook, setSelectedHook] = useState("useContext");

  const renderSelectedHook = () => {
    switch (selectedHook) {
      case "useContext":
        return <UseContext />;
      case "useMemo":
        return <UseMemo />;
      default:
        return <UseContext />;
    }
  };

  return (
    <div>
      <h2>Learn about react</   h2>
      <label> Select your hook: </label>
      <select
        value={selectedHook}
        onChange={e => setSelectedHook(e.target.value)}
      >
        <option value="useContext">Learn UseContext</option>
        <option value="useMemo">Learn UseMemo</option>
      </select>
      {renderSelectedHook()}
    </div>
  );
}

export default App;