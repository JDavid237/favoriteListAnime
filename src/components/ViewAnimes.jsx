import { Commet } from "react-loading-indicators"
import { FaHeart } from "react-icons/fa6"
import { useState } from "react"
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "motion/react"

export function ViewAnimes({ animeList, loading = false, children, toggleFavorite, favorites, isFavoritesList = false }) {
    const [poppingId, setPoppingId] = useState()

    const isAnimeInFavorite = (id) => {
        const favoriteList = isFavoritesList ? animeList : favorites
        return favoriteList.some((item) => item.id === id)
    }

    const handleFavorite = (item) => {
        toggleFavorite(item)
        setPoppingId(item.id)
        setTimeout(() => setPoppingId(null), 400)

    }

    return (
        <div className="animeContainer">
            {children}
            <AnimatePresence mode="wait">
                {!loading
                    ? <motion.ul className="list" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .7 }} key='animeList'>
                        {animeList.map((anime, index) => (
                            <li key={index} className="anime">
                                <div className="header-anime">
                                    <h3>{anime.title}</h3>
                                    <div style={{ position: "relative" }}>
                                        <img src={anime.image} alt={anime.title} />
                                        <div className="score">
                                            <p>{anime.score}</p>
                                        </div>

                                        <FaHeart className={`
                                                heart 
                                                ${isAnimeInFavorite(anime.id) ? "active" : ""} 
                                                ${poppingId === anime.id ? "pop" : ""}
                                            `}
                                            onClick={() => handleFavorite(anime)}
                                            title={!isAnimeInFavorite(anime.id) ? 'Agregar a Favoritos' : 'Eliminar de Favoritos'} />

                                    </div>
                                </div>
                                <div>
                                    <p>{anime.season || "year"} - {anime.aired}</p>
                                    <h4>{anime.episodes} ep</h4>
                                </div>
                            </li>
                        ))}
                    </motion.ul>

                    : <motion.div className="loading" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.5 }} key="loading"><Commet color="#792972" size="medium" text="Cargando" textColor="#ffffff" /></motion.div>}
            </AnimatePresence>

        </div>
    )
}