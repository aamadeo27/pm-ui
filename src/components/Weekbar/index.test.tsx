import { render, screen } from '@testing-library/react'
import Weekbar from '.'

describe('Weekbar', () => {
  it('renders all 7 days', () => {
    render(<Weekbar />)
    ;[
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ].forEach((day) => expect(screen.findByText(day)).toBeDefined())
  })
})
