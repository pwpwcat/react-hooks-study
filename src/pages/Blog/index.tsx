import { useEffect, useState } from 'react'
import { client } from '@/lib/microcms'
import { Link } from 'react-router'
import type { Blog } from '@/types/blog'
import styles from './index.module.sass'

const Blog = () => {
    const [blogs, setBlogs] = useState<Blog[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    useEffect(() => {
        setIsLoading(true)
        client
            .get({
                endpoint: 'blog',
            })
            .then((response) => {
                setBlogs(response.contents)
                setIsLoading(false)
            })
            .catch((error) => {
                setIsLoading(false)
                setErrorMessage('ブログの取得に失敗しました')
            })
    }, [])

    return (
        <div className={styles.blog}>
            <h1 className={styles.blog__title}>Blog</h1>
            {errorMessage && <p>{errorMessage}</p>}
            {isLoading ? (
                <p>読み込み中...</p>
            ) : (
                <ul className={styles.blog__list}>
                    {blogs.map((blog) => (
                        <li key={blog.id} className={styles.blog__item}>
                            <Link to={`/blog/${blog.id}`}>
                                <span className={styles.blog__icon}>{blog.icon}</span>
                                <p className={styles.blog__name}>{blog.title}</p>
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default Blog
