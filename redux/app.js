//import시 확장자를 넣어주어야 함
import { createStore } from './redux.js';
import { reducer } from './reducer.js';
import * as Actions from './actions.js';

const store = createStore(reducer);

store.subscribe(() => console.log(store.getState()));

store.dispatch(Actions.increase());
store.dispatch(Actions.increase());
store.dispatch(Actions.increase());
store.dispatch(Actions.decrease());
store.dispatch(Actions.reset());
