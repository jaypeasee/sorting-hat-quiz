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

    updateNameInput = (event) => {
        this.setState({
            nameInput: event.target.value
        })
    }

    render() {
        const { setUserName } = this.props
        return (
            <form 
                className="name-form"
                onSubmit={ () => setUserName(this.state.nameInput) }
            >
                <h1>What's Your Name?</h1>
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    onChange={ this.updateNameInput }
                    value={ this.state.nameInput }
                    className="name-input"
                />
                {this.state.nameInput &&
                <Link
                    to="/question"
                    className="name-btn-anchor"
                >
                    <button
                        className="name-btn"
                        onClick={ () => setUserName(this.state.nameInput) }
                    >
                    Enroll!</button>
                </Link>}
                {!this.state.nameInput &&
                <Link
                    className="name-btn-anchor"
                >
                    <button
                        className="disabled-name-btn"
                        onClick={ () => setUserName(this.state.nameInput) }
                    >
                    Enroll!</button>
                </Link>}
            </form>
        )
    }
}

export default Name