export const initialState = (() => {
  try {
    return JSON.parse(localStorage.getItem("favorite")) || []
  } catch {
    return []
  }
})()

const updateLocaleStorage = (state) => {
  try {
    localStorage.setItem("favorite", JSON.stringify(state))
  } catch (e) {
    console.error("Error writing to localStorage", e)
  }
}

export function favoriteReduce(state, action) {
  const { type, anime } = action

  switch (type) {

    case "TOGGLE_FAVORITE": {
      const exists = state.find((item) => item.id === anime.id)
      const newState = exists ? state.filter((item) => item.id !== anime.id) : [...state, anime]
      updateLocaleStorage(newState)
      return newState
    }

    case "CLEAR_FAVORITE": {
      updateLocaleStorage([])
      return []
    }

    default:
      return state
  }
}
