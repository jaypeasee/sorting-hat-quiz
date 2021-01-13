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
        const { questionNumber, tallyQuestionResults } = this.props
        return (
            <section className="question-slide">
                <h1>What do you value most?</h1>
                <section className="question-options">
                    <Link
                        to={questionNumber < 3 ? '/question' : '/result'}
                    >
                        <button
                            onClick={ () => tallyQuestionResults("Gryffindor") }
                        >{answerValues[0]}</button>
                    </Link>
                    <Link
                        to={questionNumber < 3 ? '/question' : '/result'}
                    >
                        <button
                            onClick={ () => tallyQuestionResults("Hufflepuff") }
                        >{answerValues[1]}</button>
                    </Link>
                    <Link
                        to={questionNumber < 3 ? '/question' : '/result'}
                    >
                        <button
                            onClick={ () => tallyQuestionResults("Slytherin") }
                        >{answerValues[2]}</button>
                    </Link>
                    <Link
                        to={questionNumber < 3 ? '/question' : '/result'}
                    >
                        <button
                            onClick={ () => tallyQuestionResults("Ravenclaw") }
                        >{answerValues[3]}</button>
                    </Link>
                </section>
            </section>
        )
    }
}

export default Question