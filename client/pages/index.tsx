import React from "react"
import SomethingList from "../components/SomethingList"

const IndexPage: React.FC<{}> = () => {
  return (
    <>
      <div>
        <h1>{"Apollo Sample Page"}</h1>
      </div>
      <SomethingList />
    </>
  )
}

export default IndexPage
