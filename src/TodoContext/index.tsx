import { Dispatch, FC, ReactNode, SetStateAction, createContext, useState } from "react";
import { useLocalStorege } from "./useLocalStorage";

export interface ITodo {
    text:string,
    completed:boolean
  }

interface Props {
    children: ReactNode
}

interface GlobalState {
    searchedTodos: ITodo[]
    completedTodos: number,
    totalTodos: number,
    searchValue: string,
    setSearchValue: Dispatch<SetStateAction<string>>
    addTodo: (v:string)=>void
    completeTodo: (v:string)=>void,
    deleteTodo: (v:string)=>void,
    loading: boolean,
    error: boolean,
    openModal: boolean,
    setOpenModal: Dispatch<SetStateAction<boolean>>
}

const TodoContext = createContext<GlobalState>({} as GlobalState);

const TodoProvider:FC<Props> = ({
    children
}) => {

    const {
        item: todos,
        saveTodos,
        loading,
        error,
      } = useLocalStorege<ITodo[]>('TODOS_V1', []);
    
      const completedTodos:number = todos.filter(todo=>todo.completed).length;
      const totalTodos:number = todos.length;
      const [searchValue, setSearchValue] = useState<string>('');
      const [openModal, setOpenModal] = useState(false);
    
      const searchedTodos = todos.filter(todo=> todo.text.toLowerCase().includes(searchValue.toLowerCase()));

      const addTodo = (text:string) => {
        const newTodos = [...todos]
        newTodos.push({
          text,
          completed: false
        })
        saveTodos(newTodos)
      }
    
      const completeTodo = (text: string) =>{
        const newTodos = todos.map(todo=>{
          if(todo.text === text) todo.completed = !todo.completed;
          return todo;
        })
        saveTodos(newTodos);
      }
    
      const deleteTodo = (text: string) => {
        const newTodos = todos.filter(todo=>todo.text !== text);
        saveTodos(newTodos);
      }

    return (
        <TodoContext.Provider value={{
            searchedTodos,
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            addTodo,
            completeTodo,
            deleteTodo,
            loading,
            error,
            openModal,
            setOpenModal,
        }}>
            {children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider }