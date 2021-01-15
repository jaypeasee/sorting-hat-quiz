import Question from './Question'
import { mockHogwartsData } from '../mockData'
import { screen, render, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'

describe('Question', () => {
    const history = createMemoryHistory()
    const tallyQuestionResults = jest.fn()
    const determineUserHouse = jest.fn()
    let answerBtns

    beforeEach(() => {
        render(
            <Router history={history}>
                <Question 
                    tallyQuestionResults={tallyQuestionResults}
                    determineUserHouse={determineUserHouse}
                    questionNumber={1}
                    hogwartsHouses={mockHogwartsData}
                />
            </Router>
        )
        answerBtns = screen.getAllByRole('button')
    })

    it('should have a question', () => {
        expect(screen.getByText("1. What do you value most?")).toBeInTheDocument()
    })

    it('should have four answers per question', () => {
        expect(answerBtns[0]).toBeInTheDocument()
        expect(answerBtns.length).toBe(4)
    })

    it('should call tallyQuestionResults() on answer button click', () => {
        userEvent.click(answerBtns[1])
        expect(tallyQuestionResults).toHaveBeenCalledWith("Hufflepuff")
    })

    it('should call determineUserHouse() on answer button click', async () => {
        userEvent.click(answerBtns[2])
        expect(await waitFor(() => determineUserHouse)).toHaveBeenCalledTimes(1)
    })
})