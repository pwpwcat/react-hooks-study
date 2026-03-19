import { useState, useContext } from 'react'
import { TodoContext } from '@/context/TodoContext'
import styles from '../index.module.sass'

const TodoSection = () => {
    const [text, setText] = useState('')
    const { todos, setTodos } = useContext(TodoContext)
    const [error, setError] = useState('')
    const handleAdd = () => {
        if (text === '') {
            setError('テキストを入力してください')
            return
        }
        setTodos([...todos, text])
        setText('')
    }
    return (
        <section className={styles.section}>
            <h2 className={styles.section__title}>Todo List</h2>
            <p className={styles.section__lead}>›› useStateの練習</p>
            <div className={styles.todo__form}>
                <input
                    type="text"
                    value={text}
                    onChange={(e) => {
                        setText(e.target.value)
                        setError('')
                    }}
                    placeholder="やることを入力..."
                />
                <button onClick={handleAdd}>追加</button>
            </div>
            <p className={styles.todo__error}>{error}</p>
            <ul className={styles.todo__list}>
                {todos.map((todo, index) => (
                    <li className={styles.todo__item} key={index}>
                        <span>{todo}</span>
                        <button
                            className={styles.todo__delete}
                            onClick={() =>
                                setTodos(todos.filter((_, i) => i !== index))
                            }
                        >
                            削除
                        </button>
                    </li>
                ))}
            </ul>
            {todos.length > 0 && (
                <button
                    className={styles.todo__clear}
                    onClick={() => setTodos([])}
                >
                    全て削除
                </button>
            )}
        </section>
    )
}

export default TodoSection
