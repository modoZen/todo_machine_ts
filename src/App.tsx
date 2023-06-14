import { FC, useState } from 'react'
import { TodoCounter } from './TodoCounter'
import { TodoSearch } from './TodoSearch'
import { TodoList } from './TodoList'
import { TodoButton } from './TodoButton'
import { TodoItem } from './TodoItem'

const defaultTodos = [
  { text: 'Construir un app TODO con TS', completed: true },
  { text: 'Reunirme con lider front', completed: false },
  { text: 'Reunirme con diseñador UI', completed: false },
  { text: 'Subir mi PR', completed: false },
];

const App:FC = () => {

  const [todos, setTodos] = useState<{
    text:string,
    completed:boolean
  }[]>(defaultTodos);

  const completedTodos:number = todos.filter(todo=>todo.completed).length;

  const totalTodos = todos.length;

  const [searchValue, setSearchValue] = useState<string>('');

  const searchedTodos = todos.filter(todo=> todo.text.toLowerCase().includes(searchValue.toLowerCase()));

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
            />
          ))
        }
      </TodoList>
      <TodoButton />
    </>
  )
}



export default App
