import { BrowserRouter } from 'react-router'
import RootLayout from '@/layout/RootLayout'
import AppRoutes from './AppRoutes'
import '@/assets/stylesheets/global.sass'
import { TodoProvider } from '@/context/TodoContext'
import { ThemeProvider } from '@/context/ThemeContext'
import { AuthProvider } from '@/context/AuthContext'

const App = () => {
    return (
        <AuthProvider>
            <TodoProvider>
                <ThemeProvider>
                    <BrowserRouter>
                        <RootLayout>
                            <AppRoutes />
                        </RootLayout>
                    </BrowserRouter>
                </ThemeProvider>
            </TodoProvider>
        </AuthProvider>
    )
}

export default App
