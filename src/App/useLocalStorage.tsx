import { useState } from "react";

const useLocalStorege = <T,>(itemName:string, initialValue:T): [T, (newTodos: T) => void] => {
  
    const localStorageTodos = localStorage.getItem(itemName);
    
    let parsedTodos:T;
    
    if(!localStorageTodos){
        localStorage.setItem(itemName, JSON.stringify(initialValue))
        parsedTodos = initialValue
    } else {
        parsedTodos = JSON.parse(localStorageTodos) as T;
    }

    const [item, setItem] = useState<T>(parsedTodos);

    const saveTodos = (newTodos:T) => {
        setItem(newTodos);
        localStorage.setItem(itemName, JSON.stringify(newTodos))
    }

    return [
    item,
    saveTodos
    ]

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