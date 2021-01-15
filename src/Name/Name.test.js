import Name from './Name'
import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'

describe('Name', () => {
    const setUserName = jest.fn()
    let nameInput
    let disabledBtn
    const history = createMemoryHistory()

    beforeEach(() => {
        render(
            <Router history={history}>
                <Name setUserName={setUserName}/>
            </Router>
        )
        nameInput = screen.getByPlaceholderText("Your Name")
        disabledBtn = screen.getByTestId("disabled-name-btn")
    })

    it('should have a form title', () => {
        expect(screen.getByText("What's Your Name?")).toBeInTheDocument()
    })

    it('should have a name input', () => {
        expect(nameInput).toBeInTheDocument()
    })

    it('should have a disabled button to start', () => {
        expect(disabledBtn).toBeInTheDocument()
    })
})