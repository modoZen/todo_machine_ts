import { FC, useState } from "react";
import './TodoSearch.css'

const TodoSearch:FC = () => {

    const [searchValue, setSearchValue] = useState<string>('');

    console.log(`Los usuarios buscan pendientes de ${searchValue}`);

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