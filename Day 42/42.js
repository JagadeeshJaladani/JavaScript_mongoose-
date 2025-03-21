import React, { useState } from "react";

const Notification = ({ hasMessages }) => (
  <div>
    <h2>Dashboard</h2>
    {hasMessages && <p>You have new messages! 📩</p>}
  </div>
);

export default function App() {
  const [hasMessages, setHasMessages] = useState(true);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {/* Messages Section (Only visible when hasMessages is true) */}
      <Notification hasMessages={hasMessages} />

      {/* Toggle Messages Button */}
      <button 
        onClick={() => setHasMessages(!hasMessages)}
        style={{ padding: "10px", margin: "10px", cursor: "pointer" }}
      >
        {hasMessages ? "Clear Messages" : "New Messages"}
      </button>
    </div>
  );
}
