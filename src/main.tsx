import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ApolloProvider } from '@apollo/client'
import { BrowserRouter, Route } from 'react-router-dom'
import client from './apollo'

function ShellElement({ title }: { title: string }) {
  return <div>{title}</div>
}

createRoot(document.getElementById('root')!).render(
  <ApolloProvider client={client}>
    <StrictMode>
      <BrowserRouter>
        <Route path='/' element={<App />} />
        <Route path='/projects' element={<ShellElement title='Projects'/>} />
        <Route path='/tasks' element={<ShellElement title='Tasks'/>} />
        <Route path='/profile' element={<ShellElement title='Profile'/>} />
        <Route path='*' element={<ShellElement title='Route Not Found'/>} />
      </BrowserRouter>
    </StrictMode>
  </ApolloProvider>,
)
