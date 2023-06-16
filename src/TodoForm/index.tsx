import { FormEvent, useContext, useState } from "react"
import { TodoContext } from "../TodoContext"
import './TodoForm.css'

const TodoForm = () =>{

    const {
        addTodo,
        setOpenModal
    } = useContext(TodoContext);

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