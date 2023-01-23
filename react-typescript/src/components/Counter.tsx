import React, { useState } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increment = (numero: number = 1): void => {
    setCounter(counter + numero);
  };

  return (
    <>
      <h3>Counter</h3>
      <p>Valor: {counter}</p>
      <br />
      <button
        onClick={() => increment()}
        className="btn btn-outline-primary m-2"
      >
        +1
      </button>
      <button
        onClick={() => increment(2)}
        className="btn btn-outline-primary m-2"
      >
        +2
      </button>

      <button
        onClick={() => setCounter(0)}
        className="btn btn-outline-danger m-2"
      >
        reset
      </button>
    </>
  );
};

export default Counter;
