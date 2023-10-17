import { AddTodoButton } from "../../form-controls/button/add-todo-button";
import { Input } from "../../form-controls/input/input";
import { useTodoForm } from "./todo-form.effect";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import styles from "../../../styles/global.module.scss";

export const TodoForm = () => {
  const { error, todo, handleInputChange, handleAddTodo } = useTodoForm();

  return (
    <div className={styles["todo-form"]}>
      <Input inputValue={todo.text} handleInputChange={handleInputChange} error={error} />
      <AddTodoButton handleAddTodo={handleAddTodo} iconSize={32} icon={PlusCircleIcon} />
    </div>
  );
};
