import './Result.scss'
import Error from '../Error/Error'
import mcgonagallImg from './mcgonagall.png'
import { getAllCharacters } from '../utilities'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Result extends Component {
    constructor(props) {
        super(props)
        this.state = {
            houseMates: [],
            resultError: false
        }
    }

    componentDidMount() {
        getAllCharacters()
            .then(data => this.setState({
                houseMates: this.filterHouseMateNames(data),
                resultError: false
            }))
            .catch(this.setState({
                resultError: true
            }))
    }

    filterHouseMateNames = (characters) => {
        const houseMateDetails = characters.filter(char => {
            return char.house === this.props.userHouse.name
        })
        return houseMateDetails.map(char => {
            return <li key={char._id}>{char.name}</li>
        })
    }

    render() {
        const { userName } = this.props
        const {
            name, founder, mascot, headOfHouse, houseGhost,
            value1, value2, value3, value4, color1, color2, 
        } = this.props.userHouse
        return (
            <section 
                className={name && name.toLowerCase()}
            >
                {!this.state.resultError && name &&
                <section className="result-announcement">
                    <div className="announcement-txt">
                        <h1>{`${name.toUpperCase()}!`}</h1>
                        <p>
                            {`Welcome to ${name}, ${userName}!
                            Founded by the ${mascot}, ${founder}, and led by Professor ${headOfHouse},
                            ${name}s are known for their ${value1.toLowerCase()}, ${value2.toLowerCase()}, 
                            ${value3.toLowerCase()}, and ${value4.toLowerCase()}. Walking through the common, 
                            you will see lots of ${color1.toLowerCase()} and ${color2.toLowerCase()} 
                            and ${houseGhost}, the house ghost floating through walls.
                            While at Hogwarts, your fellow ${name}s will be your family.`}
                        </p>
                        <h2>{`Your fellow ${name}s`}</h2>
                    <ul>
                        {this.state.houseMates}
                    </ul>
                    <p className="restart-txt">Not happy with the result?</p>
                    <Link
                        to="/question"
                        className="restart-btn-anchor"
                    >
                    <button
                        onClick={this.props.resetQuiz}
                        className="restart-btn"
                    >Get Sorted Again</button>
                </Link>
                    </div>
                    <img 
                        src={mcgonagallImg}
                        alt="Minerva McGonagall"
                        className="mcgonagall-img"
                    />
                </section>}
                {this.state.resultError || !this.props.userHouse &&
                <Error 
                    errorMessage="Sorry, something went wrong."
                />}
            </section>
        )
    }
}

export default Result