import './Result.scss'
import mcgonagallImg from './mcgonagall.png'
import { getAllCharacters } from '../utilities'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Result extends Component {
    constructor(props) {
        super(props)
        this.state = {
            houseMates: [],
        }
    }

    componentDidMount() {
        const {color1, color2} = this.props.userHouse
        getAllCharacters()
            .then(data => this.setState({
                houseMates: this.filterHouseMateNames(data),
                primaryColor: color1.toLowerCase(),
                secondaryColor: color2.toLowerCase()
            }))
    }

    filterHouseMateNames = (characters) => {
        const houseMateDetails = characters.filter(char => {
            return char.house === this.props.userHouse.name
        })
        return houseMateDetails.map(char => {
            return <li>{char.name}</li>
        })
    }

    render() {
        const { userName } = this.props
        const {
            name, founder, mascot, headOfHouse, houseGhost,
            value1, value2, value3, value4, color1, color2, 
        } = this.props.userHouse
        const { primaryColor, secondaryColor } = this.state
        return (
            <section 
                className={name.toLowerCase()}
            >
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
                    <p>Not happy with the result?</p>
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
                </section>
            </section>
        )
    }
}

export default Result