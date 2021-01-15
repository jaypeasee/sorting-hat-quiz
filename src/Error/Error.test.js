import Error from './Error'
import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'

describe('Error', () => {
    let homeBtn
    const history = createMemoryHistory()

    beforeEach(() => {
        render(
            <Router history={history}>
                <Error errorMessage="Sorry, Something went wrong."/>
            </Router>
        )
        homeBtn = screen.getByText("Return To The Sorting Hat")
    })

    it('should have an error message', () => {
        expect(screen.getByText('Sorry, Something went wrong.')).toBeInTheDocument()
    })
})