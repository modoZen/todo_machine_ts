import { FC, useContext } from "react";
import { TodoContext } from "../TodoContext";
import './TodoSearch.css'

const TodoSearch:FC = () => {

    const {
        searchValue,
        setSearchValue
    } = useContext(TodoContext)

    return (
       <input 
        type="text" 
        className="TodoSearch" 
        placeholder="Ingresar nombre de tarea buscada" 
        value={searchValue}
        onChange={(event)=>{
            setSearchValue(event.target.value)
        }}
    />
    )
}

export { TodoSearch }