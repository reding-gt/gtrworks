import { render, screen } from '@testing-library/react'
import { createMemoryRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import { describe, expect, it } from 'vitest'
import { routes } from './routes'

function renderAt(path: string) {
  const router = createMemoryRouter(routes, { initialEntries: [path] })
  render(<RouterProvider router={router} />)
}

describe('routes', () => {
  it('renders the home page at /', async () => {
    renderAt('/')
    expect(await screen.findByRole('heading', { level: 1, name: 'gtrworks' })).toBeInTheDocument()
  })

  it('lazy-loads the about page at /about', async () => {
    renderAt('/about')
    expect(await screen.findByRole('heading', { level: 1, name: 'About' })).toBeInTheDocument()
  })

  it('renders the not-found page for unknown paths', async () => {
    renderAt('/nope')
    expect(await screen.findByRole('heading', { level: 1, name: '404' })).toBeInTheDocument()
  })
})
