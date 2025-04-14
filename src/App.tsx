import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function MultiCounter() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    console.log(`Cambio el contador: ${contador}`);
  }, [contador]);

  return (
    <div className="MultiCounter" style={{ padding: "2rem" }}>
      <header className="App-header">
        <h1>MultiCounter with React</h1>
      </header>

      <div>
        <h2>Counter: {contador}</h2>
      </div>

      <div>
        <button
          onClick={() => setContador(contador + 1)}
          style={{
            padding: "8px 16px",
            margin: "0 5px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "4px",
          }}
        >
          Incrementar
        </button>

        <button
          onClick={() => setContador(contador - 1)}
          style={{
            padding: "8px 16px",
            margin: "0 5px",
            backgroundColor: "#f44336",
            color: "white",
            border: "none",
            borderRadius: "4px",
          }}
        >
          Decrementar
        </button>

        <button
          onClick={() => setContador(0)}
          style={{
            padding: "8px 16px",
            margin: "0 5px",
            backgroundColor: "gray",
            color: "white",
            border: "none",
            borderRadius: "4px",
          }}
        >
          Reiniciar
        </button>
      </div>
    </div>
  );
}

export default MultiCounter;
