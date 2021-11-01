import { render, screen, fireEvent } from "@testing-library/react";

import TodoAdd from "../../components/TodoAdd";

describe('render TodoAdd components correctly', () => {
  
  test('renders input element', () => {
    render(<TodoAdd />)

    const queryByTestId = screen.getByTestId("taskInput")
    expect(queryByTestId).toBeInTheDocument()
    
  });
  
  test('renders button element', () => {
    render(<TodoAdd />)

    const buttonElement = screen.getByRole('button')
    expect(buttonElement).toBeInTheDocument()
    
  });
});

describe('should on change input value', () => {
  
  test('should update on change', () => {
    const {queryByPlaceholderText} = render(<TodoAdd />)

    const addTodoInput = queryByPlaceholderText("Write something..")

    fireEvent.change(addTodoInput, {target: {value: "buy some milk!"}})

    expect(addTodoInput.value).toBe("buy some milk!")
  })
  
});


