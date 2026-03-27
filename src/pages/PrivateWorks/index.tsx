import { useEffect, useState, useContext } from 'react'
import { client } from '@/lib/microcms'
import { Link } from 'react-router'
import type { PrivateWorks } from '@/types/privateWorks'
import styles from './index.module.sass'
import { AuthContext } from '@/context/AuthContext'

const PrivateWorks = () => {
    const [works, setWorks] = useState<PrivateWorks[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext)
    const [password, setPassword] = useState('')

    useEffect(() => {
        setIsLoading(true)
        client
            .get({
                endpoint: 'work-private',
            })
            .then((response) => {
                setWorks(response.contents)
                setIsLoading(false)
            })
            .catch((error) => {
                setIsLoading(false)
                setErrorMessage('制作実績の取得に失敗しました')
            })
    }, [])

    const handlePasswordCheck = () => {
        if (password === 'pasuwa-do') {
            setIsAuthenticated(true)
        } else {
            setErrorMessage('パスワードが違います')
        }
    }

    return (
        <>
            {!isAuthenticated ? (
                <div>
                    {errorMessage && <p>{errorMessage}</p>}
                    <h2>パスワード</h2>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') handlePasswordCheck()
                        }}
                    />
                    <button onClick={() => handlePasswordCheck()}>Enter</button>
                </div>
            ) : (
                <div className={styles.blog}>
                    <h1 className={styles.blog__title}>Blog</h1>
                    {errorMessage && <p>{errorMessage}</p>}
                    {isLoading ? (
                        <p>読み込み中...</p>
                    ) : (
                        <ul className={styles.blog__list}>
                            {works.map((works) => (
                                <li
                                    key={works.id}
                                    className={styles.blog__item}
                                >
                                    <div>
                                        <img src={works.image.url} alt="" />
                                    </div>
                                    <Link to={`/private-works/${works.id}`}>
                                        <p className={styles.blog__name}>
                                            {works.title}
                                        </p>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            )}
        </>
    )
}

export default PrivateWorks
