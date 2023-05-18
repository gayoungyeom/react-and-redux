function createStore() {
  let state;

  function send() {
    state = worker(state);
  }

  function getState() {
    return state;
  }

  return {
    send,
    getState,
  };
}

function worker(state = { count: 0 }) {
  return { ...state, count: state.count + 1 };
}

const store = createStore(worker);

store.send();
console.log(store.getState()); //{count: 1}
store.send();
console.log(store.getState()); //{count: 2}
