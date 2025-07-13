import { useQuery } from "@tanstack/react-query"
import { searchAnimeById } from "../services/searchAnimeById"
import { Link, useSearchParams } from "react-router"
import { ICONS } from "../components/icons/icons"
import "./../styles/details.css"
import { useState } from "react"
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "motion/react"
import { Loader } from "../components/Loader"

export default function Details() {
    const [searchParams] = useSearchParams()
    const id = searchParams.get('id')
    const [checkedSynopsis, setCheckedSynopsis] = useState(false)

    const { data, isLoading, error } = useQuery({
        queryKey: ['anime', id],
        queryFn: () => searchAnimeById({ id })
    })


    if (error) return <h1>Ha ocurrido un error inesperado, intenta de nuevo mas tarde</h1>

    return (
        <AnimatePresence mode="wait">
            {!isLoading
                ? <motion.div className="details-container"
                    initial={{y: "100vh", opacity: 0 }}
                    animate={{y: 0, opacity: 1 }}
                    transition={{ duration: .7 }}
                    key="details">
                    <section className="main-section">
                        <div className="anime-image">
                            <img src={data.image} alt={`Portada del anime: ${data.title}`} />
                        </div>
                        <div className="anime-popularity">

                            <div className="anime-score">
                                <h4>Puntaje</h4>
                                <div>
                                    <ICONS.star className="icons icon-star" /> {data.score}
                                </div>
                            </div>
                            <div className="anime-episodes">
                                <div>
                                    <h4>Episodios</h4>
                                    <p>{data.episodes} - <span style={{ color: data.status === 'En emision' ? 'green' : "whitesmoke" }}></span> {data.status}</p>

                                </div>
                            </div>
                            <ul className="anime-members">
                                <li><span><ICONS.ranking className="icons" /> Rank</span>{data.rank}</li>
                                <li><span><ICONS.users className="icons" /> Miembros</span>{data.members}</li>
                                <li><span><ICONS.heart className="icons" /> Popularidad</span>{data.popularity}</li>
                            </ul>

                        </div>
                    </section>

                    <section className="secondary-section">
                        <header className="anime-title">
                            <h2>{data.title}</h2>
                        </header>
                        <div className="anime-genres">
                            {data.genres?.map((genre, index) => (
                                <div key={index}>
                                    <p>{genre.name}</p>
                                </div>
                            ))}
                        </div>
                        <article>
                            <h4>Sinopsis</h4>
                            <input type="checkbox" className="toggle" id="toggle-synopsis" onClick={(e) => setCheckedSynopsis(e.target.checked)} />
                            <div className="preview">
                                {data.synopsis}
                            </div>
                            {data.synopsis?.length > 150 &&
                                <label htmlFor="toggle-synopsis">{checkedSynopsis ? <ICONS.arrowUp /> : <ICONS.arrowDown />}</label>}

                        </article>
                        <article className="anime-extra">
                            <div className="anime-info">
                                <ul>
                                    <li>
                                        <h5>Tipo</h5>
                                        <p>{data.type}</p>
                                    </li>
                                    <li>
                                        <h5>Adaptacion</h5>
                                        <p>{data.source}</p>
                                    </li>
                                    <li>
                                        <h5>Estudios de Animacion</h5>
                                        <p>{data.studios?.join(", ")}</p>
                                    </li>
                                    <li>
                                        <h5>Fecha de Emision</h5>
                                        <p>{data.aired}</p>
                                    </li>
                                    {data.relations &&
                                        <>
                                            {data.relations?.map((relation, index) => (
                                                <li key={index} className="relations">
                                                    <h5>{relation.relation}</h5>

                                                    {relation.entry?.map((entry, index) => {
                                                        return relation.relation !== 'Adaptation' ? <Link to={`/details/${encodeURIComponent(entry.name)}?id=${entry.mal_id}`} className="relation" key={index} title={entry.name}>{entry.name}</Link> : <p title={entry.name} key={index}>{entry.name}</p>
                                                    }

                                                    )}
                                                </li>
                                            ))}
                                        </>
                                    }

                                </ul>
                            </div>
                            <div className="container-extra">
                                <h4>Personajes principales</h4>
                                <div className="characters-container">
                                    {data.characters?.map((character) => (
                                        <div key={character.id} className="anime-character">
                                            <img src={character.image} alt={`Personaje de anime ${character.name}`} />
                                            <h5>{character.name}</h5>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </article>

                        {data.theme &&
                            <article className="anime-themes">
                                {data.theme.openings.length > 0 &&
                                    <div>
                                        <h4>Openings</h4>
                                        <ul>
                                            {data.theme.openings.map((opening, index) => (
                                                <li key={index}>
                                                    <p>{opening}</p>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                }
                                {data.theme.endings.length > 0 &&
                                    <div>
                                        <h4>Endings</h4>
                                        <ul>
                                            {data.theme.endings.map((ending, index) => (
                                                <li key={index}>
                                                    <p>{ending}</p>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                }
                            </article>
                        }

                    </section>
                </motion.div>
                : <Loader />}
        </AnimatePresence>
    )
}