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
      userHouse: "",
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
      questionResults: [...this.state.questionResults, houseName]
    })
  }

  determineUserHouse = () => {
    let houseCounts = [
      {house: "Gryffindor", count: 0},
      {house: "Hufflepuff", count: 0},
      {house: "Slytherin", count: 0},
      {house: "Ravenclaw", count: 0}
    ]

    this.state.questionResults.forEach(house => {
      if (house === "Gryffindor") {
        houseCounts[0].count += 1
      } else if (house === "Hufflepuff") {
        houseCounts[1].count += 1
      } else if (house === "Slytherin") {
        houseCounts[2].count += 1
      } else if (house === "Ravenclaw") {
        houseCounts[3].count += 1
      }
    })

    const sortedHouses = houseCounts.sort((house1, house2) => {
      return house2.count - house1.count
    })

    this.setState({
      userHouse: this.state.hogwartsHouses.find(house => {
        return house.name === sortedHouses[0].house
      })
    })
  }
  
  resetQuiz = () => {
    this.setState({
      userHouse: {},
      userName: "",
      questionResults: [],
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
                  tallyQuestionResults={ this.tallyQuestionResults }
                  hogwartsHouses={ this.state.hogwartsHouses }
                  questionNumber={ this.state.questionResults.length + 1}
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
                  resetQuiz={this.resetQuiz}
                  userHouse={this.state.userHouse}
                />
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