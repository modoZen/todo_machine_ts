import { FC, useContext } from "react"
import { TodoButton } from "../TodoButton"
import { TodoCounter } from "../TodoCounter"
import { TodoItem } from "../TodoItem"
import { TodoList } from "../TodoList"
import { TodoSearch } from "../TodoSearch"
import { TodosError } from "../TodoError"
import { EmptyTodos } from "../EmptyTodo"
import { TodosLoading } from "../TodoLoading"
import { TodoContext } from "../TodoContext"
import { Modal } from "../Modal"
import { TodoForm } from "../TodoForm"

export const AppUI:FC = () => {

  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal
  } = useContext(TodoContext);

  return (
    <>
      <TodoCounter />
      <TodoSearch  />
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
      <TodoButton setOpenModal={setOpenModal} />

      {
        openModal && (
          <Modal>
            <TodoForm />
          </Modal>
        )
      }
    </>
  )
}
