import Question from './Question'
import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'

describe('Question', () => {
    const history = createMemoryHistory()
    const tallyQuestionResults = jest.fn()
    const determineUserHouse = jest.fn()
    const sampleHogwartsData = [
        {
            name: "Gryffindor",
            value1: "Cocky",
            value2: "Wreckless",
            value3: "Attention-seeking",
            value4: "Self-righteous"
        },
        {
            name: "Hufflepuff",
            value1: "Boring",
            value2: "Unimpressive",
            value3: "Nice...",
            value4: "Dim"
        },
        {
            name: "Slytherin",
            value1: "Entitled",
            value2: "Elitist",
            value3: "Snobbish",
            value4: "Cheater"
        },
        {
            name: "Ravenclaw",
            value1: "Nerdy",
            value2: "Teachers pet",
            value3: "Unimaginative",
            value4: "Plain"
        }
    ]
    let ravenclawBtn1

    beforeEach(() => {
        render(
            <Router history={history}>
                <Question 
                    tallyQuestionResults={tallyQuestionResults}
                    determineUserHouse={determineUserHouse}
                    questionNumber={1}
                    hogwartsHouses={sampleHogwartsData}
                />
            </Router>
        )
        ravenclawBtn1 = screen.getByText('Nerdy')
    })

    it('should have a question', () => {
        expect(screen.getByText("1. What do you value most?")).toBeInTheDocument()
    })
})