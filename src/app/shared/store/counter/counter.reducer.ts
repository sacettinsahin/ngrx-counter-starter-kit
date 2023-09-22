import { createReducer, on, Action } from '@ngrx/store';
import { decrement, increment, reset } from './counter.action';

export const initialState = 0;

const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(reset, () => 0)
);

export function counterReducer(state: number | undefined, action: Action): number {
  return _counterReducer(state, action);
}
