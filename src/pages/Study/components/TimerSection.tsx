import { useTimer } from '@/hooks/useTimer'
import styles from '../index.module.sass'

const TimerSection = () => {
    const { count, isRunning, setIsRunning, handleReset } = useTimer()
    return (
        <section className={styles.section}>
            <h2 className={styles.section__title}>Timer</h2>
            <p className={styles.section__lead}>
                ›› useEffect、カスタムフック、useRefの練習　useTimer
                というカスタムフックを作成している　useRefで、タイマー起動中（isRunning
                が true の時）にリセットを可能にしている
            </p>
            <div className={styles.timer}>
                <p className={styles.timer__count}>{count}</p>
                <div className={styles.timer__buttons}>
                    <button onClick={() => setIsRunning(!isRunning)}>
                        {isRunning ? 'ストップ' : 'スタート'}
                    </button>
                    <button onClick={handleReset}>リセット</button>
                </div>
            </div>
        </section>
    )
}

export default TimerSection
