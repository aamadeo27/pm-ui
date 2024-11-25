import { act, render, screen } from '@testing-library/react'
import DashboardPage from '.'
import { MockedProvider } from '@apollo/client/testing'
import { MemoryRouter } from 'react-router-dom'
import { gql } from '@apollo/client'

const GET_USER = gql`
  query GetUser {
    current_user {
      id
      name
      email
      role
      active
    }
  }
`

function MockedDahsboard() {
  return (
    <MockedProvider
      addTypename={false}
      mocks={[
        {
          request: { query: GET_USER },
          result: {
            data: {
              current_user: {
                id: 1,
                name: 'user',
                email: 'user@mail.com',
                role: 'team_member',
                active: true,
              },
            },
          },
        },
      ]}
    >
      <MemoryRouter>
        <DashboardPage />
      </MemoryRouter>
    </MockedProvider>
  )
}

const waitForPageLoad = () =>
  act(async () => {
    await new Promise((resolve) => setTimeout(resolve, 0))
  })

describe('Dashboard', () => {
  it('renders correctly all its components', async () => {
    render(<MockedDahsboard />)

    await waitForPageLoad()

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
