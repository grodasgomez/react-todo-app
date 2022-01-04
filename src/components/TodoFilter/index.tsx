import { TodoContext } from 'context/todoContext';
import { useContext } from 'react';
import './TodoFilter.css'
function TodoFilter() {
  const { filter, setFilter } = useContext(TodoContext);

  const onFilter = (filter: 'all' | 'active' | 'completed') => {
    setFilter(filter);
  }
  return (
    <div className="todo-filter__wrapper">
      <div className="todo-filter">
        <a className={`todo-filter__item ${filter === 'all' ? 'active' : ''}`}
          onClick={() => onFilter('all')}>
          All
        </a>
        <a className={`todo-filter__item ${filter === 'active' ? 'active' : ''}`}
          onClick={() => onFilter('active')}>
          Active
        </a>
        <a className={`todo-filter__item ${filter === 'completed' ? 'active' : ''}`}
          onClick={() => onFilter('completed')}>
          Completed
        </a>
      </div>
    </div>
  )
}
export default TodoFilter;