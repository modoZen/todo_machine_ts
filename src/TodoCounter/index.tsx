import { FC } from "react";
import './TodoCounter.css'

interface Props {
    completed: number,
    total: number
}

const TodoCounter:FC<Props> = ({ completed, total}) => {

    return (
        <h1 className="TodoCounter">Has completado <span>{completed}</span>  de <span>{total}</span></h1>
    )
}

export { TodoCounter }