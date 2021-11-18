import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import TodoList from "../../components/TodoList";

afterEach(cleanup); // olmazsa cikar

describe('TodoList component DELETE', () => {
  test('deleted', () => {
    const doc = render(<TodoList />);

    const deleteItem = doc.getByTestId('allTodoList');

    fireEvent.click(deleteItem);
    expect(deleteItem).toBeInTheDocument();
    expect(screen.queryByText('allTodoList')).toBeNull();
  })
})