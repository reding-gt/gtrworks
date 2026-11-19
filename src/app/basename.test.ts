import { describe, expect, it } from 'vitest'
import { toBasename } from './basename'

describe('toBasename', () => {
  it('keeps the root path as-is', () => {
    expect(toBasename('/')).toBe('/')
  })

  it('strips the trailing slash from a project path', () => {
    expect(toBasename('/gtrworks/')).toBe('/gtrworks')
  })
})
