// import styles from './index.module.sass'
import { useEffect, useState, useRef } from 'react'
import { client } from '@/lib/microcms'
import { Link } from 'react-router'
import { useParams } from 'react-router'

const BlogShow = () => {
    type Blog = {
        title: string
        icon: string
        body: string
        thumb?: { url: string }
        date?: string
        id: string
    }
    const [blogArticle, setBlogArticle] = useState<Blog | null>(null)
    const [isLoading, setIsLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const { id } = useParams()

    useEffect(() => {
        setIsLoading(true)
        client
            .get({
                endpoint: 'blog',
                contentId: id,
            })
            .then((response) => {
                setBlogArticle(response)
                setIsLoading(false)
            })
            .catch((error) => {
                setIsLoading(false)
                setErrorMessage('ブログの取得に失敗しました')
            })
    }, [])
    return (
        <div>
            <h1>記事詳細</h1>
            <div>{blogArticle?.body}</div>
        </div>
    )
}

export default BlogShow
