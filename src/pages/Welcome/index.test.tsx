import { fireEvent, render, screen } from '@testing-library/react'
import WelcomePage from '.'
import { MockedProvider } from '@apollo/client/testing'
import { MemoryRouter } from 'react-router-dom'

jest.mock('../../hooks/useAuth', () => () => ({
  csrf: 'csrf', jwt: undefined, ready: true
}))


describe('Welcome Page', () => {
  it('renders correctly', () => {
    render(<WelcomePage />)

    expect(screen.getByText('TaskNest')).toBeDefined()
    expect(screen.getByRole('button', { name: 'Sign Up' })).toBeDefined()
    expect(screen.getByRole('button', { name: 'Login' })).toBeDefined()

  })

  it('lets you go to sign up page', () => {
    render(<MockedProvider mocks={[]} addTypename={false}><WelcomePage /></MockedProvider>)

    fireEvent.click(screen.getByRole('button', { name: 'Sign Up' }))

    expect(screen.getByRole('textbox', { name: 'Name' })).toBeDefined()
    expect(screen.getByRole('textbox', { name: 'Email' })).toBeDefined()
    expect(screen.getByLabelText('Password')).toBeDefined()
    expect(screen.getByLabelText('Confirm Password')).toBeDefined()
  })

  it('lets you go to login page', () => {
    render(<MockedProvider mocks={[]} addTypename={false}><MemoryRouter><WelcomePage /></MemoryRouter></MockedProvider>)

    fireEvent.click(screen.getByRole('button', { name: 'Login' }))

    expect(screen.getByRole('textbox', { name: 'Email' })).toBeDefined()
    expect(screen.getByLabelText('Password')).toBeDefined()
  })
})
