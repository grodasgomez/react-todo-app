import { TodoContext } from 'context/todoContext';
import { useContext } from 'react';
import './TodoCounter.css';

function TodoCounter() {
  const { completedTodos, totalTodos } = useContext(TodoContext);
  return (
    <h2 className="TodoCounter">You have completed {completedTodos} of {totalTodos} todo's </h2>
  );
}

export default TodoCounter;