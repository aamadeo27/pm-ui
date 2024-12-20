import { useEffect, useState } from 'react'

export type AuthTokens = {
  jwt?: string
  ready: boolean
}

export default function useAuth() {
  const [tokens, setTokens] = useState<AuthTokens>({ ready: false })

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASEURL}/v1/auth`, {
      credentials: 'include',
    }).then(async (r) => {
      const data = await r.json()

      setTokens({ ...data, ready: true })
    })
  }, [])

  return [
    tokens,
    (t: Omit<AuthTokens, 'ready'>) => setTokens({ ...t, ready: true }),
  ] as [AuthTokens, (t: Omit<AuthTokens, 'ready'>) => void]
}
