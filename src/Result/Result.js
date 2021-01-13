import './Result.scss'
import { Link } from 'react-router-dom'

const Result = () => {
    return (
        <section>
            <h1>CONGRATS JP, YOU BELONG TO RAVENCLAW</h1>
            <img />
            <p>This is the description about the house</p>
            <section>
                <h2>Other members of this house</h2>
                <ul>

                </ul>
            </section>
            <p>Not happy with the result?</p>
            <Link
                to="/"
            >
                <button>Retake The Quiz</button>
            </Link>
            
        </section>
    )
}

export default Result