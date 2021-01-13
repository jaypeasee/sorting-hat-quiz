import './Result.scss'
import mcgonagallImg from './mcgonagall.png'
import { Link } from 'react-router-dom'

const Result = props => {
    return (
        <section className="result-page">
            <section className="result-announcement">
                <div className="announcement-txt">
                    <h1>CONGRATS JP, YOU BELONG TO RAVENCLAW</h1>
                    <p>This is the description about the house</p>
                </div>
                <img 
                src={mcgonagallImg}
                alt="Minerva McGonagall"
                className="mcgonagall-img"
                />
            </section>
            <section>
                <h2>Other members of this house</h2>
                <ul>

                </ul>
            </section>
            <p>Not happy with the result?</p>
            <Link
                to="/"
            >
                <button
                    onClick={props.resetQuiz}
                >Retake The Quiz</button>
            </Link>
            
        </section>
    )
}

export default Result