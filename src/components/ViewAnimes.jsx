import { FaHeart } from "react-icons/fa6"
import { useState } from "react"
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "motion/react"
import { Link } from "react-router"
import { Loader } from "./Loader"
import Swal from "sweetalert2"

export function ViewAnimes({ animeList, loading = false, children, toggleFavorite, favorites, isFavoritesList = false }) {
    const [poppingId, setPoppingId] = useState()

    const isAnimeInFavorite = (id) => {
        const favoriteList = isFavoritesList ? animeList : favorites
        return favoriteList.some((item) => item.id === id)
    }

    const handleFavorite = (event, item) => {
        event.preventDefault()

        toggleFavorite(item)
        setPoppingId(item.id)
        setTimeout(() => setPoppingId(null), 400)

        if (isAnimeInFavorite(item.id)) {
            Swal.fire({
                position: "top-end",
                title: `<span class='swal-anime'>${item.title}</span> Se ha eliminado de tus favoritos`,
                backdrop: false,
                icon: "success",
                width: 'clamp(200px, 80%, 350px)', 
                showConfirmButton: false,
                timer: 1200,

                showClass: {
                    popup: 'swal2-show-custom'
                },
                hideClass: {
                    popup: 'swal2-hide-custom'
                },

                customClass: {
                    icon: 'swal2-custom-icon',
                    popup: 'my-swal-popup',
                    title: 'my-swal-title',
                    htmlContainer: 'my-swal-container',
                },
            });
        }

    }

    if (isFavoritesList && animeList.length < 1) return <h2>No tienes animes en favoritos</h2>

    return (
        <div className="animeContainer">
            {children}
            <AnimatePresence mode="wait">
                {!loading
                    ? <motion.ul className="list"
                        initial={{opacity: 0 }}
                        animate={{opacity: 1 }}
                        transition={{ duration: .7 }}
                        key="animelist">
                        {animeList.map((anime, index) => (
                            <Link to={`/details/${encodeURIComponent(anime.title)}?id=${anime.id}`} style={{ all: "unset" }} key={index}>
                                <li className="anime">
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
                                                onClick={(event) => handleFavorite(event, anime)}
                                                title={!isAnimeInFavorite(anime.id) ? 'Agregar a Favoritos' : 'Eliminar de Favoritos'} />

                                        </div>
                                    </div>
                                    <div>
                                        <p>{anime.season || "year"} - {anime.aired}</p>
                                        <h4>{anime.episodes} ep</h4>
                                    </div>
                                </li>
                            </Link>

                        ))}
                    </motion.ul>

                    : <Loader />}
            </AnimatePresence>

        </div>
    )
}