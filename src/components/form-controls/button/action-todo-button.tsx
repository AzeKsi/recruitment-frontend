import { ActionTodoButtonProps } from "./button.props";
import styles from "../../../styles/global.module.scss";
import clsx from "clsx";

export const ActionTodoButton = ({
  handleRemoveTodo,
  text,
  icon,
  iconSize,
  type,
}: ActionTodoButtonProps) => {
  const Icon = icon;

  return (
    <button
      className={clsx(
        type === "remove" && styles["btn-remove"],
        type === "done" && styles["btn-done"]
      )}
      onClick={handleRemoveTodo}>
      {text}
      {Icon && <Icon width={iconSize} height={iconSize} />}
    </button>
  );
};
