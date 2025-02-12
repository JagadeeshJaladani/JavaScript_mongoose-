//Difference Between State and Stateless Component
//Stateful Component: A component that maintains its own state. These are typically class components or function components that use useState or other state management tools.
//Stateless Component: A component that does not manage state internally. It receives props and renders UI based on them. Typically, these are functional components without useState.
// Stateful Component (Uses useState)
function Counter() {
    const [count, setCount] = React.useState(0);
    return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
}

// Stateless Component
function Message({ text }) {
    return <p>{text}</p>;
}

//useEffect – What, When, How?
//What? useEffect is a React Hook that performs side effects (like fetching data, subscribing to events, or updating the DOM).
//When? Runs after render, based on dependencies:
//Runs on mount (empty dependency []).
//Runs on state/prop updates (dependencies [state]).
//Runs on unmount (cleanup function).
import { useEffect, useState } from "react";

function Example() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Component mounted or count changed");

        return () => console.log("Cleanup when unmounting");
    }, [count]); // Runs when 'count' changes

    return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
}
//useState – What, When, How, Where?
//What? useState is a Hook that allows function components to maintain state.
//When? Use useState when a component needs to manage data that changes over time.
//How? Declare state and update it using a setter function.
//Where? Inside a functional component.
import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}
//React Chart
//React provides various chart libraries like Recharts, Chart.js, Victory, etc.
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
    { name: 'Jan', value: 400 },
    { name: 'Feb', value: 700 },
    { name: 'Mar', value: 200 }
];

function MyChart() {
    return (
        <LineChart width={400} height={300} data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid stroke="#ccc" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="value" stroke="blue" />
        </LineChart>
    );
}
//What is Handle in React?
//A handle refers to a function that manages events (like onClick, onChange).
//Typically prefixed with handle (e.g., handleClick, handleChange).
//Used for event handling.
function ButtonComponent() {
    const handleClick = () => {
        alert("Button clicked!");
    };

    return <button onClick={handleClick}>Click Me</button>;
}
