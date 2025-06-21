import { useFavorites } from "../hooks/useFavorites";
import { useFilters } from "../hooks/useFilters";
import { ViewAnimes } from "./ViewAnimes";
import { Filters } from "./Filters";
import { useEffect, useState } from "react";

export function List() {
    const { favorites, toggleFavorite } = useFavorites()
    const [favoriteFilter, setFavoriteFilter] = useState([])
    const { filters, updateFilter, sort, sorted } = useFilters()

    useEffect(() => {
        const { q: query, type } = filters;
        let filtered = [...favorites];

        if (query) {
            filtered = filtered.filter((item) =>
                item.title.toLowerCase().includes(query.toLowerCase())
            );
        }

        if (type) {
            filtered = filtered.filter((item) => item.type.toLowerCase() === type.toLowerCase());
            console.log(favorites)
        }

        setFavoriteFilter(sorted(filtered));
    }, [filters, favorites, sorted]);


    return (
        <div>
            <ViewAnimes animeList={favoriteFilter} toggleFavorite={toggleFavorite} isFavoritesList={true}>
                <Filters updateFilter={updateFilter} sort={sort} />
            </ViewAnimes>
        </div>
    )
}