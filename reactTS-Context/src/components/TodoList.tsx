import { useTodos } from '../hooks/useTodos';
import TodoItem from './TodoItem';

const TodoList = () => {
  const { todos } = useTodos();
  return (
    <>
      <h4>TodoList Component:</h4>

      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </>
  );
};

export default TodoList;
