import { render, screen, fireEvent } from '@testing-library/react'
import Modal from '.' // Adjust the import path as needed

// Mock Cross icon component since we only need to test the Modal's behavior
jest.mock('../Icons/Cross', () => () => <div data-testid="mock-cross" />)

describe('Modal Component', () => {
  const mockOnClose = jest.fn()

  test('renders modal with title and children', () => {
    render(
      <Modal title="Modal Title" onClose={mockOnClose}>
        <p>Modal Content</p>
      </Modal>,
    )

    // Verify modal title
    expect(screen.getByText('Modal Title')).toBeInTheDocument()

    // Verify modal content (children)
    expect(screen.getByText('Modal Content')).toBeInTheDocument()
  })

  test('calls onClose when close button is clicked', () => {
    render(
      <Modal title="Modal Title" onClose={mockOnClose}>
        <p>Modal Content</p>
      </Modal>,
    )

    // Verify the close button is rendered
    const closeButton = screen.getByTestId('mock-cross')
    expect(closeButton).toBeInTheDocument()

    // Simulate click on the close button
    fireEvent.click(closeButton)

    // Verify onClose was called
    expect(mockOnClose).toHaveBeenCalled()
  })

  test('renders primary and secondary actions if provided', () => {
    render(
      <Modal
        title="Modal Title"
        onClose={mockOnClose}
        primaryAction={<button>Primary Action</button>}
        secondaryAction={<button>Secondary Action</button>}
      >
        <p>Modal Content</p>
      </Modal>,
    )

    // Check for the primary action
    expect(screen.getByText('Primary Action')).toBeInTheDocument()

    // Check for the secondary action
    expect(screen.getByText('Secondary Action')).toBeInTheDocument()
  })

  test('does not render primary or secondary actions if not provided', () => {
    render(
      <Modal title="Modal Title" onClose={mockOnClose}>
        <p>Modal Content</p>
      </Modal>,
    )

    // Ensure primary and secondary actions are not in the document
    expect(screen.queryByText('Primary Action')).not.toBeInTheDocument()
    expect(screen.queryByText('Secondary Action')).not.toBeInTheDocument()
  })

  test('modal has the correct styling', () => {
    const { container } = render(
      <Modal title="Modal Title" onClose={mockOnClose}>
        <p>Modal Content</p>
      </Modal>,
    )

    // Verify modal has the correct class name for the size
    const modal = container.querySelector('.absolute.z-20')
    expect(modal).toHaveClass('left-[35vw]')
    expect(modal).toHaveClass('w-[30vw]')
    expect(modal).toHaveClass('top-[20vh]')
  })
})
