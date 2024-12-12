import { useCallback, useState } from 'react'
import TextField from '../TextField'
import FormError from '../FormError'
import Button from '../Button'
import { login } from '../../api'
import useAuth from '../../hooks/useAuth'

type FormData = {
  email: string
  password: string
}

const EMPTY_FORM = {
  email: '',
  password: '',
}

type Props = {
  onCancel: () => void
}

export default function Login({ onCancel }: Props) {
  const [tokens, setTokens] = useAuth()
  const [formData, setFormData] = useState<FormData>(EMPTY_FORM)
  const [error, setError] = useState<string>()

  const onCancelForm = useCallback(() => {
    setFormData(EMPTY_FORM)
    onCancel()
  }, [onCancel])

  const onChange = useCallback(
    (field: string) => (value: string) =>
      setFormData((prev) => ({ ...prev, [field]: value })),
    [setFormData],
  )

  const onSubmit = useCallback(
    async (e?: React.FormEvent) => {
      if (e) e.preventDefault()
      try {
        const { jwt } = await login(formData.email, formData.password)

        setTokens({ jwt })
        location.href = '/dashboard'
      } catch (error) {
        setError(`Login Error: ` + (error as Error).message)
        return
      }
    },
    [formData, setTokens],
  )

  return (
    <div className="flex flex-col p-5 gap-4">
      <div className="text-4xl text-center w-full my-4">Login</div>
      <TextField
        name="Email"
        value={formData.email}
        onChange={onChange('email')}
        onEnter={onSubmit}
        align="center"
      />
      <TextField
        name="Password"
        value={formData.password}
        onEnter={onSubmit}
        onChange={onChange('password')}
        hide
        align="center"
      />

      {error && <FormError message={error} />}

      <div className="flex flex-row">
        <Button onClick={() => onSubmit()} disabled={!tokens.ready}>
          Login
        </Button>
        <Button onClick={onCancelForm} type="secondary">
          Cancel
        </Button>
      </div>
    </div>
  )
}
