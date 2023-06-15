import { Dispatch, FC, SetStateAction } from "react"
import { ITodo } from "."
import { TodoButton } from "../TodoButton"
import { TodoCounter } from "../TodoCounter"
import { TodoItem } from "../TodoItem"
import { TodoList } from "../TodoList"
import { TodoSearch } from "../TodoSearch"
import { TodosError } from "../TodoError"
import { EmptyTodos } from "../EmptyTodo"
import { TodosLoading } from "../TodoLoading"

interface Props {
    searchedTodos: ITodo[]
    completedTodos: number,
    totalTodos: number,
    searchValue: string,
    setSearchValue: Dispatch<SetStateAction<string>>
    completeTodo: (v:string)=>void,
    deleteTodo: (v:string)=>void,
    loading: boolean,
    error: boolean
}

export const AppUI:FC<Props> = ({
    searchedTodos,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    completeTodo,
    deleteTodo,
    loading,
    error
}) => {
  return (
    <>

      <TodoCounter 
        completed={completedTodos} 
        total={totalTodos} 
        />
      <TodoSearch 
        searchValue={searchValue} 
        setSearchValue={setSearchValue} 
        />
      <TodoList>
        {loading && (
          <>
            <TodosLoading />
            <TodosLoading />
            <TodosLoading />
          </>
        )}
        {error && <TodosError />}
        {(!loading && searchedTodos.length === 0) && <EmptyTodos />}
        {
          searchedTodos.map(todo=>(
            <TodoItem 
              key={todo.text} 
              text={todo.text} 
              completed={todo.completed}
              onComplete={()=>{completeTodo(todo.text)}}
              onDelete={()=>{deleteTodo(todo.text)}}
            />
          ))
        }
      </TodoList>
      <TodoButton />
    </>
  )
}
