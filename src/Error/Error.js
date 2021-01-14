import './Error.scss'

const Error = (props) => {
    return (
        <section className="error-section">
            {!props.errorMessage && <h1>Oops! This page does not exist.</h1>}
            {props.errorMessage && <h1>{props.errorMessage}</h1>}
        </section>
    )
}

export default Error