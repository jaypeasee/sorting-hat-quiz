import './Error.scss'
import { Link } from 'react-router-dom'

const Error = (props) => {
    return (
        <section className="error-section">
            {!props.errorMessage && <h1>Oops! This page does not exist.</h1>}
            {props.errorMessage && <h1>{props.errorMessage}</h1>}
            <Link
                to="/"
                className="error-btn-anchor"
            >
                <button className="error-btn">Return To The Sorting Hat</button>
            </Link>
        </section>
    )
}

export default Error