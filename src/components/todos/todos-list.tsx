import { useTodosStore } from "../../stores/todo.store";
import { Todo } from "./todo/todo";
import styles from "../../styles/global.module.scss";
import { TodosListProps } from "./todos-list.props";

export const TodosList = ({ todos }: TodosListProps) => {
  const doneTodos = useTodosStore((state) => state.getDoneTodos());

  return (
    <div className={styles["todos-list"]}>
      <div className={styles["todos-list-counters"]}>
        <p>Created tasks: {todos.length}</p>
        <p>
          Completed {doneTodos.length} of {todos.length}
        </p>
      </div>
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
