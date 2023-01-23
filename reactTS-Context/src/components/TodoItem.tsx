import { useTodos } from '../hooks/useTodos';
import { Todo } from '../interfaces/interfaces';

interface TodoItemsProps {
  todo: Todo;
}

const TodoItem = ({ todo }: TodoItemsProps) => {
  const { toggleTodo } = useTodos();

  return (
    <li
      style={{
        cursor: 'pointer',
        textDecoration: todo.completed ? 'line-through' : '',
      }}
      onDoubleClick={() => toggleTodo(todo.id)}
    >
      {todo.desc}
    </li>
  );
};

export default TodoItem;
