import React, { useEffect } from "react";
import { Button } from "./Button";
import { InputField } from "./input/InputField";
import { InputWrapper } from "./input/InputWrapper";
import { useForm } from "react-hook-form";
import { Todo } from "../App";
import { v4 as uuidv4 } from "uuid";

type TodoFormProps = {
  handleTodoChange: (todo: Todo) => void;
  todoToEdit: Todo | undefined;
};

export const TodoForm = ({ handleTodoChange, todoToEdit }: TodoFormProps) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Todo>();

  useEffect(() => {
    if (todoToEdit) {
      setValue("title", todoToEdit.title);
    }
  }, [todoToEdit, setValue]);

  const FirstNameErrorMessage =
    errors.title?.type === "required" && "Please add a title to your todo";

  const onSubmit = (data: Todo) => {
    handleTodoChange({
      title: data.title,
      id: todoToEdit ? todoToEdit.id : uuidv4(),
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
      <Button type="submit">{todoToEdit ? "Edit" : "Create"} todo</Button>
    </form>
  );
};
