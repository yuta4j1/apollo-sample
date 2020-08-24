import express from "express"
import { ApolloServer } from "apollo-server-express"
import { QueryResolvers, Book, Author, Resolvers } from "./gen/types"

const Query: QueryResolvers = {
  books: (parent, args, context, info) => {
    if (args.title) {
      return books.filter(v => v.title.indexOf(args.title) !== -1)
    } else {
      return books
    }
  },
}

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

const server = new ApolloServer({ resolvers })
const app = express()
server.applyMiddleware({ app })
app.listen({ port: 4000 }, () => {
  console.log(`Server ready for http://localhost:4000${server.graphqlPath}`)
})
