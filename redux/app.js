function createStore() {
  let state;
  let handlers = [];

  function send() {
    state = worker(state);
    handlers.forEach((handler) => handler());
  }

  function subscribe(handler) {
    handlers.push(handler);
  }

  function getState() {
    return state;
  }

  return {
    send,
    getState,
    subscribe,
  };
}

function worker(state = { count: 0 }) {
  return { ...state, count: state.count + 1 };
}

const store = createStore(worker);

store.subscribe(() => console.log(store.getState()));

store.send();
store.send();
