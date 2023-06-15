import { Dispatch, FC, SetStateAction } from "react";
import './TodoButton.css'



const TodoButton:FC<{
    setOpenModal: Dispatch<SetStateAction<boolean>>
}> = ({
    setOpenModal
}) => {

    return (
        <button 
            className="TodoButton"
            onClick={()=>{
                setOpenModal((prevState)=>!prevState)
            }}
        >
            +
        </button>
    )
}

export { TodoButton }