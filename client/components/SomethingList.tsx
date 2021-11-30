import React, { useState, useEffect } from "react"
import { useFetchBooksQuery } from "../gen/types"
import { useHistory } from "react-router-dom"

const SomethingList: React.FC<{}> = () => {
  const [searchParam, setSearchParam] = useState("")
  const { error, loading, data, refetch } = useFetchBooksQuery({
    variables: { title: searchParam },
  })

  const history = useHistory()
  console.log("updated!")

  if (error) {
    return (
      <p
        style={{
          color: "red",
        }}
      >
        データの取得に失敗しました。
      </p>
    )
  }

  return (
    <div>
      {!loading && data ? (
        <div>
          <input
            type="text"
            value={searchParam}
            onChange={e => setSearchParam(e.currentTarget.value)}
          />
          <button onClick={() => refetch()}>絞り込みワード検索</button>
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Author</th>
                <th>Book Title</th>
              </tr>
            </thead>
            <tbody>
              {data.books.map((v, i) => (
                <tr key={i}>
                  <td>
                    <button onClick={() => history.push("/edit")}>編集</button>
                  </td>
                  <td>{v.author.name}</td>
                  <td>{v.title}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>{"Nothing"}</p>
      )}
    </div>
  )
}

export default SomethingList
