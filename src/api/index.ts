import axios from 'axios'

const client = axios.create({
  baseURL: 'http://localhost:3000/v1',
  headers: {
    "Content-Type": "application/json"
  }
})

export const login = async (csrf: string, email: string, password: string) => {
  const response = await client.post('/auth', {
    email,
    password
  }, {
    headers: {
      "Content-Type": "application/json",
      "X-Csrf-Token": csrf,
    }
  })

  return response.data
}