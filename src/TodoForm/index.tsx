import { Dispatch, FC, FormEvent, SetStateAction, useState } from "react"
import './TodoForm.css'

interface Props {
    addTodo: (v:string)=>void,
    setOpenModal: Dispatch<SetStateAction<boolean>>
}

const TodoForm:FC<Props> = ({
    addTodo,
    setOpenModal
}) =>{

    const [newTodoText, setNewTodoText] = useState('');

    const onCancel = ()=>{
        setOpenModal(false);
    }

    const onSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addTodo(newTodoText);
        setOpenModal(false);
    }

    return(
        <form onSubmit={onSubmit}>
            <label>Escribe tu nueva tarea pendiente</label>
            <textarea 
                placeholder="Hola, que haremos hoy?"
                value={newTodoText}
                onChange={(event)=>{
                    setNewTodoText(event.target.value)
                }}
            />
            <div className="TodoForm-buttonContainer">
                <button
                    type="button"
                    onClick={onCancel}
                    className="TodoForm-button TodoForm-button--cancel"
                >
                    Cancelar
                </button>
                <button
                    type="submit"
                    className="TodoForm-button TodoForm-button--add"
                >
                    Añadir
                </button>
            </div>
        </form>
    )
}

export { TodoForm }