import { useContext } from "react";
import { Favorites} from "./../context/Favorites"

export function useFavorites () {
    const favorites = useContext(Favorites)

    if (favorites === undefined) {
        throw new Error("useFavorites dont have access to context")
    }

    return favorites
}