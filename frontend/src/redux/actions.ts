import { createAction } from '@reduxjs/toolkit'

export const incrementCounter = createAction('INCREMENT_COUNTER')

export type RootAction = ReturnType<typeof incrementCounter>;
