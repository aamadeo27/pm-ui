import { act, fireEvent, render, screen, waitFor } from '@testing-library/react'
import Login from '.'
import { userEvent } from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { login } from '../../api'
import { AxiosError } from 'axios'


const onCancel = jest.fn()
const mockedLogin = jest.mocked(login)

jest.mock('../../api', () => ({
  __esModule: true,
  login: jest.fn(),
}))
jest.mock('../../hooks/useAuth', () => () => ({
  jwt: undefined, ready: true
}))

function renderForm(){
  return render(
      <MemoryRouter>
        <Login onCancel={onCancel} />
      </MemoryRouter>)
}

describe('Login Form', () => {
  it (`Renders the form correctly`, () => {
    renderForm()

    expect(screen.getByRole('textbox', { name: 'Email' })).toBeDefined()
    expect(screen.getByLabelText('Password')).toBeDefined()
  })

  it(`shows error when authentication fails`, async () => {
    renderForm()

    mockedLogin.mockRejectedValueOnce(new AxiosError('Invalid user or password'))

    await userEvent.type(screen.getByRole('textbox', { name: 'Email'}), 'user@mail.com')
    await userEvent.type(screen.getByLabelText('Password'), 'invalid-password')
    
    fireEvent.click(screen.getByRole('button', { name: 'Login' }))


    await waitFor(() => expect(screen.getByText('Invalid user or password')))
  })

  it(`navigates to dashboard if login is successful`, async () => {
    renderForm()
    
    await userEvent.type(screen.getByRole('textbox', { name: 'Email'}), 'user@mail.com')
    await userEvent.type(screen.getByLabelText('Password'), '1234567890')

    await act(async () => {
      fireEvent.click(screen.getByRole('button', { name: 'Login' }));
    });

    expect(mockedLogin).toHaveBeenCalledWith('user@mail.com', '1234567890')
  })
})