import axios from 'axios'

const client = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASEURL}/v1`,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const login = async (email: string, password: string) => {
  const response = await client.post(
    '/auth',
    {
      email,
      password,
    },
    {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    },
  )

  return response.data as { jwt: string }
}
