import { FC, useEffect, useState } from "react"

function withStorageListener<T>(
    WrappedComponent: FC<T>
) {
    return function WrappedComponentWithStorageListener(props:Omit<T, "show" | "toggleShow">){
        
        const [storageChange, setStorageChange] = useState(false);

        useEffect(()=>{

            const functionHandler = (change: StorageEvent)=>{
                if(change.key=== "TODOS_V1"){
                    console.log('Hubo cambios en TODOS_V1');
                    setStorageChange(true)
                }
            }

            window.addEventListener('storage', functionHandler)

            return ()=>{
                window.removeEventListener('storage', functionHandler)
            }

        }, [])

        const toggleShow = ()=>{
            setStorageChange(false)
        }

        return (
            <WrappedComponent 
                {...(props as T)}
                show={storageChange}
                toggleShow={toggleShow}          
            />
        )
    }   
}

export { withStorageListener }