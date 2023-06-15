import { Dispatch, FC, SetStateAction } from "react";
import './TodoSearch.css'

interface Props {
    searchValue?: string,
    setSearchValue?: Dispatch<SetStateAction<string>>
}

const TodoSearch:FC<Props> = ({
    searchValue,
    setSearchValue
}) => {

    return (
       <input 
        type="text" 
        className="TodoSearch" 
        placeholder="Ingresar nombre de tarea buscada" 
        value={searchValue}
        onChange={(event)=>{
            // setSearchValue(event.target.value)
        }}
    />
    )
}

export { TodoSearch }