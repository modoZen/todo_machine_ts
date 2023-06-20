import { useEffect, useState } from "react";

const useLocalStorege = <T,>(itemName:string, initialValue:T) => {

    const [item, setItem] = useState<T>(initialValue);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [synchronizedItem , setSynchronizedItem] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            try {
                const localStorageTodos = localStorage.getItem(itemName);
                let parsedItem:T;
                if(!localStorageTodos){
                    localStorage.setItem(itemName, JSON.stringify(initialValue))
                    parsedItem = initialValue
                } else {
                    parsedItem = JSON.parse(localStorageTodos) as T;
                }
                saveItem(parsedItem);
                setLoading(false);
                setSynchronizedItem(true);    
            } catch (err) {
                setError(true);
            }
        }, 2000);
    }, [synchronizedItem])
    
    const saveItem = (newTodos:T) => {
        setItem(newTodos);
        localStorage.setItem(itemName, JSON.stringify(newTodos))
    }

    const sincronizeItem = () => {
        setLoading(true);
        setSynchronizedItem(false);
    }

    return {
        item,
        saveItem,
        loading,
        error,
        sincronizeItem,
    }

}

export { useLocalStorege }

// const defaultTodos = [
//   { text: 'Construir un app TODO con TS', completed: true },
//   { text: 'Reunirme con lider front', completed: false },
//   { text: 'Reunirme con diseñador UI', completed: false },
//   { text: 'Subir mi PR', completed: false },
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
// localStorage.removeItem('TODOS_V1');