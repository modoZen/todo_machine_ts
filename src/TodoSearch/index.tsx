import { FC, Dispatch, SetStateAction } from "react";
import './TodoSearch.css';

interface Props {
    loading?:boolean,
    searchValue: string,
    setSearchValue: Dispatch<SetStateAction<string>>
}

const TodoSearch:FC<Props> = ({
    loading,
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
            setSearchValue(event.target.value)
        }}
        disabled={loading}
    />
    )
}

export { TodoSearch }