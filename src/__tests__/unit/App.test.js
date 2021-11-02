import { render, screen } from "@testing-library/react";

import App from "../../App";

describe('App components render elements on screen', () => {
  
  test('renders Welcome User as a text', () => {
    render(<App />)
  
    const welcomeUserElement = screen.getByText("Welcome User!")
    expect(welcomeUserElement).toBeInTheDocument();
  });
  
  test('renders Your Tasks as a text', () => {
    render(<App />)

    const yourTasksText = screen.getByText("Your Tasks")
    expect(yourTasksText).toBeInTheDocument()
  });

  test("renders TodoAdd's element", () => {
    render(<App />)
    const queryByTestId = screen.getByTestId("taskInput")
    const createTaskButton = screen.getByRole('button')
       
    expect(queryByTestId).toBeInTheDocument()
    expect(createTaskButton).toBeInTheDocument()
  })

});
