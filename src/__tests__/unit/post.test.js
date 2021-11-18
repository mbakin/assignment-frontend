import { render, screen } from "@testing-library/react";
import TodoList from "../../components/TodoList";



describe('TodoList component POST', () => {
  test('should renders POST method', async () => {
    render(<TodoList/>)

    const todoElements = await screen.findAllByTestId("allTodoList");
    expect(todoElements).not.toHaveLength(0);
  })
})