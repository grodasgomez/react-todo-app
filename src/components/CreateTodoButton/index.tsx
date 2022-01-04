import './CreateTodoButton.css'
import { Plus } from "tabler-icons-react"
import { TodoContext } from 'context/todoContext'
import { useContext } from 'react'

export default function CreateTodoButton() {
  const { openModal, setOpenModal } = useContext(TodoContext);
  return (
    <button type="button" className={`button-create ${openModal ? 'close' : ''}`}
      onClick={() => setOpenModal(!openModal)}>
      <Plus size={40} />
    </button>
  )
}