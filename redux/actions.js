import { actionCreator } from './redux.js';
import { DECREASE, INCREASE, RESET } from './action-type.js';

//actionCreator를 커링함수로 만들면서, 이곳에서는 액션 타임만 넘겨 increase를 함수로 남겨둔다.
export const increase = actionCreator(INCREASE);
export const decrease = actionCreator(DECREASE);
export const reset = actionCreator(RESET);
