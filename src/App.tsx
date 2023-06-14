import { FC } from 'react'
import './App.css'
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

  return (
    <>
      <TodoCounter completed={3} total={4} />
      <TodoSearch />
      <TodoList>
        {
          defaultTodos.map(todo=>(
            <TodoItem key={todo.text} text={todo.text} />
          ))
        }
      </TodoList>
      <TodoButton />
    </>
  )
}



export default App
