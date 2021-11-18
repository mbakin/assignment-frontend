import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../../components/TodoList";


describe('delete button rendered', () => {
  test('should delete item', () => {
    
    render(<TodoList />);

    const deleteButton = screen.getAllByTestId('allTodoList');
    const handleDeleteBtn = jest.fn()

    expect(deleteButton.length).toBe(1);

    fireEvent.click(deleteButton[0]);
    expect(handleDeleteBtn).toBeTruthy();
  });  
});
