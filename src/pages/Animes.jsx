import { useFavorites } from "../hooks/useFavorites";
import { useFilters } from "../hooks/useFilters";
import { useGetAnime } from "../hooks/useGetAnime"
import "./../styles/animes.css"
import { Filters } from "../components/Filters";
import { Pagination } from "./../components/Pagination";
import { ViewAnimes } from "./../components/ViewAnimes";

export default function Animes() {
    const { filters, updateFilter, sorted, sort } = useFilters('filterAnime')
    const { animeList, totalPage, loading, loadPage, error } = useGetAnime(filters, sorted)
    const { favorites, toggleFavorite } = useFavorites()

    if (error) return (<p>Error {error}</p>)

    return (
        <div>
            <ViewAnimes animeList={animeList} loading={loading} toggleFavorite={toggleFavorite} favorites={favorites}>
                <Filters updateFilter={updateFilter} sort={sort} filters={filters} />
            </ViewAnimes>

            <Pagination totalPage={totalPage} loadPage={loadPage} isLoading={loading} />


        </div>


    )
}