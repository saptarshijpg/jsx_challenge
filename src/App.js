import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import About from './components/About'
import Header from './components/Header'
import Home from './components/Home'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import ToDoList from './components/ToDoList'
import Error from './components/Error'
class App extends Component
{
  state = {
    renderedResponse: ''
  }

  getResponse = async () =>
  {
    const response = await fetch( '/api/aboutus' )
    const body = await response.json()
    if ( response !== 200 ) {
      throw Error( body.message )
    }
    return body
  }
  componentDidMount()
  {
    this.getResponse().then( res =>
    {
      const someData = res
      this.setState( { renderedResponse: someData } )
    } )
  }

  render()
  {
    const { renderedResponse } = this.state

    return (
      <Router>
        <div className="App container-fluid">
          <Header />
          <Switch>
            <Route exact path="/">
              <p>{renderedResponse.ex}</p>
              <Home />
            </Route>
            <Route exact path="/signup">
              <SignUp />
            </Route>
            <Route exact path="/signin">
              <SignIn />
            </Route>
            <Route exact path="/aboutus">
              <About />
            </Route>
            <Route exact path="/todo">
              <ToDoList />
            </Route>
            <Route component={Error} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
