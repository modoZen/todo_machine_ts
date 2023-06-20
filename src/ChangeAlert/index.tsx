import { FC } from 'react'
import { withStorageListener } from "./withStorageListener"
import './ChangeAlert.css'

interface Props {
    show: boolean,
    toggleShow: ()=>void,
    sincronizeTodos:()=>void
}

const ChangeAlert:FC<Props> = ({
    show,
    toggleShow,
    sincronizeTodos
})=> {

    if(show){
        return(
            <div className='ChangeAlert-bg'>
                <div className='ChangeAlert-container'>
                    <p>Parece que cambiaste tus TODOs en otra pestaña o ventana del navegador.</p>
                    <p>¿Quieres sincronizar tus TODOs?</p>
                    <button
                        className="TodoForm-button TodoForm-button--add"
                        onClick={()=>{
                            toggleShow();
                            sincronizeTodos();
                        }}
                    >
                        Yes!
                    </button>

                </div>
            </div>
        )
    } else {
        return null
    }
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export { ChangeAlertWithStorageListener }