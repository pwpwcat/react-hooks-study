import { useRef } from 'react'
import styles from '../index.module.sass'

const RefSection = () => {
    const ref = useRef<HTMLInputElement>(null)
    return (
        <section className={styles.section}>
            <h2 className={styles.section__title}>useRef Practice</h2>
            <p className={styles.section__lead}>›› useRef の練習</p>
            <div className={styles.ref__form}>
                <input type="text" ref={ref} />
                <button onClick={() => ref.current?.focus()}>
                    inputにフォーカスする
                </button>
            </div>
        </section>
    )
}

export default RefSection
