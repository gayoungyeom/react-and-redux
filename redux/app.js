function createStore() {
  let state;

  function send() {
    state = worker(state);
  }

  return {
    send,
  };
}

function worker(state) {
  return { ...state };
}

const store = createStore(worker);
store.send();
