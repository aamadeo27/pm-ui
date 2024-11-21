import { render, screen } from '@testing-library/react'
import Topbar from '.'
import { User } from '../../generated/graphql'

describe('Top Bar', () => {
  it('should render', () => {
    render(<Topbar user={{} as User} />)

    expect(screen.findByText('Search bar')).toBeDefined()
    expect(screen.findByText('My Projects')).toBeDefined()
    expect(screen.findByTestId('avatar')).toBeDefined()
    expect(screen.findByTestId('notifications')).toBeDefined()
  })
})
