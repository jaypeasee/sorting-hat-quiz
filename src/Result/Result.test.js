import Result from './Result'
import { mockRavenclawData, mockCharacterData } from '../mockData'
import { screen, render, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'

describe("Result", () => {
    const history = createMemoryHistory()
    const resetQuiz = jest.fn()

    beforeEach(() => {
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
        const title = await waitFor(screen.getByText("RAVENCLAW!"))
    })
})