import { favoriteReduce } from '../../reducers/favoriteReduce'
import { describe, it, expect } from 'vitest'

describe('favoritesReducer', () => {
  const mockAnime = { id: 1, title: 'Naruto' }

  it('adds anime to favorites', () => {
    const result = favoriteReduce([], {
      type: 'TOGGLE_FAVORITE',
      anime: mockAnime
    })

    expect(result).toContainEqual(mockAnime)
  })

  it('removes anime if already in favorites', () => {
    const result = favoriteReduce([mockAnime], {
      type: 'TOGGLE_FAVORITE',
      anime: mockAnime
    })

    expect(result).toEqual([])
  })
})
