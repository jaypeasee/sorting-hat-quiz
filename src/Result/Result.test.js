import Result from './Result'
import { getAllCharacters } from '../apiCalls'
import { mockHouseData, mockCharacterData } from '../mockData'
import { screen, render, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
jest.mock('../apiCalls')

describe("Result", () => {
    const resetQuiz = jest.fn()
    const history = createMemoryHistory()
    let restartBtn

    beforeEach( async () => {
        getAllCharacters.mockResolvedValue(mockCharacterData)
        render (
            <Router history={ history }>
                <Result
                    resetQuiz={ resetQuiz }
                    userHouse={ mockHouseData[3] }
                    userName={ "Fred Weasley" }
                />
            </Router>
        )
        await waitFor(() => restartBtn = screen.getByText("Get Sorted Again"))
    })

    it('should have a house declaration title', () => {
        expect(screen.getByText("RAVENCLAW!")).toBeInTheDocument()
    })

    it('should have a house description', () => {
        expect(screen.getByTestId('house-description'))
    })

    it('should have a fellow house members declaration',  () => {
        expect(screen.getByText("Your fellow Ravenclaws")).toBeInTheDocument()
        const housemates = screen.getAllByTestId('housemates')
        expect(housemates.length).toBe(2)
    })

    it('should render an opportunity to retake the test', () => {
        expect(screen.getByText("Not happy with the result?")).toBeInTheDocument()
        expect(restartBtn).toBeInTheDocument()
    })

    it('should call resetQuiz when the restart button is clicked', () => {
        userEvent.click(restartBtn)
        expect(resetQuiz).toHaveBeenCalledTimes(1)
    })

    it('should change the url path to question when the restart button is clicked', () => {
        userEvent.click(restartBtn)
        expect(history.location.pathname).toBe("/question")
    })
})