import { ApolloServer, gql } from "apollo-server"
import { QueryResolvers, Book, Author, Resolvers } from "./gen/types"
import fs from "fs"

const Query: QueryResolvers = {
  books: (parent, args, context, info) => {
    if (args.title) {
      return books.filter(v => v.title.indexOf(args.title) !== -1)
    } else {
      return books
    }
  },
}

const typeDefs = gql(fs.readFileSync("./graphql/schema.graphql", "utf-8"))


const authorA: Author = {
  id: "1",
  name: "test",
}

const authorB: Author = {
  id: "2",
  name: "test2",
}

const books: Book[] = [
  {
    title: "Harry Potter and the Chamber of Secrets",
    author: authorA,
  },
  {
    title: "Jurassic Park",
    author: authorB,
  },
]

const resolvers: Resolvers = {
  Query,
}

const server = new ApolloServer({ resolvers, typeDefs })
server.listen({ port: 4000 }, () => {
  console.log(`Server ready for http://localhost:4000${server.graphqlPath}`)
})
