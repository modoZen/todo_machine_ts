import { FC, ReactNode } from "react";
import './TodoList.css'

interface Props {
    children : ReactNode
}

const TodoList:FC<Props> = ({ children }) => {

    return (
        <ul className="TodoList">
            { children }
        </ul>
    )
}

export { TodoList }