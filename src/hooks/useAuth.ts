import { useEffect, useState } from "react";

export type AuthTokens = {
  jwt?: string
  ready: boolean
}

export default function useAuth(){
  const [tokens, setTokens] = useState<AuthTokens>({ ready: false })

  useEffect(() => {
    fetch(`http://localhost:3000/v1/auth`, { credentials: 'include' }).then(async (r) => {
      const data = await r.json()

      setTokens({ ...data, ready: true })
    })
  }, [])

  return tokens
}