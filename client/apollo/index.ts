import { ApolloClient, InMemoryCache, ApolloLink, Operation, Observable } from "@apollo/client"

// const anyMiddleware = new ApolloLink((operation: Operation, forward) => {
//   operation.query.

// })

const cache = new InMemoryCache()

export const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache,
})
