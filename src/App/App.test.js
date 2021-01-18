import App from './App';
import { getAllCharacters, getHogwartsHouses } from '../apiCalls.js'
import { mockCharacterData, mockHouseData } from '../mockData'
import { screen, render, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom'
jest.mock('../apiCalls.js')


describe("App", () => {
  let startBtn

  beforeEach(() => {
    getHogwartsHouses.mockResolvedValue(mockHouseData)
    getAllCharacters.mockResolvedValue(mockCharacterData)

    render (
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
    startBtn = screen.getByText("Get Sorted")
  })

  it('should take the full quiz, get a result, and retake it', async () => {
    await waitFor(() => userEvent.click(startBtn))
    const nameInput = screen.getByPlaceholderText("Your Name")
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

    const restartBtn = screen.getByText("Get Sorted Again")
    userEvent.click(restartBtn)

    expect(screen.getByText("1. What do you value most?")).toBeInTheDocument()
    const answerBtns = screen.getAllByRole('button')
    expect(answerBtns.length).toBe(4)
  })
})
