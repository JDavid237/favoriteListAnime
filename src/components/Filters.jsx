import { useId, useState } from "react"
import { FaSearch } from "react-icons/fa"
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"
import "../styles/filters.css"
import { useDebouncedCallback } from 'use-debounce';
import { IoClose } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import { GrClose } from "react-icons/gr";

export function Filters({updateFilter, sort, filters}) {
    const [localeSearch, setLocaleSearch] = useState(filters.q || "")
    const searchId = useId()

    const debounceSearch = useDebouncedCallback((search) => {
        updateFilter('q', search)
    }, 400)

    const handleSubmit = (event) => {
        event.preventDefault()
        
    }

    const handleSearch = event => {
        const search = event.target.value
        setLocaleSearch(search)
        debounceSearch(search)
    }

    const handleType = (event) => {
        const type = event.target.value
        updateFilter('type', type)
    }

    const handleSort = () => {
        updateFilter('sort')
    }

    const handleReset = () => {
        setLocaleSearch("")
        updateFilter('q', "")
    }

    return (
        <div className="filters">
            <form onSubmit={handleSubmit}>
                <label htmlFor={searchId} className="search">
                    <input onChange={handleSearch} type="text" id={searchId} name="search" placeholder="Dragon ball, Naruto, Pokemon..." value={localeSearch}  />
                   {localeSearch ? <GrClose onClick={handleReset} style={{cursor: 'pointer'}} title="Cancelar busqueda"/> : <FaSearch/>} 
                </label>

                <select onChange={handleType} className="anime-type" value={filters.type}>
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