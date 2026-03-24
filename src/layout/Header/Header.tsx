import { useContext } from 'react'
import { ThemeContext } from '@/context/ThemeContext'
import styles from './Header.module.sass'
import { Link } from 'react-router'

const Header = () => {
    const { isDark, setIsDark } = useContext(ThemeContext)

    return (
        <header className={styles.header}>
            <h1 className={styles.header__title}>React Hooks Study</h1>
            <button onClick={() => setIsDark(!isDark)}>
                {isDark ? 'Light' : 'Dark'}
            </button>
            <ul>
                <li>
                    <Link to="/">HOME</Link>
                </li>
                <li>
                    <Link to="/about">ABOUT</Link>
                </li>
                <li>
                    <Link to="/study">STUDY</Link>
                </li>
                <li>
                    <Link to="/blog">BLOG</Link>
                </li>
            </ul>
        </header>
    )
}

export default Header
