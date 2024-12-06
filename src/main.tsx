import { StrictMode, useMemo } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ApolloProvider } from '@apollo/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import createApolloClient from './apollo'
import WelcomePage from './pages/Welcome'
import useAuth from './hooks/useAuth'
import DashboardPage from './pages/Dashboard'
import UnderConstruction from './components/UnderConstruction'
import NotFound from './components/NotFound'

function App() {
  if (import.meta.env.DEV) {
    console.log('Environment Variables', import.meta.env)
  }

  const [auth] = useAuth()
  const { client, authenticated } = useMemo(() => {
    if (!auth.ready) return { client: null, authenticated: false }

    return {
      client: createApolloClient(auth),
      authenticated: !!auth.jwt,
    }
  }, [auth])

  if (!client) return 'Loading...'

  return (
    <ApolloProvider client={client}>
      <StrictMode>
        <BrowserRouter>
          <Routes>
            <Route path={authenticated ? '/' : '*'} element={<WelcomePage />} />
            {authenticated && (
              <>
                <Route path="/projects" element={<UnderConstruction />} />
                <Route path="/teams" element={<UnderConstruction />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/user/:id" element={<UnderConstruction />} />
                <Route path="*" element={<NotFound />} />
              </>
            )}
          </Routes>
        </BrowserRouter>
      </StrictMode>
    </ApolloProvider>
  )
}

createRoot(document.getElementById('root')!).render(<App />)
