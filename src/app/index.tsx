import { useState } from 'react'
import CreateTodoButton from 'components/CreateTodoButton';
import useLocalStorageState from 'hooks/useLocalStorageState';
import TodoCounter from 'components/TodoCounter';
import TodoItem from 'components/TodoItem';
import TodoList from 'components/TodoList';
import TodoSearch from 'components/TodoSearch';
import { Todo } from 'types';
// import './App.css'

const defaultTodos: Todo[] = [{
  text: 'Learn about React',
  completed: false
},
{
  text: 'Meet friend for lunch',
  completed: false
},
{
  text: 'Build really cool todo app',
  completed: false
},
{
  text: 'Get a job',
  completed: true

}, {
  text: 'Buy a house djaslkdjsalkdjsalkdjsaldkjsadlkasjdlkasjdlaskjdsalkjdsalkjdsalkjdsalkd',
  completed: true
}]
function App() {

  const { item: todos, setItem: setTodos, loading } = useLocalStorageState<Todo[]>('todo_v1', defaultTodos);

  const [searchValue, setSearchValue] = useState('');

  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;
  const filterTodos = todos.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()));

  const toggleComplete = (text: string) => {
    const index = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  }

  const deleteTodo = (text: string) => {
    const newTodos = todos.filter(todo => todo.text !== text);
    setTodos(newTodos);
  }

  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
        {
          loading ? <p>Loading...</p> :
          
          todos.length === 0 ? <p>No todos</p> :

          filterTodos.length === 0 ? <p>No todos match your search</p> :

          filterTodos.map((todo: Todo, index: number) => (
            <TodoItem key={index} text={todo.text} completed={todo.completed}
              toggleComplete={toggleComplete}
              deleteTodo={deleteTodo}
            />
          ))
        }
      </TodoList>
      <CreateTodoButton />
    </>
  )
}

export default App
