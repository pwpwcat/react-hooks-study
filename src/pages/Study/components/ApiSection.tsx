import { useEffect, useState } from 'react'
import styles from '../index.module.sass'

type ApiTodo = {
    id: number
    title: string
    completed: boolean
}

const ApiSection = () => {
    const [todos, setTodos] = useState<ApiTodo[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    useEffect(() => {
        setIsLoading(true)
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then((response) => response.json())
            .then((data) => {
                setTodos(data)
                setIsLoading(false)
            })
            .catch(() => {
                setIsLoading(false)
                setErrorMessage('APIの取得に失敗しました')
            })
    }, [])

    const completedTodos = todos.filter((todo) => todo.completed)

    return (
        <section className={styles.section}>
            <h2 className={styles.section__title}>API取得</h2>
            <p className={styles.section__lead}>
                ›› id: num / title: str / completed: bool
                というデータがあり、completed が true の データの title
                だけを表示している
            </p>
            {errorMessage && <p className={styles.error}>{errorMessage}</p>}
            {isLoading ? (
                <p>読み込み中...</p>
            ) : (
                <ul className={styles.api__list}>
                    {completedTodos.map((todo) => (
                        <li key={todo.id} className={styles.api__item}>
                            {todo.title}
                        </li>
                    ))}
                </ul>
            )}
        </section>
    )
}

export default ApiSection
