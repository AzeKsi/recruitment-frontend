import { TodoProps } from "./todo.props";
import { TrashIcon } from "@heroicons/react/24/solid";
import { useTodosStore } from "../../../stores/todo.store";
import { ActionTodoButton } from "../../form-controls/button/action-todo-button";
import { CheckIcon } from "@heroicons/react/24/solid";
import styles from "../../../styles/global.module.scss";

export const Todo = ({ text, id, isDone }: TodoProps) => {
  const { deleteTodo, toggleTodoDone } = useTodosStore();

  return (
    <li className={styles["todo"]}>
      <div className={styles["todo-text"]}>
        <p>{text}</p>
        {isDone && <span className={styles["todo-done"]}>Done</span>}
      </div>
      <div className={styles["todo-actions"]}>
        <ActionTodoButton
          type="done"
          handleRemoveTodo={() => toggleTodoDone(id)}
          iconSize={24}
          icon={CheckIcon}
        />
        <ActionTodoButton
          type="remove"
          handleRemoveTodo={() => deleteTodo(id)}
          iconSize={24}
          icon={TrashIcon}
        />
      </div>
    </li>
  );
};
