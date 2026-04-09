import { useState } from 'react'
import styles from './index.module.sass'

const Review = () => {
    const [reviewLists, setReviewLists] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    return (
        <div>
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
