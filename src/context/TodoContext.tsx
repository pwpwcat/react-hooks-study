import { createContext, useState } from 'react'

type TodoContextType = {
    todos: string[]
    setTodos: React.Dispatch<React.SetStateAction<string[]>>
}
export const TodoContext = createContext<TodoContextType>({
    todos: [],
    setTodos: () => {},
})

export const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState<string[]>([])
    return (
        <TodoContext.Provider value={{ todos, setTodos }}>
            {children}
        </TodoContext.Provider>
    )
}
