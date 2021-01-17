import './Error.scss'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

const Error = ({errorMessage}) => {
    return (
        <section className="error-section">
            <h1>{errorMessage}</h1>
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