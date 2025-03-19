import React, { useState } from "react";

const UserGreeting = ({ isLoggedIn }) => {
  if (isLoggedIn) {
    return <h1>Welcome back, User!</h1>;
  } else {
    return <h1>Please log in.</h1>;
  }
};

const Notification = ({ hasMessages }) => (
  <div>
    <h2>Dashboard</h2>
    {hasMessages && <p>You have new messages!</p>}
  </div>
);

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [hasMessages, setHasMessages] = useState(true);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {/* Using if-else */}
      <UserGreeting isLoggedIn={isLoggedIn} />

      {/* Using && operator */}
      <Notification hasMessages={hasMessages} />

      {/* Using ternary operator */}
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>

      <button onClick={() => setHasMessages(!hasMessages)}>
        {hasMessages ? "Clear Messages" : "New Messages"}
      </button>
    </div>
  );
}
