import { ApolloServer, gql } from "apollo-server"
import { QueryResolvers, Book, Author, Resolvers, Publisher } from "./gen/types"
import fs from "fs"

const Query: QueryResolvers = {
  books: (parent, args, context, info) => {
    if (args.title) {
      return books.filter(v => v.title.indexOf(args.title) !== -1)
    } else {
      return books
    }
  },
  publishers: (parent, args, context, info) => {
    const publishers: Publisher[] = [
      {
        id: "1",
        name: "集英社",
        address: "東京都江戸川区松本2-13-8",
        capital: 1340000000,
      },
      {
        id: "2",
        name: "講談社",
        address: "東京都足立区谷在家1-15-9",
        capital: 940000000,
      },
      {
        id: "3",
        name: "旺文社",
        address: "千葉県山武郡横芝光町鳥喰下5-2-6-6階",
        capital: 540000000,
      },
    ]
    return publishers
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
