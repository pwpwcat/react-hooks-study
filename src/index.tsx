import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app/App'

const root = document.getElementById('root')! // 💡末尾の「!」は非nullアサーション演算子 = nullではないことを保証する
createRoot(root).render(
    <StrictMode>
        <App />
    </StrictMode>
)