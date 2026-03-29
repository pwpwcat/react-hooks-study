import styles from './index.module.sass'
import { useEffect, useState, useRef } from 'react'

type Pokemons = {
    name: string
    url: string
}
const Home = () => {
    const [pokemons, setPokemons] = useState<Pokemons[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [count, setCount] = useState(0)
    const total = Math.ceil(count / 10)

    useEffect(() => {
        setIsLoading(true)
        fetch(
            `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${(currentPage - 1) * 10}`,
        )
            .then((response) => response.json())
            .then((data) => {
                setPokemons(data.results)
                setCount(data.count)
                setIsLoading(false)
            })
            .catch(() => {
                setIsLoading(false)
            })
    }, [currentPage])

    const handlePager = () => {
        setCurrentPage(currentPage - 1)

        console.log('‼️' + total)
    }
    return (
        <div>
            <h1>ポケモン取得</h1>
            <ul>
                {pokemons.map((pokemon) => (
                    <li>{pokemon.name}</li>
                ))}
            </ul>
            <button disabled={1 === currentPage} onClick={handlePager}>
                前へ
            </button>
            <button
                disabled={total === currentPage}
                onClick={() => setCurrentPage(currentPage + 1)}
            >
                次へ
            </button>
        </div>
    )
}
export default Home
