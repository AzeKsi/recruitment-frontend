import { TodoForm } from "./components/todos/todo-form/todo-form";
import { TodosList } from "./components/todos/todos-list";
import styles from "./styles/global.module.scss";

export function App() {
  return (
    <div className={styles["container"]}>
      <h1>Just start typing... 🧑‍💻</h1>
      <div className={styles["wrapper"]}>
        <TodoForm />
        <TodosList />
      </div>
    </div>
  );
}
