import React from "react";
import { Button } from "./Button";
import { InputField } from "./input/InputField";
import { InputWrapper } from "./input/InputWrapper";
import { useForm } from "react-hook-form";
import { Todo } from "../App";
import { v4 as uuidv4 } from "uuid";

type TodoFormProps = {
  addTodo: (todo: Todo) => void;
};

export const TodoForm = ({ addTodo }: TodoFormProps) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Todo>();

  const FirstNameErrorMessage =
    errors.title?.type === "required" && "Please add a title to your todo";

  const onSubmit = (data: Todo) => {
    addTodo({
      title: data.title,
      id: uuidv4(),
    });
    setValue("title", "");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex justify-start items-start space-x-4"
    >
      <div className="w-44">
        <InputWrapper
          className="w-1/2"
          label=""
          hideLabel
          error={FirstNameErrorMessage}
        >
          <InputField
            placeholder="Todo title"
            {...register("title", { required: true })}
          />
        </InputWrapper>
      </div>
      <Button type="submit">Create todo</Button>
    </form>
  );
};
