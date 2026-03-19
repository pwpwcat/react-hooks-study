import { BrowserRouter } from 'react-router'
import RootLayout from '@/layout/RootLayout'
import AppRoutes from './AppRoutes'
import '@/assets/stylesheets/global.sass'
import { TodoProvider } from '@/context/TodoContext'
import { ThemeProvider } from '@/context/ThemeContext'

const App = () => {
    return (
        <TodoProvider>
            <ThemeProvider>
                <BrowserRouter>
                    <RootLayout>
                        <AppRoutes />
                    </RootLayout>
                </BrowserRouter>
            </ThemeProvider>
        </TodoProvider>
    )
}

export default App
