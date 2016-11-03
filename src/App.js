import React, { Component } from 'react';
import { createStore } from 'redux';
import './App.css';

const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
    case 'TOGGLE_TODO':
      if (state.id === action.id) {
        return Object.assign({}, state, {
          completed: !state.completed
        });
      }
      return state;
    default:
      return state;
  }
};

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ];
    case 'TOGGLE_TODO':
      return state.map(t => todo(t, action));
    default:
      return state;
  }
};

const store = createStore(todos);

class App extends Component {
  count;

  constructor() {
    super();
    this.count = 0;
    this.state = { todos: store.getState(), form: 'hello' };
    this.addTodo = this.addTodo.bind(this);
    this.changeTodo = this.changeTodo.bind(this);
  }
  addTodo() {
    store.dispatch({ type: 'ADD_TODO', text: this.state.form, id: this.count++ });
    this.setState(Object.assign({}, { todos: store.getState(), form: '' }));
  }
  changeTodo(e) {
    this.setState(Object.assign({}, { form: e.target.value }));
  }
  render() {
    let todos = this.state.todos.map(todo => {
      return <li key={todo.id}>{todo.text}</li>;
    });
    return (
      <div>
        <input type="text" value={this.state.form} onChange={this.changeTodo} />
        <input type="submit" onClick={this.addTodo} />

        <ul>
          {todos}
        </ul>
      </div>
    );
  }
}

export default App;
