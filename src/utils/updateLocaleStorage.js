export const updateLocaleStorage = (state, item) => {
  try {
    localStorage.setItem(item, JSON.stringify(state))
  } catch (e) {
    console.error("Error writing to localStorage", e)
  }
}