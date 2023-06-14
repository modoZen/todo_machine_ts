import { FC, ReactNode } from "react";

interface Props {
    children : ReactNode
}

const TodoList:FC<Props> = ({ children }) => {

    return (
        <ul>
            { children }
        </ul>
    )
}

export { TodoList }