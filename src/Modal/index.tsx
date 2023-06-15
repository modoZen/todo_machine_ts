import { FC, ReactNode } from "react"
import ReactDOM from "react-dom"
import './Modal.css'

interface Props {
    children: ReactNode
}

const Modal:FC<Props> = ({
    children
}) => {
    return (
        ReactDOM.createPortal(
            <div className="ModalBackground">
                { children }
            </div>,
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            document.getElementById('modal')!
        )
    )
}

export { Modal }