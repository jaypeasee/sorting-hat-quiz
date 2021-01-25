import "./Result.scss"
import Error from "../Error/Error"
import mcgonagallImg from "./mcgonagall.png"
import { getAllCharacters } from "../apiCalls"
import { cleanCharacterData } from "../utilities"
import React, { Component } from "react"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"

class Result extends Component {
  constructor(props) {
    super(props)
    this.state = {
      houseMates: [],
      resultError: false,
    };
  }

  componentDidMount() {
    getAllCharacters()
      .then((data) =>
        this.setState({
          houseMates: this.listHousemates(data),
          resultError: false,
        })
      )
      .catch(
        this.setState({
          resultError: true,
        })
      );
  }

  listHousemates = (data) => {
    const cleanedCharacterData = cleanCharacterData(data, this.props.userHouse);
    return cleanedCharacterData.map((char) => {
      return (
        <li key={char._id} data-testid="housemates">
          {char.name}
        </li>
      );
    });
  };

  render() {
    const { userName } = this.props
    const {
      name,
      founder,
      mascot,
      headOfHouse,
      houseGhost,
      value1,
      value2,
      value3,
      value4,
      color1,
      color2,
    } = this.props.userHouse
    return (
      <section className={name && name.toLowerCase()}>
        {!this.state.resultError && name && (
          <section className="result-announcement">
            <div className="announcement-txt">
              <h1>{`${name.toUpperCase()}!`}</h1>
              <p data-testid="house-description">
                {`to ${name}, ${userName}!
                  Founded by the ${mascot}, ${founder}, and led by Professor ${headOfHouse},
                  ${name}s are known for their ${value1.toLowerCase()}, ${value2.toLowerCase()}, 
                  ${value3.toLowerCase()}, and ${value4.toLowerCase()}. Walking through the common, 
                  you will see lots of ${color1.toLowerCase()} and ${color2.toLowerCase()} 
                  and ${houseGhost}, the house ghost floating through walls.
                  While at Hogwarts, your fellow ${name}s will be your family.`}
              </p>
              <h2>{`Your fellow ${name}s`}</h2>
              <ul>
                {this.state.houseMates.length < 1 && (
                  <p>Finding your housemates...</p>
                )}
                {this.state.houseMates}
              </ul>
              <p className="restart-txt">Not happy with the result?</p>
              <Link to="/question" className="restart-btn-anchor">
                <button onClick={this.props.resetQuiz} className="restart-btn">
                  Get Sorted Again
                </button>
              </Link>
            </div>
            <img
              src={mcgonagallImg}
              alt="Minerva McGonagall"
              className="mcgonagall-img"
            />
          </section>
        )}
        {this.state.resultError ||
          (!this.props.userHouse && (
            <Error errorMessage="Sorry, something went wrong." />
          ))}
      </section>
    );
  }
}

export default Result

Result.protoTypes = {
  resetQuiz: PropTypes.func.isRequired,
  userHouse: PropTypes.object.isRequired,
  userName: PropTypes.string.isRequired,
}
