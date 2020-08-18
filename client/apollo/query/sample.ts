import { gql } from "@apollo/client"

export const FETCH_BOOKS = gql`
  query FetchBooks($title: String) {
    books(title: $title) {
      title
      author
    }
  }
`
