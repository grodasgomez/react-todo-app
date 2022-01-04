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
// import './App.css'


function AppUI() {
  const { loading, filterTodos, todos, deleteTodo, toggleComplete } = useContext(TodoContext);


  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {
          loading ? <Skeleton /> :

            todos.length === 0 ? <p>No todos</p> :

              filterTodos.length === 0 ? <p>No todos match your search</p> :

                filterTodos.map((todo: Todo, index: number) => (
                  <TodoItem key={index} index={index} text={todo.text} completed={todo.completed}
                    toggleComplete={toggleComplete}
                    deleteTodo={deleteTodo}
                  />
                ))
        }

      </TodoList>
      <CreateTodoButton />
      <Modal>
        <TodoForm />

      </Modal>
    </>
  )
}

export default AppUI
