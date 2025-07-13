import { updateLocaleStorage } from "../utils/updateLocaleStorage";

export const initialState = (() => {
  try {
    return JSON.parse(localStorage.getItem("favorite")) || [];
  } catch {
    return [];
  }
})();

export function favoriteReduce(state, action) {
  const { type, anime } = action;

  switch (type) {
    case "TOGGLE_FAVORITE": {
      const exists = state.find((item) => item.id === anime.id);
      const newState = exists
        ? state.filter((item) => item.id !== anime.id)
        : [...state, anime];

      updateLocaleStorage(newState, "favorite");
      return newState
    }

    case "CLEAR_FAVORITE": {
      updateLocaleStorage([], "favorite");
      return [];
    }

    default:
      return state;
  }
}
