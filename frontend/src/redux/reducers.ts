import { combineReducers } from 'redux'
import { RootAction } from "./actions";

const todos = (state: number[] = [], action: RootAction) => {
    switch (action.type) {
      case 'ADD_TODO':
        return [
          ...state,
          1
        ]
      default:
        return state
    }
  }

export const rootReducer = combineReducers({
    todos
})