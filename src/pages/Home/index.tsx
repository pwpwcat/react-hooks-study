import styles from './index.module.sass'
import { useEffect, useState, useRef } from 'react'
const Home = () => {
    const [search, setSearch] = useState('')
    const products = [
        { id: 1, name: 'Tシャツ' },
        { id: 2, name: 'ジーンズ' },
        { id: 3, name: 'パーカー' },
        { id: 4, name: 'スニーカー' },
        { id: 5, name: 'キャップ' },
        { id: 6, name: 'ジャケット' },
    ]
    const result = products.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase()),
    )
    return (
        <div>
            <h1>練習</h1>
            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            {search && <p>{result.length}件見つかりました</p>}
            <ul>
                {result.map((product) => (
                    <li key={product.id}>
                        {product.name.split(search).map((part, index) => (
                            <>
                                {part}
                                {index <
                                    product.name.split(search).length - 1 && (
                                    <span style={{ color: 'red' }}>
                                        {search}
                                    </span>
                                )}
                            </>
                        ))}
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default Home
