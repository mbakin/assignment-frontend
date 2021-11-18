import { render, screen, fireEvent } from "@testing-library/react";

import TodoAdd from "../../components/TodoAdd";



describe("if click 'Create Task' button", () => {

  describe('with empty todos', () => {
    test('does not trigger handleAddTodo function', () => {
      render(<TodoAdd/>)
      
      const handleAddTodo = jest.fn()
      const buttonElement = screen.getByRole('button')

      fireEvent.click(buttonElement)
      expect(handleAddTodo).not.toHaveBeenCalled()
    })    
  });
  

  describe('with data inside todo', () => {
    test('triggers handleAddTodo function', () => {
      const {queryByPlaceholderText} = render(<TodoAdd />)
      
      const buttonElement = screen.getByRole('button')
      const addTodoInput = queryByPlaceholderText("Write something..")
      const handleAddTodo = jest.fn()

      fireEvent.change(addTodoInput, {target: {value: "buy some milk!"}})
      fireEvent.click(buttonElement)
      expect(handleAddTodo).not.toHaveBeenCalled()
    })
  });
});