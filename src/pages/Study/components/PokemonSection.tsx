import { useEffect, useState } from 'react'
import styles from '../index.module.sass'

type Pokemon = {
    name: string
    url: string
}

const PokemonSection = () => {
    const [pokemons, setPokemons] = useState<Pokemon[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1) // 現在のページ
    const [count, setCount] = useState(0) // ページ数出すのに必要
    const total = Math.ceil(count / 10) // ページ数

    useEffect(() => {
        setIsLoading(true)
        fetch(
            `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${(currentPage - 1) * 10}`,
        )
            .then((response) => response.json())
            .then((data) => {
                setIsLoading(false)
                setPokemons(data.results) // pokemons配列にAPIの配列を入れる
                setCount(data.count) // countにAPIのcountの値を入れる
            })
            .catch(() => {
                setIsLoading(false)
            })
    }, [currentPage])

    return (
        <section className={styles.section}>
            <h2 className={styles.section__title}>ポケモン図鑑</h2>
            <p className={styles.section__lead}>
                ›› PokeAPIからポケモン一覧を取得し、ページャーで切り替えている
            </p>
            {isLoading ? (
                <p>読み込み中...</p>
            ) : (
                <ul className={styles.pokemon__list}>
                    {pokemons.map((pokemon) => (
                        <li key={pokemon.name} className={styles.pokemon__item}>
                            {pokemon.name}
                        </li>
                    ))}
                </ul>
            )}
            <div className={styles.pokemon__pager}>
                <button
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(currentPage - 1)}
                >
                    前へ
                </button>
                <span className={styles.pokemon__page}>
                    {currentPage} / {total}
                </span>
                <button
                    disabled={currentPage === total}
                    onClick={() => setCurrentPage(currentPage + 1)}
                >
                    次へ
                </button>
            </div>
        </section>
    )
}

export default PokemonSection
