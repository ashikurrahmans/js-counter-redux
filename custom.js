const counter = document.getElementById("counter");
const increment = document.getElementById("increment");
const decrement = document.getElementById("decrement");

// Action Creators
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

const initialState = {
  value: 0,
};

const increments = (value) => {
  return {
    type: INCREMENT,
    payload: value,
  };
};
const decrements = (value) => {
  return {
    type: DECREMENT,
    payload: value,
  };
};

// Reducer Function

function reducerFunction(state = initialState, action) {
  if (action.type === INCREMENT) {
    return {
      ...state,
      value: state.value + action.payload,
    };
  } else if (action.type === DECREMENT) {
    return {
      ...state,
      value: state.value - action.payload,
    };
  }
  return state;
}

// Store

const store = Redux.createStore(reducerFunction);
store.subscribe(renderUi);

function renderUi() {
  const state = store.getState();
  counter.innerText = state.value;
}

// Event Listeners

increment.addEventListener("click", () => {
  store.dispatch(increments(5));
});
decrement.addEventListener("click", () => {
  store.dispatch(decrements(2));
});
