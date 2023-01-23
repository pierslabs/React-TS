import { useMemo, useReducer } from 'react';
import { TodoState } from '../interfaces/interfaces';
import { TodoContext } from './TodoContext';
import { todoReducer } from './TodoReducer';

const INITIAL_STATE: TodoState = {
  todoCount: 2,
  todos: [
    {
      id: 1,
      desc: ' Esto es un todo de ejemplo',
      completed: false,
    },
    {
      id: 2,
      desc: ' Esto es un segundo todo de ejemplo',
      completed: false,
    },
  ],
  completed: 0,
  pending: 1,
};

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const TodoProvider = ({ children }: Props) => {
  const [todoState, dispatch] = useReducer(todoReducer, INITIAL_STATE);

  const toggleTodo = (id: number) => {
    dispatch({ type: 'toggleTodo', payload: { id } });
  };

  const value = useMemo(() => ({ todoState, toggleTodo }), [todoState]);

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

export default TodoProvider;
