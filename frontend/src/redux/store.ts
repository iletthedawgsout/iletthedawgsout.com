import { rootReducer } from './reducers'
import { configureStore } from "@reduxjs/toolkit"
import { rootSaga } from './sagas'
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware]
});

sagaMiddleware.run(rootSaga)

export type AppDispatch = typeof store.dispatch
