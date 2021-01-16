import App from './App';
import { render, screen } from '@testing-library/react';
import { getAllCharacters, getHogwartsHouses } from '../utilities'
import { mockRavenclawData, mockCharacterData } from '../mockData'
import { screen, render, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
jest.mock('../utilities')


describe("App", () => {
  const history = createMemoryHistory()

  beforeEach(() => {
    getHogwartsHouses.mockResolvedValue()
    
    render (
      <Router history={ history }>
        <App></App>
      </Router>
    )
  })
})
