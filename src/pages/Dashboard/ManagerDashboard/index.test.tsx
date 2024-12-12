import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing'
import ManagerDashboard from '.'
import { AppRole, GetTeamDocument } from '../../../generated/graphql'
import { CurrentUser } from '../../../components/Topbar'

describe('ManagerDashboard', () => {
  const mockUser: CurrentUser = {
    id: 1,
    email: 'manager@mail.com',
    name: 'Manager',
    team_id: 1,
    avatar_url: 'avatar.jpg',
    role: AppRole.ProjectManager,
    active: true,
  }

  const mockTeamData = {
    team: {
      id: 1,
      thumbnail: null,
      name: 'Mock Team',
      members: [
        {
          id: 1,
          name: 'Manager',
          avatar_url: 'avatar.jpg',
          role: AppRole.ProjectManager,
        },
        {
          id: 2,
          name: 'Member 1',
          avatar_url: 'member1.jpg',
          role: AppRole.TeamMember,
        },
        {
          id: 3,
          name: 'Member 2',
          avatar_url: 'member2.jpg',
          role: AppRole.TeamMember,
        },
      ],
      projects: [
        {
          id: 1,
          name: 'Project 1',
          created_at: '2023-01-01T00:00:00Z',
          completed_at: null,
          thumbnail: null,
          tasks: [
            {
              id: 1,
              name: 'Task 1',
              thumbnail: null,
              created_at: '2024-01-02T00:00:00Z',
              completed_at: null,
              assignee_id: null,
            },
            {
              id: 2,
              name: 'Task 2',
              thumbnail: null,
              created_at: '2024-01-02T00:00:00Z',
              completed_at: '2024-01-02T00:00:00Z',
              assignee_id: null,
            },
          ],
        },
      ],
    },
  }

  const mocks = [
    {
      request: {
        query: GetTeamDocument,
        variables: { id: mockUser.team_id },
      },
      result: { data: mockTeamData },
    },
  ]

  it('renders loading state initially', () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <ManagerDashboard user={mockUser} />
      </MockedProvider>,
    )

    expect(screen.getByText(/loading/i)).toBeDefined()
  })

  it('renders error state', async () => {
    const errorMocks = [
      {
        request: {
          query: GetTeamDocument,
          variables: { id: mockUser.team_id },
        },
        error: new Error('Network error'),
      },
    ]

    render(
      <MockedProvider mocks={errorMocks} addTypename={false}>
        <ManagerDashboard user={mockUser} />
      </MockedProvider>,
    )

    expect(await screen.findByText(/network error/i)).toBeInTheDocument()
  })

  it('renders team and projects', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={true}>
        <ManagerDashboard user={mockUser} />
      </MockedProvider>,
    )

    await waitFor(() =>
      expect(screen.queryByText('Team Mock Team')).toBeInTheDocument(),
    )
    await waitFor(() =>
      expect(screen.queryByText('Member 1')).toBeInTheDocument(),
    )
    await waitFor(() =>
      expect(screen.queryByText('Member 2')).toBeInTheDocument(),
    )
    await waitFor(() =>
      expect(screen.queryByText('Project 1')).toBeInTheDocument(),
    )
  })

  it('opens and closes AddProjectModal', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={true}>
        <ManagerDashboard user={mockUser} />
      </MockedProvider>,
    )

    const addButton = await screen.findByText(/add project/i)
    fireEvent.click(addButton)

    expect(
      screen.queryByRole('heading', { name: 'Create Project' }),
    ).toBeInTheDocument()

    const closeButton = screen.getByRole('button', { name: 'Cancel' })
    fireEvent.click(closeButton)

    expect(
      screen.queryByRole('heading', { name: 'Create Project' }),
    ).not.toBeInTheDocument()
  })
})
