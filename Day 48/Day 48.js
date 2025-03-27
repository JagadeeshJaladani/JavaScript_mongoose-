import React, { useState } from "react";

const ItemList = ({ items }) => {
  return (
    <div>
      <h2>Shopping List</h2>
      {items.length > 0 ? (
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        <p>No items in the list. 🛒</p>
      )}
    </div>
  );
};

export default function App() {
  const [items, setItems] = useState(["Milk", "Bread", "Eggs"]);

  const addItem = () => {
    const newItem = prompt("Enter a new item:");
    if (newItem) setItems([...items, newItem]);
  };

  const clearList = () => setItems([]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {/* Conditionally render list */}
      <ItemList items={items} />

      {/* Buttons to Add and Clear Items */}
      <button onClick={addItem} style={{ padding: "10px", margin: "10px" }}>
        Add Item
      </button>
      <button onClick={clearList} style={{ padding: "10px", margin: "10px" }}>
        Clear List
      </button>
    </div>
  );
}
