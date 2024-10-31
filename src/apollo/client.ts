import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client'
import pLimit from 'p-limit'

// Create a concurrency limiter
const limit = pLimit(3)

const createThrottledLink = (uri: string) => {
  return new HttpLink({
    uri,
    fetch: (uri, options) => {
      return limit(() => fetch(uri, options))
    },
  })
}

export const healthClient = new ApolloClient({
  uri: 'https://api.thegraph.com/index-node/graphql',
  cache: new InMemoryCache(),
})

export const blockClient = new ApolloClient({
  uri: 'https://graph-node.flame.astria.org/subgraphs/name/flame-blocks',
  cache: new InMemoryCache(),
  queryDeduplication: true,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'no-cache',
    },
    query: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'all',
    },
  },
})

export const client = new ApolloClient({
  link: createThrottledLink('https://graph-node.flame.astria.org/subgraphs/name/uniswap-v3'),
  // uri: 'https://graph-node.flame.astria.org/subgraphs/name/uniswap-v3',
  cache: new InMemoryCache({
    typePolicies: {
      Token: {
        // Singleton types that have no identifying field can use an empty
        // array for their keyFields.
        keyFields: false,
      },
      Pool: {
        // Singleton types that have no identifying field can use an empty
        // array for their keyFields.
        keyFields: false,
      },
    },
  }),
  queryDeduplication: true,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'no-cache',
    },
    query: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'all',
    },
  },
})
