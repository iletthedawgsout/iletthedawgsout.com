import { put, takeEvery, all } from 'redux-saga/effects'
import { incrementCounter } from "./actions";

const delay = (ms: number) => new Promise(res => setTimeout(res, ms))

function* helloSaga() {
  console.log('Hello Sagas!')
}

function* incrementAsync() {
  yield delay(1000)
  yield put({ type: 'INCREMENT' })
}

function* watchIncrementAsync() {
  yield takeEvery(incrementCounter.toString(), incrementAsync)
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export function* rootSaga() {
  yield all([
    helloSaga(),
    watchIncrementAsync()
  ])
}