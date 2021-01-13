import './Question.scss'
import { Component } from 'react'
import { Link } from 'react-router-dom'

class Question extends Component {
    constructor(props) {
        super(props)
        this.state = {
            answerValues: []
        }
    }

    componentDidMount() {
        const { hogwartsHouses, questionNumber } = this.props
        const currentAnswers = hogwartsHouses.map(house => {
            return house[`value${questionNumber}`]
        })
        this.setState({
            answerValues: currentAnswers
        })
    }

    render() {
        const { answerValues } = this.state
        return (
            <section className="question-slide">
                <h1>What do you value most?</h1>
                <section className="question-options">
                    <Link
                        to='/question'>
                        <button>{answerValues[0]}</button>
                    </Link>
                    <Link
                        to='/question'>
                        <button>{answerValues[1]}</button>
                    </Link>
                    <Link
                        to='/question'>
                        <button>{answerValues[2]}</button>
                    </Link>
                    <Link
                        to='/question'>
                        <button>{answerValues[3]}</button>
                    </Link>
                </section>
            </section>
        )
    }
}

export default Question