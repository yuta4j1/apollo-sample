import React from "react"
import { useHistory } from "react-router-dom"
import { useFetchBooksQuery } from "../gen/types"
import EditBook from "../components/EditBook"

const RegisterPage: React.FC<{}> = () => {
  const { data, loading, error } = useFetchBooksQuery()
  console.log("[RegisterPage] loading", loading)
  const history = useHistory()
  console.log("[RegisterPage] updated⭐️")
  return (
    <div>
      {!data || (!!data && data.books.length === 0) ? (
        <p>{"No Items!!"}</p>
      ) : (
        data.books.map((v, i) => <EditBook key={i} book={v} />)
      )}
      <div>
        <button onClick={e => history.push("/")}>{"戻る"}</button>
      </div>
    </div>
  )
}

export default RegisterPage
