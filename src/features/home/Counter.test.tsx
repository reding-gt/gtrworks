import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Counter } from './Counter'

describe('Counter', () => {
  it('starts at zero and increments on click', async () => {
    const user = userEvent.setup()
    render(<Counter />)

    const button = screen.getByRole('button', { name: 'Count is 0' })
    await user.click(button)

    expect(screen.getByRole('button', { name: 'Count is 1' })).toBeInTheDocument()
  })
})
