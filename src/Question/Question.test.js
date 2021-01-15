import Question from './Question'
import { mockAnswerData } from '../mockData'
import { screen, render, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'

const history = createMemoryHistory()
const tallyQuestionResults = jest.fn()
const determineUserHouse = jest.fn()

describe('Question 1', () => {
    let answerBtns

    beforeEach(() => {
        render(
            <Router history={ history }>
                <Question 
                    tallyQuestionResults={ tallyQuestionResults }
                    determineUserHouse={ determineUserHouse }
                    questionNumber={1}
                    hogwartsHouses={ mockAnswerData }
                />
            </Router>
        )
        answerBtns = screen.getAllByRole('button')
    })

    it('should have a question with the question number', () => {
        expect(screen.getByText("1. What do you value most?")).toBeInTheDocument()
    })

    it('should have four answers per question', () => {
        expect(answerBtns[0]).toBeInTheDocument()
        expect(answerBtns.length).toBe(4)
        expect(screen.getByText("Nerdy")).toBeInTheDocument()
    })

    it('should call tallyQuestionResults() on answer button click', () => {
        userEvent.click(answerBtns[1])
        expect(tallyQuestionResults).toHaveBeenCalledWith("Hufflepuff")
    })

    it('should call determineUserHouse() on answer button click', async () => {
        userEvent.click(answerBtns[2])
        expect(await waitFor(() => determineUserHouse)).toHaveBeenCalledTimes(1)
    })

    it('should not change the url path when the question is answered', () => {
        expect(history.location.pathname).toBe("/question")
        userEvent.click(answerBtns[3])
        expect(history.location.pathname).toBe("/question")
    })
})

describe("Question 4", () => {
    let ravenclawBtn

    beforeEach(() => {
        render(
            <Router history={ history }>
                <Question 
                    tallyQuestionResults={ tallyQuestionResults }
                    determineUserHouse={ determineUserHouse }
                    questionNumber={4}
                    hogwartsHouses={ mockAnswerData }
                />
            </Router>
        )
        ravenclawBtn = screen.getByText("Plain")
    })

    it('should include the number four in the question', () => {
        expect(screen.getByText("4. What do you value most?"))
    })

    it('should have a different answer for each corresponding house from the previous question', () => {
        expect(ravenclawBtn).toBeInTheDocument()
    })

    it('should change the url path to the result page when a question is answered', () => {
        userEvent.click(ravenclawBtn)
        expect(history.location.pathname).toBe("/result")
    })
})