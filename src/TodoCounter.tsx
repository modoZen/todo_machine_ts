import { FC } from "react";

interface Props {
    completed: number,
    total: number
}

const TodoCounter:FC<Props> = ({ completed, total}) => {

    return (
        <h1>Has completado {completed} de {total}</h1>
    )
}

export { TodoCounter }