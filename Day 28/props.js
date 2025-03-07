import React from "react";
import ReactDOM from "react-dom";

function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

function App() {
  return (
    <div>
      <Greeting name="Jagadeesh" />
      <Greeting name="John" />
      <Greeting name="Doe" />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
