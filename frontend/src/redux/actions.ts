export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";

export const addTodo = (text: string) => ({
  type: ADD_TODO,
  text
});

export const removeTodo = (id: number) => ({
  type: REMOVE_TODO,
  id
});

export type RootAction = ReturnType<typeof addTodo> | ReturnType<typeof removeTodo>;