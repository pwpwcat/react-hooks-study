import { useState } from 'react'
import styles from './index.module.sass'

const Home = () => {
    type User = {
        login: string
        avatar_url: string
        followers: number
    }
    const [inputName, setInputName] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [users, setUsers] = useState<User | null>(null)
    const [errorMessage, setErrorMessage] = useState('')

    const handleSearch = () => {
        setUsers(null)
        setErrorMessage('')
        setIsLoading(true)
        fetch(`https://api.github.com/users/${inputName}`)
            .then((response) => response.json())
            .then((data) => {
                if (data.message) {
                    setErrorMessage('ユーザーが見つかりませんでした')
                    setIsLoading(false)
                    return
                } else {
                    setIsLoading(false)
                    setUsers(data)
                }
            })
            .catch(() => {
                setIsLoading(false)
                setErrorMessage('取得に失敗しました')
            })
    }
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSearch()
        }
    }
    return (
        <div>
            <h1>Home</h1>
            <input
                type="text"
                value={inputName}
                onChange={(e) => setInputName(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            <button onClick={() => handleSearch()}>検索</button>
            {errorMessage && <p>{errorMessage}</p>}
            {isLoading ? (
                '取得中'
            ) : (
                <div>
                    <p>{users?.login}</p>
                    <p>{users?.followers}</p>
                    <div>
                        <img src={users?.avatar_url} alt="" />
                    </div>
                </div>
            )}
        </div>
    )
}

export default Home
