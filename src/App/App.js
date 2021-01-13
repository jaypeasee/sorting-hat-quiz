import './App.scss'
import { getHogwartsHouses } from '../utilities'
import Intro from '../Intro/Intro'
import Name from '../Name/Name'
import Question from '../Question/Question'
import Result from '../Result/Result'
import Error from '../Error/Error'
import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

class App extends Component {
  constructor() {
    super()
    this.state = {
      userHouse: {},
      userName: "",
      questionResults: [],
      hogwartsHouses: []
    }
  }

  componentDidMount() {
    getHogwartsHouses()
      .then(data => this.setState({
        hogwartsHouses: data
      }))
  }

  setUserName = (enteredName) => {
    this.setState({
      userName: enteredName
    })
  }

  tallyQuestionResults = (houseName) => {
    this.setState({
      questionResults: [...questionResults, houseName]
    })
  }

  render() {
    return (
      <main className="app">
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return (
                <Intro />
              )
            }}
          />
          <Route 
            exact
            path="/your-name"
            render={() => {
              return (
                <Name 
                  setUserName={this.setUserName}
                />
              )
            }}
          />
          <Route 
            exact
            path="/question"
            render={() => {
              return (
                <Question 
                  tallyQuestionResults={this.tallyQuestionResults}
                />
              )
            }}
          />
          <Route 
            exact
            path="/result"
            render={() => {
              return (
                <Result />
              )
            }}
          />
          <Route 
            path="/"
            render={() => {
              return (
                <Error />
              )
            }}
          />
        </Switch>
      </main>
    )
  }
}

export default App