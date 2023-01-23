import { useTodos } from '../hooks/useTodos';

const TodoTitle = () => {
  const { pendingTodos } = useTodos();
  return (
    <>
      <h1>Todos: {pendingTodos}</h1>
    </>
  );
};

export default TodoTitle;
