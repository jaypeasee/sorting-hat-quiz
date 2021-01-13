import './Question.scss'
import { Link } from 'react-router-dom'

const Question = () => {
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

export default Question