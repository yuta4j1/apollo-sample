import React, { useState, useEffect } from "react"
import { useQuery, useLazyQuery } from "@apollo/client"
import { FETCH_BOOKS } from "../apollo/query/sample"
import { Books, BooksQuery } from "../types/apolloQuery"

const SomethingList: React.FC<{}> = () => {
  const [fetchBooks, { error, loading, data }] = useLazyQuery<
    Books,
    BooksQuery
  >(FETCH_BOOKS)
  const [searchParam, setSearchParam] = useState("")

  useEffect(() => {
    fetchBooks()
  }, [])

  return (
    <div>
      <h2>{"Query Data!"}</h2>
      {!loading && data ? (
        <ul>
          {data.books.map((v, i) => (
            <li key={i}>{`author: ${v.author}  title: ${v.title}`}</li>
          ))}
        </ul>
      ) : (
        <p>{"Nothing"}</p>
      )}
      <input
        type="text"
        value={searchParam}
        onChange={e => setSearchParam(e.currentTarget.value)}
      />
      <button
        onClick={() => {
          fetchBooks({
            variables: {
              title: searchParam,
            },
          })
        }}
      >
        {"再ロード"}
      </button>
    </div>
  )
}

export default SomethingList
