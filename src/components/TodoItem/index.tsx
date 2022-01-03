import './TodoItem.css'
import { Check, X } from 'tabler-icons-react';
function TodoItem(props: {
  text: string,
  completed: boolean,
  toggleComplete: (text: string) => void;
  deleteTodo: (text: string) => void;
}) {
  const { text, completed, toggleComplete, deleteTodo } = props;


  return (
    <li className={`todo-item ${completed ? 'completed' : ''}`}>
      <span className="todo-item__check" onClick={() => toggleComplete(text)}><Check /></span>
      <p>{text}</p>
      <span className="todo-item__delete" onClick={() => deleteTodo(text)}><X /></span>
    </li>
  )
}
export default TodoItem
