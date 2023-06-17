import { FC } from "react";
import './TodoCounter.css'

interface Props {
    completedTodos: number,
    totalTodos: number,
}

const TodoCounter:FC<Props> = ({
    completedTodos,
    totalTodos
}) => {
 
    return (
        <h1 className="TodoCounter">Has completado <span>{completedTodos}</span>  de <span>{totalTodos}</span></h1>
    )
}

export { TodoCounter }