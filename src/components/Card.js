import React, { useState } from "react";

export default function Card(props) {
  const [name, setName] = useState("John"); // Set initial name to 'John'

  function changeName(e) {
    e.preventDefault();
    setName((prevName) => (prevName === "John" ? "cena" : "John"));
  }

  return (
    <div>
      <p>{name}</p>
      <button  data-testid="democlick" onClick={changeName}>
        Change Name
      </button>
    </div>
  );
}
