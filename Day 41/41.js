import React, { useState } from "react";

const UserGreeting = ({ isLoggedIn, userRole }) => (
  <h1>
    {isLoggedIn 
      ? `Welcome back, ${userRole === "admin" ? "Admin" : "User"}!` 
      : "Please log in."}
  </h1>
);

const Notification = ({ hasMessages }) => (
  <div>
    <h2>Dashboard</h2>
    {hasMessages ? <p>You have new messages! 📩</p> : <p>No new messages.</p>}
  </div>
);

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [hasMessages, setHasMessages] = useState(true);
  const [userRole, setUserRole] = useState("user"); // "user" or "admin"

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {/* Conditional rendering using ternary operator */}
      <UserGreeting isLoggedIn={isLoggedIn} userRole={userRole} />

      {/* Messages section */}
      <Notification hasMessages={hasMessages} />

      {/* Login/Logout Button */}
      <button 
        onClick={() => setIsLoggedIn(!isLoggedIn)}
        style={{ padding: "10px", margin: "10px", cursor: "pointer" }}
      >
        {isLoggedIn ? "Logout" : "Login"}
      </button>

      {/* Toggle Messages */}
      <button 
        onClick={() => setHasMessages(!hasMessages)}
        style={{ padding: "10px", margin: "10px", cursor: "pointer" }}
      >
        {hasMessages ? "Clear Messages" : "New Messages"}
      </button>

      {/* Toggle User Role */}
      {isLoggedIn && (
        <button 
          onClick={() => setUserRole(userRole === "admin" ? "user" : "admin")}
          style={{ padding: "10px", margin: "10px", cursor: "pointer" }}
        >
          Switch to {userRole === "admin" ? "User" : "Admin"}
        </button>
      )}
    </div>
  );
}
