import { FC } from 'react'
import { AppUI } from './AppUI'
import { TodoProvider } from '../TodoContext'

const App:FC = () => {

  return (
    <TodoProvider>
      <AppUI /> 
    </TodoProvider>
  )
}



export default App
