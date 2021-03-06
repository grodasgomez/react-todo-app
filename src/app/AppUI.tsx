import { useContext } from 'react'
import CreateTodoButton from 'components/CreateTodoButton';
import TodoCounter from 'components/TodoCounter';
import TodoItem from 'components/TodoItem';
import TodoList from 'components/TodoList';
import TodoSearch from 'components/TodoSearch';
import { Todo } from 'types';
import { TodoContext } from 'context/todoContext';
import Modal from 'components/Modal';
import TodoForm from 'components/TodoForm';
import Skeleton from 'components/Skeleton';
import TodoFilter from 'components/TodoFilter';
import './App.css'


function AppUI() {
  const { loading, filterTodos, todos } = useContext(TodoContext);

  return (
    <div className="app">
      <TodoCounter />
      <TodoFilter />
      <TodoSearch />
      <TodoList>
        {
          loading ? <Skeleton /> :

            todos.length === 0 ? <p>No todos</p> :

              filterTodos.length === 0 ? <p>No todos match your search</p> :

                filterTodos.map((todo: Todo, index: number) => (
                  <TodoItem key={todo.text} index={index} text={todo.text} completed={todo.completed} />
                ))
        }

      </TodoList>

      <CreateTodoButton />
      <Modal>
        <TodoForm />
      </Modal>
    </div>
  )
}

export default AppUI
