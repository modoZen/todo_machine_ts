import { FC } from "react";
import './TodoButton.css'

const TodoButton:FC = () => {

    return (
        <button 
            className="TodoButton"
            onClick={(event)=>{
                console.log('le diste clic');
                console.log(event);
                console.log(event.target);
            }}
        >
            +
        </button>
    )
}

export { TodoButton }