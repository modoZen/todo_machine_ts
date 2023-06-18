import { FC, ReactNode, Children, cloneElement, ReactElement } from "react";

interface Props {
    loading:boolean,
    children: ReactNode
}

const TodoHeader:FC<Props> = ({
    loading,
    children
}) => {

    return (
        <header>
            { Children.toArray(children).map((child)=>cloneElement(child as ReactElement, { loading } )) }
        </header>
    )
}

export { TodoHeader }