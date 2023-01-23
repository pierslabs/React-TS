import { useReducer } from 'react';

const initialState = {
  contador: 10,
};

type ActionType =
  | { type: 'incrementar' }
  | { type: 'decrementar' }
  | { type: 'reset' }
  | { type: 'custom'; payload: number };

const contadorReducer = (state: typeof initialState, action: ActionType) => {
  switch (action.type) {
    case 'incrementar':
      return {
        ...state,
        contador: state.contador + 1,
      };
    case 'decrementar':
      return {
        ...state,
        contador: state.contador - 1,
      };
    case 'reset':
      return {
        ...state,
        contador: 0,
      };
    case 'custom':
      return {
        ...state,
        contador: action.payload,
      };

    default:
      return state;
  }
};

const CounterReducer = () => {
  const [contadorState, dispatch] = useReducer(contadorReducer, initialState);
  return (
    <>
      <h4>Contador : {contadorState.contador}</h4>
      <button
        onClick={() => dispatch({ type: 'incrementar' })}
        className="btn btn-outline-success m-2"
      >
        +1
      </button>

      <button
        onClick={() => dispatch({ type: 'decrementar' })}
        className="btn btn-outline-success m-2"
      >
        -1
      </button>
      <button
        onClick={() => dispatch({ type: 'reset' })}
        className="btn btn-outline-danger m-2"
      >
        reset
      </button>

      <button
        onClick={() => dispatch({ type: 'custom', payload: 500 })}
        className="btn btn-outline-warning m-2"
      >
        reset
      </button>
    </>
  );
};

export default CounterReducer;
