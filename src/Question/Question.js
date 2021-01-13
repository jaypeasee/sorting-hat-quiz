import './Question.scss'
import { Link } from 'react-router-dom'

const Question = () => {
    return (
        <section>
            <h1>What do you value most?</h1>
            <section>
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