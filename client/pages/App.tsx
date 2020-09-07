import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { ApolloProvider } from "@apollo/client"
import { client } from "../apollo"
import IndexPage from "."
import RegistertPage from "./Register"

const Router: React.FC<{}> = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={IndexPage} exact />
        <Route path="/register" component={RegistertPage} exact />
      </Switch>
    </BrowserRouter>
  )
}

const App: React.FC<{}> = () => {
  return (
    <ApolloProvider client={client}>
      <Router />
    </ApolloProvider>
  )
}

export default App
