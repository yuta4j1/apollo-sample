import express from "express"
import { ApolloServer, gql } from "apollo-server-express"

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type Query {
    books(title: String): [Book]
  }
`

type Book = {
  title: string
  author: string
}

const books: Book[] = [
  {
    title: "Harry Potter and the Chamber of Secrets",
    author: "J.K. Rowling",
  },
  {
    title: "Jurassic Park",
    author: "Michael Crichton",
  },
]

const resolvers = {
  Query: {
    books: (parent, args, context, info) => {
      console.log(args.title)
      // 文字列が部分一致しているものを返す
      if (args.title) {
        return books.filter(v => v.title.indexOf(args.title) !== -1)
      } else {
        return books
      }
    },
  },
}

const server = new ApolloServer({ typeDefs, resolvers })
const app = express()
server.applyMiddleware({ app })
app.listen({ port: 4000 }, () => {
  console.log(`Server ready for http://localhost:4000${server.graphqlPath}`)
})
