import React from "react"
import { Book } from "../gen/types"

type Props = {
  book: Book
}

const EditBook: React.FC<Props> = props => {
  return (
    <div>
      <div>
        <p>title: </p>
        <p>{props.book.title}</p>
      </div>
      <div></div>
    </div>
  )
}

export default EditBook
