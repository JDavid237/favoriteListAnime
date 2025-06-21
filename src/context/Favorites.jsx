import { createContext, useReducer } from "react";
import { favoriteReduce, initialState } from "../Reducers/favoriteReduce";

// eslint-disable-next-line react-refresh/only-export-components
export const Favorites = createContext()

function useFavoriteReducer() {
    const [state, dispatch] = useReducer(favoriteReduce, initialState);

    const toggleFavorite = (anime) => dispatch({
        type: "TOGGLE_FAVORITE",
        anime
    });

    const clearFavorite = () => dispatch({
        type: "CLEAR_FAVORITE"
    });

    return { state, toggleFavorite, clearFavorite };
}

export function FavoritesProvider({ children }) {
    const { state, toggleFavorite, clearFavorite } = useFavoriteReducer()

    return (
        <Favorites.Provider
            value={{
                favorites: state,
                toggleFavorite,
                clearFavorite
            }}
        >
            {children}
        </Favorites.Provider>
    )
}