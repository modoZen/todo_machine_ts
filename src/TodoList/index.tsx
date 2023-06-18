import { FC, ReactNode } from "react";
import { ITodo } from "../App/useTodos";
import './TodoList.css'

interface Props {
    loading: boolean,
    error: boolean,
    searchedTodos: ITodo[],
    onError: ()=>ReactNode,
    onLoading: ()=>ReactNode,
    onEmpty:()=>ReactNode,
    render: (value:ITodo)=>ReactNode,
}

const TodoList:FC<Props> = ({
    loading,
    error,
    searchedTodos,
    onLoading,
    onEmpty,
    onError,
    render
}) => {

    return (
        <ul className="TodoList">
            {loading && onLoading()}
            {error && onError()}
            {(!loading && searchedTodos.length === 0) && onEmpty()}
            { searchedTodos.map(render) }
        </ul>
    )
}

export { TodoList }