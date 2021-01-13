import './Name.scss'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Name extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nameInput: ""
        }
    }

    render() {
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
}

export default Name