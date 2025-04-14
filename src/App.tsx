import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';


function MultiCounter() {

  const [contador, setContador] = useState(0);

  useEffect(() => {
    console.log(`Cambio el contador: ${contador}`);

  }, [contador]);

  return (
    <div className='MultiCounter' style={{ padding: "2rem" }}>
      <header className='MultiCounter-Header'>
        <h1>MultiCounter with React</h1>
      </header>

      <div>
        <h2>Counter: {contador}</h2>
        <button onClick = {() => setContador(contador + 1)}>Incrementar</button>
        <button onClick = {() => setContador(contador - 1)}>Decrementar</button>
        <button onClick = {() => setContador(0)}>Reiniciar</button>
      </div>
      
    </div>
  );
}

export default MultiCounter;
