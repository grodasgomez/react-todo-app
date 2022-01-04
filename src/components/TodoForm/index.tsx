import { TodoContext } from 'context/todoContext';
import { useContext, useState } from 'react';
import './TodoForm.css'
function TodoForm() {

  const [text, setText] = useState('');

  const { addTodo, setOpenModal } = useContext(TodoContext);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo(text);
    setText('');
    setOpenModal(false);
  }

  const onCancel = () => {
    setOpenModal(false);
  }
  return (
    <form onSubmit={onSubmit}>
      <h2>Create new todo</h2>
      <input type="text" placeholder="Build an amazing todo app" name="todo-text"
        value={text}
        className="form-input"
        onChange={(e) => setText(e.target.value)} />
      <div className="button-group">
        <button type="submit" className="button primary">Add</button>
        <button type="reset" className="button secondary" onClick={onCancel}>Cancel</button>
      </div>
    </form>
  )
}

export default TodoForm;