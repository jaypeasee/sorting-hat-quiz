import Result from './Result'
import { getAllCharacters } from '../utilities'
import { mockRavenclawData, mockCharacterData } from '../mockData'
import { screen, render, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
jest.mock('../utilities')

describe("Result", () => {
    const history = createMemoryHistory()
    const resetQuiz = jest.fn()

    beforeEach(() => {
        getAllCharacters.mockResolvedValueOnce(mockCharacterData)
        render (
            <Router history={ history }>
                <Result
                    resetQuiz={ resetQuiz }
                    userHouse={ mockRavenclawData }
                    userName={ "Fred Weasley" }
                />
            </Router>
        )
    })

    it('should have a house declaration title', async () => {
        expect(screen.getByText("RAVENCLAW!")).toBeInTheDocument()
    })

    it('should have a house description', () => {
        expect(screen.getByTestId('house-description'))
    })

    it('should have a fellow house members declaration', () => {
        expect(screen.getByText("Your fellow Ravenclaws")).toBeInTheDocument()
    })

    it('should render an opportunity to retake the test', () => {
        expect(screen.getByText("Not happy with the result?")).toBeInTheDocument()
        expect(screen.getByText("Get Sorted Again")).toBeInTheDocument()
        screen.debug()
    })

    it('should call resetQuiz when the restart button is clicked', () => {
        const restartBtn = screen.getByText("Get Sorted Again")
        userEvent.click(restartBtn)
    })

    it('should change the url path to question when the restart button is clicked', () => {
        const restartBtn = screen.getByText("Get Sorted Again")
        userEvent.click(restartBtn)
        expect(history.location.pathname).toBe("/question")
    })
})