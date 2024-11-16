import { useCallback, useState } from "react"
import TextField from "../TextField"
import FormError from "../FormError"
import Button from "../Button"
import { useNavigate } from "react-router-dom"
import { login } from "../../api"
import useAuth from "../../hooks/useAuth"
import { AxiosError } from "axios"

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

export default function Login({ onCancel }: Props){
  const auth = useAuth()
  const [formData, setFormData] = useState<FormData>(EMPTY_FORM)
  const [error, setError] = useState<string>()
  const navigate = useNavigate()
  
  const onCancelForm = useCallback(() => {
    setFormData(EMPTY_FORM)
    onCancel()
  }, [onCancel])

  const onChange = useCallback((field: string) => 
    (value: string) => setFormData((prev) => ({ ...prev, [field]: value})
  ), [setFormData])

  const onSubmit = useCallback(async (e?: React.FormEvent) => {
    if (e) e.preventDefault()

    try {
      if (auth.csrf) {
        try{
          await login(
            auth.csrf,
            formData.email,
            formData.password,
          )

          navigate('/dashboard')
        } catch (error){
          setError((error as AxiosError).message)
        }
      } else {
        setError('No CSRF Token available')
      }
    } catch(error) {
      setError((error as Error).message)
      return
    }
  }, [formData])

  return <div className="flex flex-col p-5 gap-4">
    <div className="text-4xl text-center w-full my-4">
      Login
    </div>
    <TextField name='Email' value={formData.email} onChange={onChange('email')} />
    <TextField name='Password' value={formData.password} onChange={onChange('password')} hide/>

    {error && <FormError message={error} />}

    <div className="flex flex-row">
      <Button onClick={() => onSubmit()} disabled={!auth.ready}>Login</Button>
      <Button onClick={onCancelForm} type="secondary">Cancel</Button>
    </div>
  </div>
}