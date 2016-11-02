import React, { Component } from 'react';
import './App.css';

const counter = (state = { val: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return Object.assign({}, state, { val: state.val + 1 });
    case 'DECREMENT':
      return Object.assign({}, state, { val: state.val - 1 });
    default:
      return Object.assign({}, state);
  }
};

const createStore = (reducer) => {
  let state;
  let listeners = [];

  const getState = () => state;

  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach(listener => listener());
  };

  const subscribe = (listener) => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter(l => l !== listener);
    }
  };

  dispatch({});

  return { getState, dispatch, subscribe };
}

const store = createStore(counter);

class App extends Component {
  constructor() {
    super();
    this.state = store.getState();
    this.increment = this.increment.bind(this);

    store.subscribe(() => { 
      this.setState(store.getState())
    });
  }
  increment() {
    store.dispatch({type: 'INCREMENT'});
  }
  render() {
    return (
      <div>
        <State state={this.state} />
        <button onClick={this.increment}>increment</button>
      </div>
    );
  }
}

const State = (props) => {
  return (
    <span>State: {props.state.val}</span>
  );
}

export default App;
