import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { FavoritesProvider } from './context/Favorites.jsx'

createRoot(document.getElementById('root')).render(
  <FavoritesProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </FavoritesProvider>

)
