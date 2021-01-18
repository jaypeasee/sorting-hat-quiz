import Name from "./Name"
import { screen, render } from "@testing-library/react"
import "@testing-library/jest-dom"
import userEvent from "@testing-library/user-event"
import { Router } from "react-router-dom"
import { createMemoryHistory } from "history"

describe("Name", () => {
  const setUserName = jest.fn();
  let nameInput
  let disabledBtn
  const history = createMemoryHistory();

  beforeEach(() => {
    render(
      <Router history={history}>
        <Name setUserName={setUserName} />
      </Router>
    );
    nameInput = screen.getByPlaceholderText("Your Name");
    disabledBtn = screen.getByTestId("disabled-name-btn");
  })

  it("should have a form title", () => {
    expect(screen.getByText("What's Your Name?")).toBeInTheDocument();
  })

  it("should have a name input", () => {
    expect(nameInput).toBeInTheDocument();
  })

  it("should have a disabled button if the name input is empty", () => {
    expect(disabledBtn).toBeInTheDocument();
    userEvent.type(nameInput, "Remus Lupin");
    expect(disabledBtn).not.toBeInTheDocument();
  })

  it("should render an error message if the disabled button is clicked", () => {
    userEvent.click(disabledBtn);
    expect(
      screen.getByText("Please enter your name before continuing")
    ).toBeInTheDocument();
  })

  it("should render an enabled button only if the name input has text in it", () => {
    userEvent.type(nameInput, "Neville Longbottom");
    const enabledBtn = screen.getByTestId("enabled-name-btn");
    expect(enabledBtn).toBeInTheDocument();
    userEvent.clear(nameInput);
    expect(enabledBtn).not.toBeInTheDocument();
  })

  it("should call the setUserName() method on the enabled button", () => {
    userEvent.type(nameInput, "Ginny Weasley");
    const enabledBtn = screen.getByTestId("enabled-name-btn");
    userEvent.click(enabledBtn);
    expect(setUserName).toHaveBeenCalledWith("Ginny Weasley");
  })

  it("should not call the setUserName() method on the disbaled button", () => {
    userEvent.click(disabledBtn);
    expect(setUserName).not.toHaveBeenCalled();
  })

  it("should change the url path if the enabled button is clicked", () => {
    userEvent.type(nameInput, "Ron Weasley");
    const enabledBtn = screen.getByTestId("enabled-name-btn");
    userEvent.click(enabledBtn);
    expect(history.location.pathname).toBe("/question");
  })
})
