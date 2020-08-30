export const UPDATE_COUNTER = 'UPDATE_COUNTER';

interface UpdateCounter {
  type: typeof UPDATE_COUNTER;
  newValue: number;
}

export type RootAction =
  | UpdateCounter;