export type AddTodoButtonProps = {
  handleAddTodo: () => void;
  formButtonClass?: string;
  icon?: HeroIcon;
  text?: string;
  iconSize?: number;
};

export type ActionTodoButtonProps = {
  handleRemoveTodo: () => void;
  formButtonClass?: string;
  icon?: HeroIcon;
  text?: string;
  iconSize?: number;
  type: "remove" | "done";
};
