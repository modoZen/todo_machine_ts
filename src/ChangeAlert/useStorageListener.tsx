import { useEffect, useState } from "react"

const useStorageListener = (sincronize: ()=>void) => {
    
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
        sincronize();
        setStorageChange(false)
    }

    return {
        show: storageChange,
        toggleShow
    } 
}

export { useStorageListener }