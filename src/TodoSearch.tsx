import { FC } from "react";
import './TodoSearch.css'

const TodoSearch:FC = () => {

    return (
       <input 
        type="text" 
        className="TodoSearch" 
        placeholder="Ingresar nombre de tarea buscada" 
        onChange={(event)=>{
            console.log('Escribiste en el search');
            console.log(event);
            console.log(event.target);
            console.log(event.target.value);
        }}
    />
    )
}

export { TodoSearch }