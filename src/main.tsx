import { StrictMode, useMemo } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ApolloProvider } from '@apollo/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import createApolloClient from './apollo'
import WelcomePage from './pages/Welcome'
import useAuth from './hooks/useAuth'
import DashboardPage from './pages/Dashboard'

function ShellElement({ title }: { title: string }) {
  return <div>{title}</div>
}

function App() {
  const [auth] = useAuth()
  const { client, authenticated } = useMemo(() => {
    if (!auth.ready) return { client: null, authenticated: false }

    return {
      client: createApolloClient(auth),
      authenticated: !!auth.jwt,
    }
  }, [auth])

  if (!client) return 'Loading...'

  console.log('Authenticated', authenticated)

  return (
    <ApolloProvider client={client}>
      <StrictMode>
        <BrowserRouter>
          <Routes>
            <Route path={authenticated ? '/' : '*'} element={<WelcomePage />} />
            {authenticated && (
              <>
                <Route
                  path="/projects"
                  element={<ShellElement title="Projects" />}
                />
                <Route path="/teams" element={<ShellElement title="Teams" />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route
                  path="/user/:id"
                  element={<ShellElement title="Profile" />}
                />
                <Route
                  path="*"
                  element={<ShellElement title="Route Not Found" />}
                />
              </>
            )}
          </Routes>
        </BrowserRouter>
      </StrictMode>
    </ApolloProvider>
  )
}

createRoot(document.getElementById('root')!).render(<App />)
