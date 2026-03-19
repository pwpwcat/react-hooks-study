import styles from './index.module.sass'
import { useEffect, useState } from 'react'
const Home = () => {
    const [count, setCount] = useState(0)
    const [isRunning, setIsRunning] = useState(false)

    useEffect(() => {
        if (!isRunning) return
        const timer = setInterval(() => {
            setCount((prev) => prev + 1)
        }, 1000)

        return () => clearInterval(timer)
    }, [isRunning])

    return (
        <div className="accordion">
            <div>{count}</div>
            <button onClick={() => setIsRunning(!isRunning)}>
                {isRunning ? 'ストップ' : 'スタート'}
            </button>
            <button
                onClick={() => {
                    setIsRunning(false)
                    setCount(0)
                }}
            >
                リセット
            </button>
        </div>
    )
}
export default Home
