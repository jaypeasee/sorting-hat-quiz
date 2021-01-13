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
        this.updateAnswerValues()
    }

    updateAnswerValues = () => {
        const { hogwartsHouses, questionNumber } = this.props
        console.log(this.props.questionNumber)
        const currentAnswers = hogwartsHouses.map(house => {
            return house[`value${questionNumber}`]
        })
        this.setState({
            answerValues: currentAnswers
        })
    }

    handleAnswerSubmit = async (selectedHouse) => {
        await this.props.tallyQuestionResults(selectedHouse)
        this.updateAnswerValues()
    }

    render() {
        const { answerValues } = this.state
        const { questionNumber, tallyQuestionResults } = this.props
        return (
            <section className="question-slide">
                <h1>What do you value most?</h1>
                <section className="question-options">
                    <Link
                        to={questionNumber < 4 ? '/question' : '/result'}
                    >
                        <button
                            onClick={ () => this.handleAnswerSubmit("Gryffindor") }
                        >{answerValues[0]}</button>
                    </Link>
                    <Link
                        to={questionNumber < 4 ? '/question' : '/result'}
                    >
                        <button
                            onClick={ () => this.handleAnswerSubmit("Hufflepuff") }
                        >{answerValues[1]}</button>
                    </Link>
                    <Link
                        to={questionNumber < 4 ? '/question' : '/result'}
                    >
                        <button
                            onClick={ () => this.handleAnswerSubmit("Slytherin") }
                        >{answerValues[2]}</button>
                    </Link>
                    <Link
                        to={questionNumber < 4 ? '/question' : '/result'}
                    >
                        <button
                            onClick={ () => this.handleAnswerSubmit("Ravenclaw") }
                        >{answerValues[3]}</button>
                    </Link>
                </section>
            </section>
        )
    }
}

export default Question