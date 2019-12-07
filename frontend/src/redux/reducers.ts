import { combineReducers } from 'redux'
import { RootAction } from "./actions";
import { createReducer, PayloadAction } from '@reduxjs/toolkit';

const todos = (state: number[] = [], action: RootAction) => {
  switch (action.type) {
    case 'INCREMENT_COUNTER':
      return [
        ...state,
        1
      ]
    default:
      return state
  }
};

const counterReducer = createReducer(0, {
  increment: (state, action: PayloadAction<number>) => state + action.payload
})

export const rootReducer = combineReducers({
  todos,
  counterReducer
});

export type RootState = ReturnType<typeof rootReducer>;
