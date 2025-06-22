import { useFavorites } from "../hooks/useFavorites";
import { useFilters } from "../hooks/useFilters";
import { useGetAnime } from "../hooks/useGetAnime"
import "./../styles/animes.css"
import { Filters } from "./Filters";
import { Pagination } from "./Pagination";
import { ViewAnimes } from "./ViewAnimes";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";


export function Animes() {
    const { filters, updateFilter, sorted, sort } = useFilters()
    const { animeList, totalPage, loading, loadPage, error } = useGetAnime(filters, sorted)
    const { favorites, toggleFavorite } = useFavorites()

    if (error) return (<p>Error {error}</p>)

    return (
        <div>
            <ViewAnimes animeList={animeList} loading={loading} toggleFavorite={toggleFavorite} favorites={favorites}>
                <Filters updateFilter={updateFilter} sort={sort} />
            </ViewAnimes>

            <Pagination totalPage={totalPage} loadPage={loadPage} isLoading={loading} />


        </div>


    )
}