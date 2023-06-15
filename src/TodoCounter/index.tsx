import { FC, useContext } from "react";
import { TodoContext } from "../TodoContext";
import './TodoCounter.css'


const TodoCounter:FC = () => {

    const {
        completedTodos,
        totalTodos
    } = useContext(TodoContext)
 
    return (
        <h1 className="TodoCounter">Has completado <span>{completedTodos}</span>  de <span>{totalTodos}</span></h1>
    )
}

export { TodoCounter }