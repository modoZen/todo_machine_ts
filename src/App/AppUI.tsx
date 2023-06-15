import { FC } from "react"
import { TodoButton } from "../TodoButton"
import { TodoCounter } from "../TodoCounter"
import { TodoItem } from "../TodoItem"
import { TodoList } from "../TodoList"
import { TodoSearch } from "../TodoSearch"
import { TodosError } from "../TodoError"
import { EmptyTodos } from "../EmptyTodo"
import { TodosLoading } from "../TodoLoading"
import { TodoContext } from "../TodoContext"

// interface Props {
//     searchedTodos: ITodo[]
//     completedTodos: number,
//     totalTodos: number,
//     searchValue: string,
//     setSearchValue: Dispatch<SetStateAction<string>>
//     completeTodo: (v:string)=>void,
//     deleteTodo: (v:string)=>void,
//     loading: boolean,
//     error: boolean
// }

export const AppUI:FC = () => {
  return (
    <>
      <TodoCounter />
      <TodoSearch  />
      {
        <TodoContext.Consumer>
          {({
              searchedTodos,
              completeTodo,
              deleteTodo,
              loading,
              error
          })=>(
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

          )}
        </TodoContext.Consumer>
      }
      <TodoButton />
    </>
  )
}
