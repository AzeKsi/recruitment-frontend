import { InputProps } from "./input.props";
import styles from "../../../styles/global.module.scss";
import clsx from "clsx";

export const Input = ({ inputValue, handleInputChange, error }: InputProps) => {
  return (
    <div className={styles["todo-input-container"]}>
      <input
        type="text"
        name="text"
        placeholder=""
        value={inputValue}
        onChange={handleInputChange}
        className={clsx(error && styles["border-error"])}
        data-cy="new-todo"
      />
      {error && <p className={styles["error"]}>{error}</p>}
    </div>
  );
};
