import { ApolloServer, gql } from "apollo-server"
import { QueryResolvers, Resolvers, MutationResolvers } from "./gen/types"
import fs from "fs"
import { store, addPublisher } from "./store"

const Query: QueryResolvers = {
  books: (parent, args, context, info) => {
    if (args.title) {
      return store.books.filter(v => v.title.indexOf(args.title) !== -1)
    } else {
      return store.books
    }
  },
  publishers: (parent, args, context, info) => {
    return store.publishers
  },
}

const Mutation: MutationResolvers = {
  createPublisher: (parent, args, context, info) => {
    const { name, address, capital } = args.input
    return addPublisher(name, address, capital)
  },
}

const typeDefs = gql(fs.readFileSync("./graphql/schema.graphql", "utf-8"))

const resolvers: Resolvers = {
  Query,
  Mutation,
}

const server = new ApolloServer({ resolvers, typeDefs })
server.listen({ port: 4000 }, () => {
  console.log(`Server ready for http://localhost:4000${server.graphqlPath}`)
})
