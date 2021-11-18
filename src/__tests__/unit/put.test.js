import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import TodoList from "../../components/TodoList";

afterEach(cleanup); // olmazsa cikar

describe('TodoList component Update', () => {
  test('UPDATE input in document', () => {
    const doc = render(<TodoList />);

    const updateItem = doc.getByTestId('allTodoList');
    fireEvent.click(updateItem);

    expect(screen.getByTestId('allTodoList')).toBeInTheDocument();
    expect(updateItem).not.toBeChecked();
  });
})