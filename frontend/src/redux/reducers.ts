import { combineReducers } from 'redux'
import { createReducer, PayloadAction } from '@reduxjs/toolkit'

const counterReducer = createReducer(0, {
  increment: (state, action: PayloadAction<number>) => state + action.payload
})

export const rootReducer = combineReducers({
  counterReducer
})

export type RootState = ReturnType<typeof rootReducer>;
