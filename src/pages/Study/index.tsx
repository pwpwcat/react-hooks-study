import styles from './index.module.sass'
import TodoSection from './components/TodoSection'
import TimerSection from './components/TimerSection'
import ApiSection from './components/ApiSection'
import RefSection from './components/RefSection'

const Study = () => {
    return (
        <div className={styles.study}>
            <div>
                <p>
                    AI時代だからこそちゃんとコードを学びたい<br></br>
                    ReactをAIに教えてもらい、自力でコードを書き、AIにまとめてもらうという毎日
                    <br></br>
                    <a
                        href="https://www.notion.so/scatcat/React-323e08f6d39f801a84c8d7918f881732"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Notion
                    </a>
                </p>
            </div>
            <RefSection />
            <TodoSection />
            <TimerSection />
            <ApiSection />
        </div>
    )
}

export default Study
