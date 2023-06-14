import { FC } from "react"
import './TodoItem.css'

interface Props {
  text:string,
  completed: boolean
}

const TodoItem:FC<Props> = ( props ) => {
  return (
    <li className="TodoItem">
      <span className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}>V</span>
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>{props.text}</p>
      <span className="Icon Icon-delete">X</span>
    </li>
  )
}

export { TodoItem }