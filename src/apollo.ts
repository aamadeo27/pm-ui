import {
  HttpLink,
  ApolloClient,
  from,
  InMemoryCache,
  ApolloLink,
} from '@apollo/client'
import { onError } from '@apollo/client/link/error'
import { AuthTokens } from './hooks/useAuth'

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) => {
      console.error(
        `[GraphqlError] Message: ${message}, Location: ${locations}, Path: ${path}`,
      )
    })
  }

  if (networkError) {
    console.error(`[NetworkError] ${networkError}`)
  }
})

const httpLink = new HttpLink({
  uri: `http://localhost:3000/graphql`,
  credentials: 'include',
})

export default function createClient(auth: AuthTokens) {
  const authLink = new ApolloLink((operation, forward) => {
    operation.setContext(({ headers = {} }) => ({
      headers: {
        ...headers,
        ...(auth.jwt ? { Authorization: `Bearer ${auth.jwt}` } : {}),
      },
    }))
    return forward(operation)
  })

  return new ApolloClient({
    link: from([errorLink, authLink, httpLink]),
    cache: new InMemoryCache(),
    credentials: 'include',
  })
}
