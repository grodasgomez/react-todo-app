import { TodoContext } from 'context/todoContext';
import { useContext } from 'react';
import ReactDOM from 'react-dom'
import { Props } from 'types/props';
import './Modal.css'

function Modal({ children }: Props) {
  const { openModal, setOpenModal } = useContext(TodoContext)
  return ReactDOM.createPortal(
    openModal &&
    <div className="modal-wrapper" onClick={()=> setOpenModal(false)}>
      <div className="modal-content" onClick={(event)=> event.stopPropagation()}>
        {children}
      </div>
    </div>,
    document.getElementById('modal') as Element
  );
}

export default Modal;