import { useCallback, useState } from 'react'
import TextField from '../TextField'
import FormError from '../FormError'
import { useCreateUserMutation } from '../../generated/graphql'
import Button from '../Button'
import { formSchema } from './validate'

type FormData = {
  name: string
  email: string
  password: string
  password2: string
}

const EMPTY_FORM = {
  name: '',
  email: '',
  password: '',
  password2: '',
}

type Props = {
  onCancel: () => void
  onSuccess: () => void
}

export default function SignUp({ onCancel, onSuccess }: Props) {
  const [formData, setFormData] = useState<FormData>(EMPTY_FORM)
  const [errors, setErrors] = useState<string[]>([])
  const [createUser] = useCreateUserMutation()

  const onChange = useCallback(
    (field: string) => (value: string) =>
      setFormData((prev) => ({ ...prev, [field]: value })),
    [setFormData],
  )

  const onSubmit = useCallback(
    async (e?: React.FormEvent) => {
      if (e) e.preventDefault()
      const formErrors = []
      if (formData.password !== formData.password2) {
        formErrors.push(`Passwords don't match`)
      }

      const { error } = formSchema.validate(formData, { abortEarly: false })

      if (error) {
        formErrors.push(...error.details.map((e) => e.message))
      }

      if (formErrors.length > 0) return setErrors(formErrors)
      else if (errors.length > 0) setErrors([])

      try {
        await createUser({
          variables: {
            name: formData.name,
            email: formData.email,
            password: formData.password,
          },
        })

        onSuccess()
        setFormData(EMPTY_FORM)
      } catch (error) {
        setErrors([(error as Error).message])
      }
    },
    [errors, formData, createUser, onSuccess],
  )

  const onCancelForm = useCallback(() => {
    setFormData(EMPTY_FORM)
    onCancel()
  }, [onCancel])

  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-col p-5 gap-4 h-full">
        <div className="text-4xl text-center w-full my-4">Sign Up</div>

        <TextField
          name="Name"
          value={formData.name}
          onChange={onChange('name')}
          align="center"
        />
        <TextField
          name="Email"
          value={formData.email}
          onChange={onChange('email')}
          align="center"
        />
        <TextField
          name="Password"
          value={formData.password}
          onChange={onChange('password')}
          hide
          align="center"
        />
        <TextField
          name="Confirm Password"
          value={formData.password2}
          onChange={onChange('password2')}
          hide
          align="center"
        />

        {errors.map((e) => (
          <FormError key={e} message={e} />
        ))}

        <div className="flex flex-row">
          <Button onClick={() => onSubmit()}>Create User</Button>
          <Button onClick={onCancelForm} type="secondary">
            Cancel
          </Button>
        </div>
      </div>
    </form>
  )
}
