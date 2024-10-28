import { createContext, useContext } from "react"


export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: " Todo msg",
            completed: false
        }
    ],
    addTodo: (todo) => {

    },
    updateTodo: (id, todo)=>{

    },
    removeTodo: (id) => {

    },
    toggleComplete: (completed)=>{

    }
});

export const TodoContextProvider = TodoContext.Provider

export const useTodo = () => {
    return useContext(TodoContext)
}