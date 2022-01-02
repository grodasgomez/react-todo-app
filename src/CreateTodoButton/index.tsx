import './CreateTodoButton.css'
import { Plus } from "tabler-icons-react"

export default function CreateTodoButton() {
  return (
    <button type="button" className="button-create">
      <Plus size={40}/>
    </button>
  )
}