import App from './App';
import { getAllCharacters, getHogwartsHouses } from '../utilities.js'
import { mockCharacterData, mockHouseData } from '../mockData'
import { screen, render, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { BrowserRouter, MemoryRouter } from 'react-router-dom'
import { createMemoryHistory } from 'history'
jest.mock('../utilities.js')


describe("App", () => {
  let history
  let startBtn

  beforeEach(() => {
    history = createMemoryHistory()
    getHogwartsHouses.mockResolvedValue(mockHouseData)
    getAllCharacters.mockResolvedValue(mockCharacterData)

    render (
      <BrowserRouter history={ history }>
        <App />
      </BrowserRouter>
    )
    startBtn = screen.getByText("Get Sorted")
  })

  it('should take the full quiz and get a result', async () => {
    await waitFor(() => userEvent.click(startBtn))
    const nameInput = await waitFor(() => screen.getByPlaceholderText("Your Name"))
    userEvent.type(nameInput, "Arthur Weasley")
    const nameSubmit = screen.getByText("Enroll!")
    userEvent.click(nameSubmit)

    const ravenclawAnswer1 = await waitFor(() => screen.getByText("Nerdy"))
    userEvent.click(ravenclawAnswer1)
    const gryffindorAnswer2 = await waitFor(() => screen.getByText("Wreckless"))
    userEvent.click(gryffindorAnswer2)
    const hufflepuffAnswer3 = await waitFor(() => screen.getByText("Nice..."))
    userEvent.click(hufflepuffAnswer3)
    const ravenclawAnswer4 = await waitFor(() => screen.getByText("Plain"))
    userEvent.click(ravenclawAnswer4)

    const resultTitle = await waitFor(() => screen.getByText("RAVENCLAW!"))
    expect(resultTitle).toBeInTheDocument()
  })

  //should take the full quiz with a different result
  //should be able to restart the quiz
})
