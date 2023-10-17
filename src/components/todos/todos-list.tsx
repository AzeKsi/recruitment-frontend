import { useTodosStore } from "../../stores/todo.store";
import { Todo } from "./todo/todo";
import styles from "../../styles/global.module.scss";

export const TodosList = () => {
  const { todos } = useTodosStore();
  const doneTodos = useTodosStore((state) => state.getDoneTodos());

  return (
    <div className={styles["todos-list"]}>
      <ul className={styles["todos-list-container"]}>
        {todos.length > 0 ? (
          <>
            {todos.map(
              (todo) =>
                !todo.isDone && (
                  <Todo id={todo.id} text={todo.text} isDone={todo.isDone} key={todo.id} />
                )
            )}
            {doneTodos.length > 0 && (
              <div className={styles["todos-list-done"]}>
                <h2>Done:</h2>
                {doneTodos.map((todo) => (
                  <Todo id={todo.id} text={todo.text} isDone={todo.isDone} key={todo.id} />
                ))}
              </div>
            )}
          </>
        ) : (
          <p className={styles[""]}>Nothings here 🤷‍♂️</p>
        )}
      </ul>
    </div>
  );
};
