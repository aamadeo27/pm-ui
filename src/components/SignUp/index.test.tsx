import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing'
import SignUp from '.'
import { gql } from '@apollo/client'
import { userEvent } from '@testing-library/user-event'

const onCancel = jest.fn()
const onSuccess = jest.fn()

const CREATE_USER = gql`
  mutation CreateUser($email: String!, $name: String!, $password: String!) {
    create_user(email: $email, name: $name, password: $password) {
      id
      name
      email
      active
    }
  }
`

const mocks = [
  {
    request: {
      query: CREATE_USER,
      variables: {
        name: 'user',
        email: 'user@mail.com',
        password: '1234567890',
      },
    },
    result: {
      data: {
        create_user: {
          id: 1,
          name: 'user',
          email: 'user@mail.com',
          active: false,
        },
      },
    },
  },
]

function renderForm() {
  return render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <SignUp onCancel={onCancel} onSuccess={onSuccess} />
    </MockedProvider>,
  )
}

describe('Sign Up Form', () => {
  it(`Renders the form correctly`, () => {
    renderForm()

    expect(screen.getByRole('textbox', { name: 'Name' })).toBeDefined()
    expect(screen.getByRole('textbox', { name: 'Email' })).toBeDefined()
    expect(screen.getByLabelText('Password')).toBeDefined()
    expect(screen.getByLabelText('Confirm Password')).toBeDefined()
  })

  it(`Doesn't allow to create a user when there is invalid fields`, async () => {
    renderForm()

    fireEvent.click(screen.getByRole('button', { name: 'Create User' }))

    expect(screen.findByText('Name is required')).toBeDefined()
    expect(screen.findByText('Email is required')).toBeDefined()
    expect(screen.findByText('Password is required')).toBeDefined()
    expect(screen.findByText('Password Confirmation is required')).toBeDefined()

    expect(onSuccess).not.toHaveBeenCalled()
  })

  it(`allows to create a user when there isn't any invalid field`, async () => {
    renderForm()

    await userEvent.type(screen.getByRole('textbox', { name: 'Name' }), 'user')
    await userEvent.type(
      screen.getByRole('textbox', { name: 'Email' }),
      'user@mail.com',
    )
    await userEvent.type(screen.getByLabelText('Password'), '1234567890')
    await userEvent.type(
      screen.getByLabelText('Confirm Password'),
      '1234567890',
    )

    fireEvent.click(screen.getByRole('button', { name: 'Create User' }))

    await waitFor(() => expect(onSuccess).toHaveBeenCalled())
  })
})
