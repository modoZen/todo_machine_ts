import { FC } from "react";
import './TodoSearch.css'

const TodoSearch:FC = () => {

    return (
       <input type="text" className="TodoSearch" placeholder="Ingresar nombre de tarea buscada" />
    )
}

export { TodoSearch }