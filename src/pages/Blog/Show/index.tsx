// import styles from './index.module.sass'
import { useEffect, useState, useRef } from 'react'
import { client } from '@/lib/microcms'
import { Link } from 'react-router'
import { useParams } from 'react-router'
import type { Blog } from '@/types/blog'

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
            .catch((error) => {
                setIsLoading(false)
                setErrorMessage('記事の取得に失敗しました')
            })
    }, [id])

    useEffect(() => {
        setIsLoading(true)
        client
            .get({
                endpoint: 'blog',
            })
            .then((response) => {
                setBlogLists(response.contents)
                setIsLoading(false)
            })
            .catch((error) => {
                setIsLoading(false)
                setErrorMessage('ブログの取得に失敗しました')
            })
    }, [id])
    const currentIndex = blogLists.findIndex((a) => a.id === id)
    const prev = blogLists[currentIndex + 1]
    const next = blogLists[currentIndex - 1]
    return (
        <div>
            {errorMessage && <p>{errorMessage}</p>}
            {isLoading ? (
                'loading...'
            ) : (
                <div>
                    <div>{blogShow?.title}</div>
                    <div>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: blogShow?.body ?? '',
                            }}
                        />
                    </div>
                </div>
            )}
            {prev ? <Link to={`/blog/${prev.id}`}>前へ</Link> : <div></div>}
            {next ? <Link to={`/blog/${next.id}`}>次へ</Link> : <div></div>}
        </div>
    )
}

export default BlogShow
