import { FC } from "react";
import './TodoCounter.css'

interface Props {
    loading?:boolean,
    completedTodos: number,
    totalTodos: number,
}

const TodoCounter:FC<Props> = ({
    loading,
    completedTodos,
    totalTodos
}) => {
 
    return (
        <h1 className={`TodoCounter ${loading && "TodoCounter--loading"}`}>Has completado <span>{completedTodos}</span>  de <span>{totalTodos}</span></h1>
    )
}

export { TodoCounter }