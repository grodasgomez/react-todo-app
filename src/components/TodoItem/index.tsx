import './TodoItem.css'
import { Check, X } from 'tabler-icons-react';
import { useContext, useState } from 'react';
import { TodoContext } from 'context/todoContext';
function TodoItem(props: {
  text: string,
  completed: boolean,
  index: number;
}) {
  const { text, completed,  index } = props;
  const { editTodo, toggleComplete, deleteTodo} = useContext(TodoContext);
  const [editText, setEditText] = useState(text);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditText(e.target.value);
  }
  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setEditText(editText);
      e.currentTarget.blur();
    }
  }
  const onBlur = () => {
    editTodo(index, editText);
  }
  return (
    <li className={`todo-item ${completed ? 'completed' : ''}`}>
      <span className="todo-item__check" onClick={() => toggleComplete(text)}><Check /></span>
      <span className="todo-item__text">
        <input
          type="text"
          className="todo-item__input"
          aria-label="todo-text"
          disabled={completed}
          value={editText}
          onChange={onChange}
          onKeyDown={onKeyDown}
          onBlur={onBlur}
        />
      </span>
      <span className="todo-item__delete" onClick={() => deleteTodo(text)}><X /></span>
    </li>
  )
}
export default TodoItem
