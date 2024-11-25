import { render, screen } from '@testing-library/react'
import TaskList from '.'

jest.mock('../../generated/graphql')

describe('Tasks Lists', () => {
  it('Renders Correctly', () => {
    render(<TaskList />)
    ;[1, 2, 3].forEach((id) => {
      expect(
        screen.getByTestId(`task-${id}-${id === 1 ? 'completed' : 'pending'}`),
      ).toBeDefined()
      expect(screen.getByTestId(`task-${id}-name`).textContent).toBe(
        `Task ${id}`,
      )
      expect(screen.getByTestId(`task-${id}-description`).textContent).toBe(
        `Get down, get down and move it all around`,
      )
      expect(screen.getByTestId(`task-${id}-project`).textContent).toBe(
        id === 1 ? 'Very Long Name for a Project' : 'Project A',
      )
    })
  })
})
