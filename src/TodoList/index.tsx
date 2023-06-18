import { FC, ReactNode } from "react";
import { ITodo } from "../App/useTodos";
import './TodoList.css'

interface Props {
    loading: boolean,
    error: boolean,
    searchedTodos: ITodo[],
    totalTodos:number,
    onError: ()=>ReactNode,
    onLoading: ()=>ReactNode,
    onEmpty:()=>ReactNode,
    render?:(value:ITodo)=>ReactNode,
    searchText:string,
    onEmptySearchResults:(value:string)=>ReactNode,
    children:(todo:ITodo)=>ReactNode,
}

const TodoList:FC<Props> = ({
    loading,
    error,
    searchedTodos,
    totalTodos,
    onLoading,
    onEmpty,
    onError,
    render,
    searchText,
    onEmptySearchResults,
    children,
}) => {

    return (
        <ul className="TodoList">
            {loading && onLoading()}
            {error && onError()}
            {(!loading && !totalTodos) && onEmpty()}
            {(!loading && totalTodos && !searchedTodos.length) && onEmptySearchResults(searchText) }
            { searchedTodos.map(render || children)  }
        </ul>
    )
}

export { TodoList }