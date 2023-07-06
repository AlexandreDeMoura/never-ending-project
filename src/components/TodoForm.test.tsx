import React from "react";
import { render, screen } from "@testing-library/react";
import { TodoForm } from "./TodoForm";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";

function setup(jsx: any) {
  return {
    user: userEvent.setup(),
    ...render(jsx),
  };
}

test("Clicking 'add todo' with filled input field should call addTodo with the right parameter", async () => {
  const mockSave = jest.fn();
  const { user } = setup(<TodoForm addTodo={mockSave} />);

  await user.type(screen.getByRole("textbox"), "oui oui baguette");
  await user.click(screen.getByRole("button", { name: /Create todo/i }));

  expect(mockSave).toBeCalledWith({ title: "oui oui baguette" });
});

test("Clicking 'add todo' with empty input field should not call addTodo", async () => {
  const mockSave = jest.fn();
  const { user } = setup(<TodoForm addTodo={mockSave} />);

  await user.click(screen.getByRole("button", { name: /Create todo/i }));

  expect(mockSave).not.toBeCalled();
});
