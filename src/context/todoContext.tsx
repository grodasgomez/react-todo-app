import { createContext, useState } from 'react';
import useLocalStorageState from 'hooks/useLocalStorageState';
import { Todo } from 'types';
import { defaultTodos } from 'utils/todoConstants';
import JSConfetti from 'js-confetti';

export type ITodoContext = {
  todos: Todo[];
  setTodos: (todos: Todo[]) => void;
  openModal: boolean;
  setOpenModal: (openModal: boolean) => void;
  loading: boolean;
  completedTodos: number;
  totalTodos: number;
  filterTodos: Todo[];
  searchValue: string;
  setSearchValue: (searchValue: string) => void;
  toggleComplete: (text: string) => void;
  deleteTodo: (text: string) => void;
  addTodo: (text: string) => void;
  editTodo: (index: number, text: string) => void;
}
const TodoContext = createContext<ITodoContext>({} as ITodoContext);
//   todos: [],
//   setTodos: () => { },
//   loading: true,
//   completedTodos: 0,
//   totalTodos: 0,
//   filterTodos: [],
//   searchValue: '',
//   setSearchValue: () => { },
//   toggleComplete: () => { },
//   deleteTodo: () => { },

// });

function TodoProvider(props: any) {
  const jsConfetti = new JSConfetti();

  const { item: todos, setItem: setTodos, loading } = useLocalStorageState<Todo[]>('todo_v1', defaultTodos);

  const [searchValue, setSearchValue] = useState('');

  const [openModal, setOpenModal] = useState(false);

  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;
  const filterTodos = todos.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()));

  const toggleComplete = (text: string) => {
    const index = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    const isCompleted = newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);

    isCompleted && jsConfetti.addConfetti();
  }

  const deleteTodo = (text: string) => {
    const newTodos = todos.filter(todo => todo.text !== text);
    setTodos(newTodos);
  }

  const addTodo = (text: string) => {
    const newTodos = [...todos, { text, completed: false }];
    setTodos(newTodos);
  }

  const editTodo = (index: number, text: string) => {
    const newTodos = [...todos];
    newTodos[index].text = text;
    setTodos(newTodos);
  }
  return (
    <TodoContext.Provider value={{
      todos,
      setTodos,
      loading,
      completedTodos,
      totalTodos,
      filterTodos,
      searchValue,
      setSearchValue,
      toggleComplete,
      deleteTodo,
      addTodo,
      editTodo,
      openModal,
      setOpenModal
    }}
    >
      {props.children}
    </ TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };