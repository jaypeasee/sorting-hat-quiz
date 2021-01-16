import Intro from './Intro'
import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'

describe ('Intro', () => {
    let startBtn
    const history = createMemoryHistory()

    beforeEach(() => {
        render(
            <Router history={ history }>
                <Intro />
            </Router>
        )
        startBtn = screen.getByText("Get Sorted")
    })

    it('Should have a title', () => {
        expect(screen.getByText("The Hogwarts Sorting Hat's Song")).toBeInTheDocument()
    })

    it('should have a song', () => {
        expect(screen.getByTestId('sorting-hats-song')).toBeInTheDocument()
    })

    it('should have a Get Sorted button', () => {
        expect(startBtn).toBeInTheDocument()
    })

    it('should change the url path when the Start Button is clicked', () => {
        userEvent.click(startBtn)
        expect(history.location.pathname).toBe("/your-name")
    })
})