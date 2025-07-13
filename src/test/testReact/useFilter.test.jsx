import { renderHook, act } from '@testing-library/react'
import { useFilters } from '../../hooks/useFilters'
import { describe, it, expect } from 'vitest'

describe('useFilters hook', () => {
  it('should update filters correctly', () => {
    const { result } = renderHook(() => useFilters())

    act(() => {
      result.current.updateFilter('q', 'naruto')
    })

    expect(result.current.filters.q).toBe('naruto')
  })

  it('should toggle sort', () => {
    const { result } = renderHook(() => useFilters())
    const initialSort = result.current.sort

    act(() => {
      result.current.updateFilter('sort')
    })

    expect(result.current.sort).toBe(!initialSort)
  })
})