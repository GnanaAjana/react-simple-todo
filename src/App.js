import React, { Component } from 'react';
import './App.css';

import AddTodo from './AddTodo.js';
import TodoList from './TodoList.js';

class App extends Component {
  state = {
    todos: [],
    error: ''
  }

  addTodo = (value, callback) => {
    let { todos } = this.state;
    let itemExist = todos.findIndex(item => item.value === value);
    if(itemExist !== -1) {
      this.setState({error: 'already exist'});
    } else if (value && value.length !== 0) {
      this.setState(state => ({ todos: [...state.todos, { value, isComplete: false, id: state.todos.length + 1 }], error: '' }),  callback());
    }
  }

  editItem = (value, index, propertyName, callback) => {
    this.setState(state =>  ({
      todos: [...state.todos.map((todo) => todo.id === index ? { ...todo, [propertyName]: value } : todo)]    
    }));
    if(callback) {
      callback(false);
    }
  };

  deleteTodo = (item) => {
    this.setState(state =>  ({
      todos: [...state.todos].filter((value) => value!==item)
    }));
  };

  render() {
    const { todos, error } = this.state;
    const completeList = todos.filter((item) => item.isComplete);
    const todoList = todos.filter((item) => !item.isComplete);

    return (
      <div className="todo-wrapper">
        <AddTodo addTodo={this.addTodo} error={error} />

        {!!(todoList && todoList.length) && (
          <TodoList list={todoList} deleteTodo={this.deleteTodo} editItem={this.editItem}/>
        )}

        {!!(completeList && completeList.length) && (
          <TodoList list={completeList} deleteTodo={this.deleteTodo} editItem={this.editItem} isCompletList/>
        )}
      </div>
    );
  }
}

export default App;
