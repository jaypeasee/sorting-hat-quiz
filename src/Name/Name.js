import './Name.scss'
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Name extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nameInput: "",
            formInvalid: false
        }
        this.history = this.props.history
    }

    updateNameInput = (event) => {
        this.setState({
            nameInput: event.target.value
        })
    }

    handleNameSubmit = (event) => {
        event.preventDefault()
        if (!this.state.nameInput) {
            this.setState({
                formInvalid: true
            })
        } else {
            this.props.setUserName(this.state.nameInput)
            this.setState({
                formInvalid: false
            })
            this.props.history.push('/question')
        }
    }

    render() {
        return (
            <form 
                className="name-form"
                onSubmit={ this.handleNameSubmit }
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
                <button className="name-btn">
                Enroll!</button>
                }
                {!this.state.nameInput &&
                <button className="disabled-name-btn">
                Enroll!</button>}
                {this.state.formInvalid && 
                <p>Please enter your name before continuing</p>}
            </form>
        )
    }
}

export default withRouter(Name)