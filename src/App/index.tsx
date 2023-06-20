import { FC } from 'react'

import { TodoButton } from "../TodoButton"
import { TodoCounter } from "../TodoCounter"
import { TodoItem } from "../TodoItem"
import { TodoList } from "../TodoList"
import { TodoSearch } from "../TodoSearch"
import { TodosError } from "../TodoError"
import { EmptyTodos } from "../EmptyTodo"
import { TodosLoading } from "../TodoLoading"
import { Modal } from "../Modal"
import { TodoForm } from "../TodoForm"
import { TodoHeader } from "../TodoHeader"
import { useTodos } from './useTodos'
import { ChangeAlertWithStorageListener } from '../ChangeAlert'

const App: FC = () => {

  const {
    loading,
    error,
    searchedTodos,
    addTodo,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    sincronizeTodos,
  } = useTodos();

  return (
    <>
      <TodoHeader
        loading={loading}
      >
        <TodoCounter
          completedTodos={completedTodos}
          totalTodos={totalTodos}
          // loading={loading}
        />
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          // loading={loading}
        />
      </TodoHeader>
      <TodoList
        loading={loading}
        error={error}
        onLoading={()=>(
          <>
            <TodosLoading />
            <TodosLoading />
            <TodosLoading />
          </>
        )}
        onError={()=>(
          <TodosError />
        )}
        onEmpty={()=><EmptyTodos />}
        searchedTodos={searchedTodos}
        searchText={searchValue}
        totalTodos={totalTodos}
        onEmptySearchResults={
          (searchText)=>(<p>No hay resultado para {searchText}</p>)
        }
        // render={(todo) => (
        //   <TodoItem
        //     key={todo.text}
        //     text={todo.text}
        //     completed={todo.completed}
        //     onComplete={() => { completeTodo(todo.text) }}
        //     onDelete={() => { deleteTodo(todo.text) }}
        //   />
        // )}
      >
        {
          (todo) => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => { completeTodo(todo.text) }}
              onDelete={() => { deleteTodo(todo.text) }}
            />
          )
        }
      </TodoList>
      <TodoButton setOpenModal={setOpenModal} />

      {
        openModal && (
          <Modal>
            <TodoForm
              addTodo={addTodo}
              setOpenModal={setOpenModal}
            />
          </Modal>
        )
      }

      <ChangeAlertWithStorageListener sincronizeTodos={sincronizeTodos} />
    </>
  )
}



export default App
