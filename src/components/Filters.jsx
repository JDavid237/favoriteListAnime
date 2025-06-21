import { useId } from "react"
import { FaSearch } from "react-icons/fa"
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"
import "../styles/filters.css"
import { useDebouncedCallback } from 'use-debounce';

export function Filters({updateFilter, sort}) {
    const searchId = useId()

    const debounceSearch = useDebouncedCallback((search) => {
        updateFilter('q', search)
    }, 400)

    const handleSubmit = (event) => {
        event.preventDefault()
    }

    const handleSearch = event => {
        const search = event.target.value
        const newSearch = search.replace(" ", "").toLowerCase()
        debounceSearch(newSearch)
    }

    const handleType = (event) => {
        const type = event.target.value
        updateFilter('type', type)
    }

    const handleSort = () => {
        updateFilter('sort')
    }

    return (
        <div className="filters">
            <form onSubmit={handleSubmit}>
                <label htmlFor={searchId} className="search">
                    <input onChange={handleSearch} type="text" id={searchId} name="search" placeholder="Dragon ball, Naruto, Pokemon..." />
                    <FaSearch />
                </label>

                <select onChange={handleType} className="anime-type">
                    <option value="">Todos</option>
                    <option value="tv">Tv</option>
                    <option value="movie">Pelicula</option>
                    <option value="ova">Ova</option>
                    <option value="special">Especial</option>
                    <option value="ona">Ona</option>
                </select>

                <label htmlFor="sort" className="sort">
                    <input type="checkbox" id="sort" style={{ display: "none" }} checked={sort} onChange={handleSort} />
                    {sort ? "Asc" : "Desc"}
                    {sort ? <IoIosArrowUp className="sort-icon"/> : <IoIosArrowDown className="sort-icon" /> }

                </label>

            </form>

        </div>
    )
}