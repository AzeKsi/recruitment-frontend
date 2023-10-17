import { create } from "zustand";
import { Todo } from "../models/todo.model";

interface TodosState {
  todos: Todo[];
  setTodos: (todos: Todo[]) => void;
  addTodo: (item: Todo) => void;
  deleteTodo: (id: string) => void;
  toggleTodoDone: (id: string) => void;
  getDoneTodos: () => Todo[];
}

export const useTodosStore = create<TodosState>((set, get) => ({
  todos: [],
  setTodos: (todos) => set({ todos }),
  addTodo: (item) => set((state) => ({ todos: [...state.todos, item] })),
  deleteTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),
  toggleTodoDone: (id) => {
    set((state) => ({
      todos: state.todos.map((todo) => (todo.id === id ? { ...todo, isDone: !todo.isDone } : todo)),
    }));
  },
  getDoneTodos: () => {
    const state = get();
    return state.todos.filter((todo) => todo.isDone);
  },
}));
