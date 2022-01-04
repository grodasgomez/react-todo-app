import './TodoList.css'
function TodoList(props: any) {
  return (
    <section className="todo-list__wrapper">
      <ul className="todo-list">
        {props.children}
      </ul>
    </section>
  )
}

export default TodoList
