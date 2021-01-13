import './Name.scss'
import { Link } from 'react-router-dom'


const Name = () => {
    return (
        <form className="name-form">
            <input
                type="text"
                name="name"
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