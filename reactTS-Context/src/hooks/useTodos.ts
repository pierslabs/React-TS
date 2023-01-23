import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

export const useTodos = () => {
  const { todoState, toggleTodo } = useContext(TodoContext);

  const { todos } = todoState;

  return {
    todos: todoState.todos,
    toggleTodo,
    pendingTodos: todos.filter((todo) => !todo.completed).length,
  };
};
