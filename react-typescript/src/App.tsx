import React from 'react';
import Counter from './components/Counter';
import CounterReducer from './components/CounterReducer';
import Form from './components/Form';
import TimerPadre from './components/TimerPadre';
import USer from './components/USer';

const App = () => {
  return (
    <div className="container mt-5">
      <h1>React + TypeScript</h1>
      <hr />
      <h2>useState</h2>
      <Counter />
      <USer />
      <hr />
      <h2>useEffect - useRef</h2>
      <TimerPadre />
      <hr />
      <h2>Counter Reducer</h2>
      <CounterReducer />
      <hr />
      <h2>CustomHooks - Form</h2>
      <Form />
    </div>
  );
};

export default App;
