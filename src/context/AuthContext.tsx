import { createContext, useState } from 'react'

type AuthContextType = {
    isAuthenticated: boolean
    setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>
}
export const AuthContext = createContext<AuthContextType>({
    isAuthenticated: false,
    setIsAuthenticated: () => {},
})

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
            {children}
        </AuthContext.Provider>
    )
}
