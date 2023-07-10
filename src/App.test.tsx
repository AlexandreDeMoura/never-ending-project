import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import App from "./App";

function setup(jsx: any) {
  return {
    user: userEvent.setup(),
    ...render(jsx),
  };
}

it("Should create one todo per user interaction with the right todo's title", async () => {
  const { user } = setup(<App />);

  await user.type(screen.getByRole("textbox"), "oui oui baguette");
  await user.click(screen.getByRole("button", { name: /Create todo/i }));
  await user.type(screen.getByRole("textbox"), "deuxième todo");
  await user.click(screen.getByRole("button", { name: /Create todo/i }));

  expect(screen.getAllByTestId("todo")).toHaveLength(2);
  expect(screen.getAllByTestId("todo")[0].textContent).toEqual(
    "oui oui baguette"
  );
  expect(screen.getAllByTestId("todo")[1].textContent).toEqual("deuxième todo");
});

it("Should not create a todo if the input field is empty", async () => {
  const { user } = setup(<App />);

  await user.click(screen.getByRole("button", { name: /Create todo/i }));
  const todo = screen.queryAllByTestId("todo");
  expect(todo).toHaveLength(0);
});

it("Should remove the right todo when user click on remove image", async () => {
  const { user } = setup(<App />);

  await user.type(screen.getByRole("textbox"), "oui oui baguette");
  await user.click(screen.getByRole("button", { name: /Create todo/i }));
  expect(screen.getAllByTestId("todo")).toHaveLength(1);

  await user.click(screen.getByRole("img", { name: "remove todo" }));
  expect(screen.queryAllByTestId("todo")).toHaveLength(0);
});

it("Should edit the right todo when user click on edit image", async () => {
  const { user } = setup(<App />);

  await user.type(screen.getByRole("textbox"), "first todo");
  await user.click(screen.getByRole("button", { name: /Create todo/i }));
  await user.type(screen.getByRole("textbox"), "second todo");
  await user.click(screen.getByRole("button", { name: /Create todo/i }));
  expect(screen.getAllByTestId("todo")).toHaveLength(2);

  await user.click(screen.getAllByRole("img", { name: "edit todo" })[0]);
  await user.clear(screen.getByRole("textbox"));
  await user.type(screen.getByRole("textbox"), "first todo edited");
  await user.click(screen.getByRole("button", { name: /Edit todo/i }));

  expect(screen.getAllByTestId("todo")).toHaveLength(2);
  expect(screen.getAllByTestId("todo")[0].textContent).toEqual(
    "first todo edited"
  );
  expect(screen.getAllByTestId("todo")[1].textContent).toEqual("second todo");
});
