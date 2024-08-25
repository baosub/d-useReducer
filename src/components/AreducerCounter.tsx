import { useReducer } from 'react';

// Definimos el tipo de acciones posibles en nuestro reducer
type CounterAction = 
  | { type: 'INCREMENT' }
  | { type: 'DECREMENT' }
  | { type: 'RESET' };

// Definimos el tipo del estado que manejará el reducer
type CounterState = {
  count: number;
};

// Estado inicial para nuestro reducer
const initialState: CounterState = {
  count: 0
};

// Definimos la función reducer que se encargará de actualizar el estado
const counterReducer = (state: CounterState, action: CounterAction): CounterState => {
  // Usamos un switch para manejar los diferentes tipos de acciones
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 }; // Incrementa el valor de count en 1
    case 'DECREMENT':
      return { count: state.count - 1 }; // Decrementa el valor de count en 1
    case 'RESET':
      return { count: 0 }; // Reinicia el valor de count a 0
    default:
      return state; // Retorna el estado actual si la acción no coincide con ninguna
  }
};

const CounterComponent = () => {
  // useReducer recibe el reducer y el estado inicial y retorna el estado actual y la función dispatch
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div>
      {/* Muestra el valor actual del contador */}
      <h1>Count: {state.count}</h1>
      
      {/* Botón para incrementar el contador */}
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>
        Increment
      </button>
      
      {/* Botón para decrementar el contador */}
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>
        Decrement
      </button>
      
      {/* Botón para reiniciar el contador */}
      <button onClick={() => dispatch({ type: 'RESET' })}>
        Reset
      </button>
    </div>
  );
};

export default CounterComponent;
