import React, { PureComponent } from 'react';
import './App.css';

class Item extends PureComponent {
  state = {
    isEditItem: false,
  }

  currentValue = React.createRef();
  currentComplete = React.createRef();


  editAction = (status) => {
    this.setState({ isEditItem: status});
  };

  render() {
    const { item, removeItem, editItem, isCompletList } = this.props;
    const { isEditItem } = this.state;
    if(!isCompletList && item.isComplete) {
      return null;
    }
    let itemClassName = isCompletList ? 'item isComplete' : 'item';
    return (
      <div className="wrapper">
        <div className="box">
         <input type="checkbox" ref={(input) => this.currentComplete = input} className="todo-checkbox" checked={item.isComplete} onChange={(e) =>{editItem(this.currentComplete.checked, item.id, 'isComplete')}}/>
        </div>
        {isEditItem ? (
          <>
            <div className="box">
              <input className="edit-input-field" ref={(input) => this.currentValue = input} defaultValue={item.value} type="text" autoComplete="off" name="edittodo"></input>
            </div>
            <div className="box">
              <div className="item">
                <button className="todo-item-action" onClick={(e) =>{e.preventDefault();editItem(this.currentValue.value, item.id, 'value', this.editAction)}}>Save</button>
                <button className="todo-item-action" onClick={(e) =>{this.editAction(false);}}>Cancel</button>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="box">
              <div className={itemClassName}>{item.value}</div>
            </div>
            <div className="box">
              <div className="item">
                <button className="todo-item-action" onClick={(e) =>{this.editAction(true);}}>Edit</button>
                <button className="todo-item-action" onClick={(e) =>{e.preventDefault();removeItem(item)}}>Delete</button>
              </div>
            </div>
          </>
        )}
      </div>
    );
  }
}

export default Item;
