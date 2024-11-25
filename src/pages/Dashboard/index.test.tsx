import { render, screen } from '@testing-library/react'
import DashboardPage from '.'
import { MockedProvider } from '@apollo/client/testing'
import { MemoryRouter } from 'react-router-dom'

function MockedDahsboard() {
  return (
    <MockedProvider mocks={[]}>
      <MemoryRouter>
        <DashboardPage />
      </MemoryRouter>
    </MockedProvider>
  )
}

describe('Dashboard', () => {
  it('renders correctly all its components', () => {
    render(<MockedDahsboard />)

    // Weekbar
    expect(screen.findByText('20 Nov')).toBeDefined()

    // Sidebar
    expect(screen.findByTestId('home-iconbutton')).toBeDefined()
    expect(screen.findByTestId('projects-iconbutton')).toBeDefined()
    expect(screen.findByTestId('calendar-iconbutton')).toBeDefined()
    expect(screen.findByTestId('teams-iconbutton')).toBeDefined()

    // Topbar
    expect(screen.findByTestId('notifications-iconbutton')).toBeDefined()

    // Tasks
    expect(screen.getByTestId(`task-1-completed`)).toBeDefined()
    expect(screen.getByTestId(`task-2-pending`)).toBeDefined()
    expect(screen.getByTestId(`task-3-pending`)).toBeDefined()
  })
})
