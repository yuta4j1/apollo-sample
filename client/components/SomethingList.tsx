import React, { useState, useEffect } from "react"
import { useFetchBooksLazyQuery } from "../gen/types"
import { useHistory } from "react-router-dom"

const SomethingList: React.FC<{}> = () => {
  const [fetchBooks, { error, loading, data }] = useFetchBooksLazyQuery()
  const [searchParam, setSearchParam] = useState("")

  const history = useHistory()

  console.log("updated!")

  useEffect(() => {
    fetchBooks()
  }, [])

  return (
    <div>
      <h2>{"Query Data!"}</h2>
      {!loading && data ? (
        <ul>
          {data.books.map((v, i) => (
            <li key={i}>{`author: ${v.author.name}  title: ${v.title}`}</li>
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
      <div>
        <button onClick={e => history.push("/register")}>
          {"書籍情報を変更"}
        </button>
      </div>
    </div>
  )
}

export default SomethingList
