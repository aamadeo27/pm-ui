import { render, screen } from '@testing-library/react'
import Hello from './Hello'

describe('Hello', () => {
  it('renders correctly', () => {
    render(<Hello />)

    expect(screen.getByText('Hello World')).toBeDefined()
  })
})