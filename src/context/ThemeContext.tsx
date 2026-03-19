import { createContext, useState, useEffect } from 'react'

type ThemeContextType = {
    isDark: boolean
    setIsDark: React.Dispatch<React.SetStateAction<boolean>>
}
export const ThemeContext = createContext<ThemeContextType>({
    isDark: false,
    setIsDark: () => {},
})

export const ThemeProvider = ({ children }) => {
    const [isDark, setIsDark] = useState(false)
    useEffect(() => {
        const body = document.querySelector('body')
        if (!body) return
        if (isDark) {
            body.classList.add('dark')
        } else {
            body.classList.remove('dark')
        }
    }, [isDark])
    return (
        <ThemeContext.Provider value={{ isDark, setIsDark }}>
            {children}
        </ThemeContext.Provider>
    )
}
