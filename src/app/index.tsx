
import { TodoProvider } from 'context/todoContext';
import AppUI from 'app/AppUI';
// import './App.css'


function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  )
}

export default App
