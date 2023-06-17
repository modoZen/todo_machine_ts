import { FC, ReactNode } from "react";

interface Props {
    children: ReactNode
}

const TodoHeader:FC<Props> = ({
    children
}) => {

    return (
        <header>
            { children }
        </header>
    )
}

export { TodoHeader }