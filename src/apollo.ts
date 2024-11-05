import { HttpLink, ApolloClient, from, InMemoryCache } from '@apollo/client'
import { onError } from '@apollo/client/link/error'

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if(graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) => {
      console.error(`[GraphqlError] Message: ${message}, Location: ${locations}, Path: ${path}`)
    })
  }

  if(networkError){
    console.error(`[NetworkError] ${networkError}`)
  }
})

const httpLink = new HttpLink({
  uri: `http://localhost:3000/graphql`
})

export default new ApolloClient({
  link: from([errorLink, httpLink]),
  cache: new InMemoryCache()
})

