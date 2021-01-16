import App from './App';
import { render, screen } from '@testing-library/react';
import { getAllCharacters, getHogwartsHouses } from '../utilities'
import { mockCharacterData, mockHouseData } from '../mockData'
import { screen, render, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
jest.mock('../utilities')


describe("App", () => {
  const history = createMemoryHistory()

  beforeEach(() => {
    getHogwartsHouses.mockResolvedValue(mockHouseData)
    getAllCharacters.mockResolvedValue(mockCharacterData)
    render (
      <Router history={ history }>
        <App></App>
      </Router>
    )
  })

  it('should take the full quiz and get a result', async () => {
    const startBtn = screen.getByText("Get Sorted")
    userEvent.click(startBtn)

    const nameInput = screen.getByPlaceholderText("Your Name")
    const nameSubmit = screen.getByText("Enroll!")
    userEvent.type(nameInput, "Arthur Weasley")
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

  //should take the full quiz with a result
  //should take the full quiz with a different result
  //should be able to restart the quiz
})
