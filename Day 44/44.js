import React, { useState } from "react";

const UserGreeting = ({ isLoggedIn }) => {
  return <h1>{isLoggedIn ? "Welcome back, User!" : "Please log in."}</h1>;
};

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {/* Conditional Rendering using ternary operator */}
      <UserGreeting isLoggedIn={isLoggedIn} />

      {/* Conditional rendering of button text */}
      <button 
        onClick={() => setIsLoggedIn(!isLoggedIn)}
        style={{ padding: "10px", margin: "10px", cursor: "pointer" }}
      >
        {isLoggedIn ? "Logout" : "Login"}
      </button>

      {/* Display a message only when logged in */}
      {isLoggedIn && <p>You're now logged in! 🎉</p>}
    </div>
  );
}
