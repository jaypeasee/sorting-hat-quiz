import './App.scss'
import Intro from '../Intro/Intro'
import Name from '../Name/Name'
import Question from '../Question/Question'
import Result from '../Result/Result'
import Error from '../Error/Error'
import { getHogwartsHouses } from '../apiCalls'
import { cleanHouseData } from '../utilities'
import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

class App extends Component {
  constructor() {
    super()
    this.state = {
      userHouse: "",
      userName: "",
      questionResults: [],
      hogwartsHouses: [],
      houseFetchError: ""
    }
  }

  componentDidMount() {
    getHogwartsHouses()
      .then(data => this.setState({
        hogwartsHouses: cleanHouseData(data),
        houseFetchError: ""
      }))
      .catch(error => this.setState({
        houseFetchError: error
      }))
  }

  setUserName = (enteredName) => {
    this.setState({
      userName: enteredName
    })
  }

  tallyQuestionResults = (houseName) => {
    this.setState({
      questionResults: [...this.state.questionResults, houseName]
    })
  }

  determineUserHouse = () => {
    const houseCount = this.state.questionResults.reduce((houseDetails, house) => {
      !houseDetails[house] ? houseDetails[house] = 1 : houseDetails[house] += 1
      return houseDetails
    }, {})

    const sortedHouses = Object.keys(houseCount).sort((house1, house2) => {
      return houseCount[house2] > houseCount[house1] ? 1 : -1
    })

    this.setState({
      userHouse: this.state.hogwartsHouses.find(house => {
        return house.name === sortedHouses[0]
      })
    })
  }
  
  resetQuiz = () => {
    this.setState({
      userHouse: {},
      questionResults: [],
    })
  }

  render() {
    return (
      <main className="app">
        {!this.state.houseFetchError &&
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
                  setUserName={ this.setUserName }
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
                  tallyQuestionResults={ this.tallyQuestionResults }
                  hogwartsHouses={ this.state.hogwartsHouses }
                  questionNumber={ this.state.questionResults.length + 1 }
                  determineUserHouse={ this.determineUserHouse }
                />
              )
            }}
          />
          <Route 
            exact
            path="/result"
            render={() => {
              return (
                <Result 
                  resetQuiz={ this.resetQuiz }
                  userHouse={ this.state.userHouse }
                  userName={ this.state.userName }
                />
              )
            }}
          />
          <Route 
            path="/"
            render={() => {
              return (
                <Error 
                  errorMessage="Oops! This page does not exist."
                />
              )
            }}
          />
        </Switch>}
        {this.state.houseFetchError &&
        <Error 
          errorMessage="Sorry, Something went wrong."
        />
        }
      </main>
    )
  }
}

export default App