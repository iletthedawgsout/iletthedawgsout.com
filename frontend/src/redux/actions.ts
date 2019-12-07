import { createAction } from "@reduxjs/toolkit";

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

export const editTodo = createAction<number>("EDIT_ACTION");

export type RootAction = ReturnType<typeof addTodo> | ReturnType<typeof removeTodo> | ReturnType<typeof editTodo>;