import { render, screen } from "@testing-library/react";
import TodoList from "../../components/TodoList";


describe('TodoList component GET', () => {
  test('should renders GET method request success', async () => {
    render(<TodoList/>)

    const todoElements = await screen.findAllByTestId("allTodoList");
    expect(todoElements).not.toHaveLength(0);
  })
})