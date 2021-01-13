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
        return (
            <section className="question-slide">
                <h1>What do you value most?</h1>
                <section className="question-options">
                    <Link
                        to='/question'>
                        <button>Gryffindor</button>
                    </Link>
                    <Link
                        to='/question'>
                        <button>Hufflepuff</button>
                    </Link>
                    <Link
                        to='/question'>
                        <button>Slytherin</button>
                    </Link>
                    <Link
                        to='/question'>
                        <button>Ravenclaw</button>
                    </Link>
                </section>
            </section>
        )
    }
}

export default Question