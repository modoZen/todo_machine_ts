import { FC } from "react"

interface Props {
  text:string
}

const TodoItem:FC<Props> = ( props ) => {
  return (
    <li>
      <span>V</span>
      <p>{props.text}</p>
      <span>X</span>
    </li>
  )
}

export { TodoItem }