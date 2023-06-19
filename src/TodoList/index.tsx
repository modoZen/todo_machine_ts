import { FC, ReactNode } from "react";
import { ITodo } from "../App/useTodos";
import './TodoList.css'

interface CommonProps {
    loading: boolean,
    error: boolean,
    searchedTodos: ITodo[],
    totalTodos:number,
    onError: ()=>ReactNode,
    onLoading: ()=>ReactNode,
    onEmpty:()=>ReactNode,
    searchText:string,
    onEmptySearchResults:(value:string)=>ReactNode,
}

type ConditionalProps = {
    render:(value:ITodo)=>ReactNode,
    children?:never,
} | {
    render?:never,
    children:(todo:ITodo)=>ReactNode,
}

type Props = CommonProps & ConditionalProps

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