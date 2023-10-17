import { TodoForm } from "./components/todos/todo-form/todo-form";
import { TodosList } from "./components/todos/todos-list";
import { useTodosStore } from "./stores/todo.store";
import styles from "./styles/global.module.scss";

export function App() {
  const { todos } = useTodosStore();

  return (
    <div className={styles["container"]}>
      <h1>Just start typing... 🧑‍💻</h1>
      <div className={styles["wrapper"]}>
        <TodoForm />
        <TodosList todos={todos} />
      </div>
    </div>
  );
}
