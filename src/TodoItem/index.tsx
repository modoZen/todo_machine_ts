import { FC } from "react"
import { BiCheckCircle } from 'react-icons/bi'
import { TiDelete } from 'react-icons/ti'
import './TodoItem.css'

interface Props {
  text:string,
  completed: boolean,
  onComplete: ()=>any
  onDelete: ()=>any
}

const TodoItem:FC<Props> = ({
  text,
  completed,
  onComplete,
  onDelete
}) => {
  return (
    <li className="TodoItem">
      {/* <span 
      >V</span> */}
      <BiCheckCircle
        className={`Icon Icon-check ${completed && "Icon-check--active"}`}
        onClick={onComplete}
      />
      <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>{text}</p>
      {/* <span 
      >X</span> */}
      <TiDelete 
        className="Icon Icon-delete"
        onClick={onDelete}
      />
    </li>
  )
}

export { TodoItem }