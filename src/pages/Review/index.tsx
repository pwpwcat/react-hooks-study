import { useEffect, useState } from 'react'
import styles from './index.module.sass'

const Review = () => {
    const [reviewLists, setReviewLists] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    useEffect(() => {
        setIsLoading(true)
        fetch(
            `https://api.github.com/search/issues?q=is:pr+is:open+review-requested:pwpwcat`,
            {
                headers: {
                    Authorization: `Bearer ${import.meta.env.VITE_REVIEW_REQUEST_LISTS}`,
                },
            },
        )
            .then((response) => response.json())
            .then((data) => {
                setIsLoading(false)
                setReviewLists(data.items)
            })
            .catch(() => {
                setErrorMessage('取得に失敗しました')
            })
    }, [])
    return (
        <div>
            {console.log(reviewLists)}
            <h2>レビューリクエスト一覧</h2>
            <ul>
                <li>
                    <a href="">
                        <p>レビュータイトル</p>
                        <p>期限日：</p>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Review
