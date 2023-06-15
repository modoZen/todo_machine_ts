import { FC, useState } from 'react'
import { useLocalStorege } from './useLocalStorage'
import { AppUI } from './AppUI'


export interface ITodo {
  text:string,
  completed:boolean
}

const App:FC = () => {

  const {
    item: todos,
    saveTodos,
    loading,
    error,
  } = useLocalStorege<ITodo[]>('TODOS_V1', []);

  const completedTodos:number = todos.filter(todo=>todo.completed).length;
  const totalTodos:number = todos.length;
  const [searchValue, setSearchValue] = useState<string>('');

  const searchedTodos = todos.filter(todo=> todo.text.toLowerCase().includes(searchValue.toLowerCase()));

  const completeTodo = (text: string) =>{
    const newTodos = todos.map(todo=>{
      if(todo.text === text) todo.completed = !todo.completed;
      return todo;
    })
    saveTodos(newTodos)
  }

  const deleteTodo = (text: string) => {
    const newTodos = todos.filter(todo=>todo.text !== text);
    saveTodos(newTodos);
  }

  return (
    <AppUI 
      searchedTodos={searchedTodos}
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
      loading={loading}
      error={error}
    />
  )
}



export default App
