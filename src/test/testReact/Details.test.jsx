import { render, screen, waitFor } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import Details from '../../pages/Details'
import { FavoritesProvider } from '../../context/Favorites'


const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        cacheTime: 0,
      },
    },
  })

beforeEach(() => {
  vi.stubGlobal('fetch', () =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          title: 'Dragon Ball',
          image: 'https://example.com/image.jpg',
          characters: [
            {
              id: 1,
              name: 'Goku',
              image: 'https://example.com/goku.jpg',
            },
          ],
        }),
    })
  )
})

describe('Details Page', () => {
  it('renderiza detalles correctamente', async () => {
    const queryClient = createTestQueryClient()

    render(
      <MemoryRouter initialEntries={['/details/dragon ball?id=1']}>
        <QueryClientProvider client={queryClient}>
          <FavoritesProvider>
            <Routes>
              <Route path="/details/:title" element={<Details />} />
            </Routes>
          </FavoritesProvider>
        </QueryClientProvider>
      </MemoryRouter>
    )

    await waitFor(() => {
      expect(screen.queryByText(/cargando/i)).not.toBeInTheDocument()
    })

    const img = await screen.findByRole('img')
    expect(img).toBeInTheDocument()

  })
})
