// import styles from './index.module.sass'
import { useEffect, useState, useRef } from 'react'
import { client } from '@/lib/microcms'
import { Link } from 'react-router'

const Blog = () => {
    type Blog = {
        title: string
        icon: string
        body: string
        thumb?: { url: string }
        date?: string
        id: string
    }

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
        <div>
            <h1>Blog</h1>
            {errorMessage && <p>{errorMessage}</p>}
            {isLoading ? (
                <p>ローディング中</p>
            ) : (
                <ul>
                    {blogs.map((blog) => (
                        <li key={blog.id}>
                            <Link to={`/blog/${blog.id}`}>
                                <span>{blog.icon}</span>
                                <p>{blog.title}</p>
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default Blog
