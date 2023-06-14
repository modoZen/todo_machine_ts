import { FC } from 'react'
import './App.css'

const App:FC = () => {

  return (
    <>
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </>
  )
}

const TodoItem:FC = () => {
  return (
    <li>
      <span>V</span>
      <p>Construir un app TODO con TS</p>
      <span>X</span>
    </li>
  )
}

export default App
