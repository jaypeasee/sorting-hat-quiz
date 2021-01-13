import './Name.scss'
import { Link } from 'react-router-dom'


const Name = () => {
    return (
        <form className="name-form">
            <h1>What's Your Name?</h1>
            <input
                type="text"
                name="name"
                placeholder="Your Name"
            />
            <Link
                to="/question"
            >
                <button>Enroll!</button>
            </Link>
        </form>
    )
}

export default Name