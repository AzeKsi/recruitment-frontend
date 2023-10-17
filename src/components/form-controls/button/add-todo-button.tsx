import { AddTodoButtonProps } from "./button.props";
import styles from "../../../styles/global.module.scss";

export const AddTodoButton = ({ handleAddTodo, text, icon, iconSize }: AddTodoButtonProps) => {
  const Icon = icon;

  return (
    <button className={styles["btn-add"]} onClick={handleAddTodo} data-cy="submit">
      {text}
      {Icon && <Icon width={iconSize} height={iconSize} />}
    </button>
  );
};
