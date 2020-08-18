import React from "react"
import { ApolloProvider } from "@apollo/client"
import { client } from "../apollo"
import SomethingList from "../components/SomethingList"

const App: React.FC<{}> = () => {
  return (
    <ApolloProvider client={client}>
      <div>
        <h1>{"Apollo Sample"}</h1>
      </div>
      <SomethingList />
    </ApolloProvider>
  )
}

export default App
