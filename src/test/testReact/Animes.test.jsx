import { render, screen} from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import Animes from '../../pages/Animes'
import { describe, it, expect } from 'vitest'
import { FavoritesProvider } from '../../context/Favorites'

describe('Animes Page', () => {
    it('renders heading', async () => {
        render(
            <FavoritesProvider>
                <MemoryRouter>
                    <Animes />
                </MemoryRouter>
            </FavoritesProvider>
        )
        const input = screen.getByPlaceholderText(/dragon ball/i)
        expect(input).toBeInTheDocument()
    })
})
