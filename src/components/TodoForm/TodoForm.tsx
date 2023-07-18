import React, { useEffect, useState } from "react";
import { Button } from "../Button";
import { InputField } from "../input/InputField";
import { InputWrapper } from "../input/InputWrapper";
import { useForm } from "react-hook-form";
import { Todo, UrgencyLevel } from "../../App";
import { v4 as uuidv4 } from "uuid";
import { EmergencyLevelList } from "./EmergencyLevelList";

type TodoFormProps = {
  handleTodoChange: (todo: Todo) => void;
  todoToEdit: Todo | undefined;
};
export const emergencyLevel = ["low", "medium", "high"] as UrgencyLevel[];

export const TodoForm = ({ handleTodoChange, todoToEdit }: TodoFormProps) => {
  const [selected, setSelected] = useState<UrgencyLevel>(emergencyLevel[0]);
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
      urgencyLevel: selected,
    });
    setValue("title", "");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex justify-start items-start space-x-4"
    >
      <div className="w-84 flex items-center space-x-4">
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
        <EmergencyLevelList selected={selected} setSelected={setSelected} />
      </div>
      <Button type="submit">{todoToEdit ? "Edit" : "Create"} todo</Button>
    </form>
  );
};
