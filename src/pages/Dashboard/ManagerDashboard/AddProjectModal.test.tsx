import { render, screen, fireEvent } from '@testing-library/react'
import AddProjectModal from './AddProjectModal'

const mockCreateProject = jest.fn().mockResolvedValue(Promise.resolve())

jest.mock('../../../generated/graphql', () => ({
  useCreateProjectMutation: jest.fn(() => {
    console.log('Using Create Project Mutation')
    return [mockCreateProject, { loading: false }]
  }),
}))

test('renders the modal with form elements and handles submission', async () => {
  const mockOnClose = jest.fn()

  render(
    // <MockedProvider mocks={mocks}>
    <AddProjectModal onClose={mockOnClose} />,
    // </MockedProvider>,
  )

  // Verify modal title
  expect(screen.getByText('Create Project')).toBeInTheDocument()

  // Verify text field for project name
  const textField = screen.getByRole('textbox', { name: /name/i })
  expect(textField).toBeInTheDocument()

  // Simulate entering a project name
  fireEvent.change(textField, { target: { value: 'New Project' } })
  expect(textField).toHaveValue('New Project')

  // Verify and click the create button
  const createButton = screen.getByRole('button', { name: /create/i })
  expect(createButton).toBeInTheDocument()
  fireEvent.click(createButton)

  // Verify the mutation was called
  expect(mockCreateProject).toHaveBeenCalledWith({
    variables: { name: 'New Project' },
  })

  // Simulate a successful submission
  await screen.findByText('Create Project')
  expect(mockOnClose).toHaveBeenCalled()

  // Verify and click the cancel button
  const cancelButton = screen.getByRole('button', { name: /cancel/i })
  fireEvent.click(cancelButton)

  expect(mockOnClose).toHaveBeenCalledTimes(2) // Once for success, once for cancel
})
