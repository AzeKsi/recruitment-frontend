import { useState } from "react";
import { useTodosStore } from "../../../stores/todo.store";
import { Todo } from "../../../models/todo.model";
import { v4 as uuidv4 } from "uuid";

export const useTodoForm = () => {
  const [todo, setTodo] = useState<Todo>({ id: "", text: "", isDone: false });
  const [error, setError] = useState("");
  const { addTodo } = useTodosStore();

  const handleAddTodo = () => {
    const id = uuidv4();

    try {
      if (todo.text === "") {
        throw new Error("You didn't start typing... 🙄");
      }

      addTodo({ id: id, text: todo.text, isDone: false });
    } catch (e) {
      setError((e as Error).message);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo({ ...todo, text: e.target.value });

    setError("");
  };

  return { todo, handleAddTodo, handleInputChange, error };
};
