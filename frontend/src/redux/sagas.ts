import { put, takeEvery, all } from 'redux-saga/effects'
import { incrementCounter } from './actions'

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

function* incrementAsync() {
  yield delay(1000)
  yield put({ type: 'INCREMENT' })
}

function* watchIncrementAsync() {
  yield takeEvery(incrementCounter.toString(), incrementAsync)
}

export function* rootSaga() {
  yield all([
    watchIncrementAsync()
  ])
}
