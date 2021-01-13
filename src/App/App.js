import './App.scss'
import Intro from '../Intro/Intro'
import Name from '../Name/Name'
import Question from '../Question/Question'
import Result from '../Result/Result'
import Error from '../Error/Error'
import { Route, Switch } from 'react-router-dom'

const App = () => {
  return (
    <main>
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
              <Name />
            )
          }}
        />
        <Route 
          exact
          path="/question"
          render={() => {
            return (
              <Question />
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

export default App