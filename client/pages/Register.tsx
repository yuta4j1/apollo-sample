import React from "react"
import { useHistory } from "react-router-dom"
import {
  useFetchBooksQuery,
  useFetchPublishersQuery,
  useCreatePublisherMutation,
} from "../gen/types"
import EditBook from "../components/EditBook"
import PublisherForm from "../components/PublisherForm"
import PublisherRow from "../components/PublisherRow"

const RegisterPage: React.FC<{}> = () => {
  const { data: booksData, loading: booksLoading } = useFetchBooksQuery()
  const {
    data: publisherData,
    refetch: publisherRefetch,
  } = useFetchPublishersQuery()
  const [createPublisher, { data }] = useCreatePublisherMutation()

  console.log("[RegisterPage] loading", booksLoading)
  const history = useHistory()
  console.log("[RegisterPage] updated⭐️")

  return (
    <div>
      {!booksData || (!!booksData && booksData.books.length === 0) ? (
        <p>{"No Items!!"}</p>
      ) : (
        booksData.books.map((v, i) => <EditBook key={i} book={v} />)
      )}
      <div>
        {!publisherData ||
        (!!publisherData && publisherData.publishers.length === 0) ? (
          <p>{"Nodata..."}</p>
        ) : (
          <div>
            {publisherData.publishers.map((v, i) => (
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
          publisherRefetch()
        }}
      />
      <div>
        <button onClick={e => history.push("/")}>{"戻る"}</button>
      </div>
    </div>
  )
}

export default RegisterPage
