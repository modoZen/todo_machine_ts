import { Dispatch, FC, SetStateAction } from "react"
import { ITodo } from "."
import { TodoButton } from "../TodoButton"
import { TodoCounter } from "../TodoCounter"
import { TodoItem } from "../TodoItem"
import { TodoList } from "../TodoList"
import { TodoSearch } from "../TodoSearch"

interface Props {
    searchedTodos: ITodo[]
    completedTodos: number,
    totalTodos: number,
    searchValue: string,
    setSearchValue: Dispatch<SetStateAction<string>>
    completeTodo: (v:string)=>void,
    deleteTodo: (v:string)=>void,
}

export const AppUI:FC<Props> = ({
    searchedTodos,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    completeTodo,
    deleteTodo
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
