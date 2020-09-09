import React from "react"
import { useHistory } from "react-router-dom"
import { useFetchBooksQuery, useFetchPublishersQuery } from "../gen/types"
import EditBook from "../components/EditBook"

const RegisterPage: React.FC<{}> = () => {
  const booksResult = useFetchBooksQuery()
  const publisherResult = useFetchPublishersQuery()
  console.log("[RegisterPage] loading", booksResult.loading)
  const history = useHistory()
  console.log("[RegisterPage] updated⭐️")
  return (
    <div>
      {!booksResult.data ||
      (!!booksResult.data && booksResult.data.books.length === 0) ? (
        <p>{"No Items!!"}</p>
      ) : (
        booksResult.data.books.map((v, i) => <EditBook key={i} book={v} />)
      )}
      <div>
        {!publisherResult.data ||
        (!!publisherResult.data &&
          publisherResult.data.publishers.length === 0) ? (
          <p>{"Nodata..."}</p>
        ) : (
          <div>
            <p>{publisherResult.data.publishers[0].name}</p>
          </div>
        )}
      </div>
      <div>
        <button onClick={e => history.push("/")}>{"戻る"}</button>
      </div>
    </div>
  )
}

export default RegisterPage
