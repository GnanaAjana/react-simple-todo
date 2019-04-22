import React, { Fragment, PureComponent } from 'react';
import './App.css';

class AddTodo extends PureComponent {
  todoItem = React.createRef();

  add = (e) => {
    e.preventDefault();
    let { value } = this.todoItem || {};
    const { addTodo } = this.props;
    if (value && value.length !== 0) {
      addTodo(value, () => {this.todoItem.value = '';});
    }
  };

  render() {
    const { error } = this.props;
    return(
      <Fragment>
        <h3 className="title">
          Add Item
        </h3>
        <section className="todo-add-item">
          <form onSubmit={this.add}>
            <input ref={(input) => this.todoItem = input} type="text" placeholder="Enter your Todo" autoComplete="off" className="input-field" name="todo" required></input>
            <button type="submit" className="todo-add-action">Add</button>
            {error && (<div className="error">{error}</div>)}
          </form>
        </section>
      </Fragment>
    );
  }
}

export default AddTodo;
