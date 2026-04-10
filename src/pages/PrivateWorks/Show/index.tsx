import { useEffect, useState } from 'react'
import { client } from '@/lib/microcms'
import { Link, useParams } from 'react-router'
import type { Blog } from '@/types/blog'
import styles from './index.module.sass'

const BlogShow = () => {
    const [blogShow, setBlogShow] = useState<Blog | null>(null)
    const [blogLists, setBlogLists] = useState<Blog[]>([])
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
                setBlogShow(response)
                setIsLoading(false)
            })
            .catch(() => {
                setIsLoading(false)
                setErrorMessage('記事の取得に失敗しました')
            })
    }, [id])

    useEffect(() => {
        client
            .get({ endpoint: 'blog' })
            .then((response) => {
                setBlogLists(response.contents)
            })
            .catch(() => {})
    }, [id])

    const currentIndex = blogLists.findIndex((a) => a.id === id)
    const prev = blogLists[currentIndex + 1]
    const next = blogLists[currentIndex - 1]

    return (
        <div className={styles.show}>
            {errorMessage && <p>{errorMessage}</p>}
            {isLoading ? (
                <p>読み込み中...</p>
            ) : (
                <>
                    <h1 className={styles.show__title}>{blogShow?.title}</h1>
                    <div
                        className={styles.show__body}
                        dangerouslySetInnerHTML={{ __html: blogShow?.body ?? '' }}
                    />
                </>
            )}
            <div className={styles.show__nav}>
                {prev ? <Link to={`/blog/${prev.id}`}>← {prev.title}</Link> : <span />}
                {next ? <Link to={`/blog/${next.id}`}>{next.title} →</Link> : <span />}
            </div>
        </div>
    )
}

export default BlogShow
