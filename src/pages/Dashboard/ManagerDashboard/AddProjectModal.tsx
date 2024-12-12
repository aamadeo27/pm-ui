import { useCallback, useMemo, useState } from 'react'
import Modal from '../../../components/Modal'
import TextField from '../../../components/TextField'
import Button from '../../../components/Button'
import FormError from '../../../components/FormError'
import { useCreateProjectMutation } from '../../../generated/graphql'

type Props = {
  onClose: () => void
}

export default function AddProjectModal({ onClose }: Props) {
  const [name, setName] = useState('')
  const [error, setError] = useState<Error>()

  console.log(useCreateProjectMutation)

  const [createProject, { loading }] = useCreateProjectMutation()

  const onSubmit = useCallback(
    async (e?: React.FormEvent) => {
      if (e) e.preventDefault()
      try {
        setError(undefined)
        await createProject({ variables: { name } })
        onClose()
      } catch (error) {
        setError(error as Error)
        return
      }
    },
    [createProject, name, onClose],
  )

  const createBtn = useMemo(
    () => (
      <Button onClick={onSubmit} variant="box" disabled={loading}>
        Create
      </Button>
    ),
    [onSubmit, loading],
  )

  const cancelBtn = useMemo(
    () => (
      <Button onClick={onClose} type="secondary" variant="box">
        Cancel
      </Button>
    ),
    [onClose],
  )

  return (
    <Modal
      title="Create Project"
      primaryAction={createBtn}
      secondaryAction={cancelBtn}
      onClose={onClose}
    >
      <div className="flex flex-col gap-5 w-full">
        <form onSubmit={onSubmit}>
          <TextField
            name={'Name'}
            value={name}
            onChange={setName}
            align="left"
            fullwidth
          />
        </form>
        {error && <FormError message={error.message} />}
      </div>
    </Modal>
  )
}
