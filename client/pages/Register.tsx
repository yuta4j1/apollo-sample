import React, { useEffect } from "react"
import { useHistory } from "react-router-dom"
import {
  useFetchBooksQuery,
  useFetchPublishersLazyQuery,
  useCreatePublisherMutation,
} from "../gen/types"
import EditBook from "../components/EditBook"
import PublisherForm from "../components/PublisherForm"
import PublisherRow from "../components/PublisherRow"

const RegisterPage: React.FC<{}> = () => {
  const booksResult = useFetchBooksQuery()
  const [fetchPublishers, publisherResult] = useFetchPublishersLazyQuery({
    fetchPolicy: "network-only",
  })
  const [createPublisher, { data }] = useCreatePublisherMutation()
  useEffect(() => {
    fetchPublishers()
  }, [])
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
            {publisherResult.data.publishers.map((v, i) => (
              <PublisherRow key={i} {...v} />
            ))}
          </div>
        )}
      </div>
      <PublisherForm
        onSubmit={(name: string, address: string, capital: number) => {
          createPublisher({
            variables: {
              publisher: {
                name,
                address,
                capital,
              },
            },
          })
          fetchPublishers()
        }}
      />
      <div>
        <button onClick={e => history.push("/")}>{"戻る"}</button>
      </div>
    </div>
  )
}

export default RegisterPage
