import { useEffect, useState, useRef } from 'react'

export const useTimer = () => {
    const [count, setCount] = useState(0)
    const [isRunning, setIsRunning] = useState(false)
    const ref = useRef<number | null>(null)

    useEffect(() => {
        // false（ストップ状態）の時は何もしない
        if (!isRunning) return

        const timer = setInterval(() => {
            setCount((prev) => prev + 1)
        }, 1000)
        ref.current = timer

        // 動かしたタイマーを止める処理
        return () => clearInterval(timer)
    }, [isRunning])
    const handleReset = () => {
        clearInterval(ref.current)
        setIsRunning(false)
        setCount(0)
    }
    return { count, isRunning, setIsRunning, handleReset }
}
