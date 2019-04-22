import React, { PureComponent } from 'react';
import './App.css';

import TodoItem from './TodoItem.js';

class TodoList extends PureComponent {

  render() {
    const { list, deleteTodo, editItem, isCompletList } = this.props;

    return (
      <section className="todo-list">
        <h3 className="title">
          {isCompletList ? 'completed' : 'todo'}
        </h3>
        <div className="">
          {list.map((todo, index) => {
            return (
            <TodoItem key={index} item={todo} itemIndex={index} removeItem={deleteTodo} editItem={editItem} isCompletList={isCompletList} />
            )
          })
        }
        </div>
      </section>
    )
  }
}

export default TodoList;
