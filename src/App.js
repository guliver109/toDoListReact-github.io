import React, { Component } from 'react';
import List from './List';


const title = {
  margin: "1rem",
  color: "#ff2968"
}

export default class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      text: '',
      items: []
    };
    
  }
  
  handleTextChange = (e) => {
    this.setState({ text: e.target.value });
  }

  handleAddItem = (e) => {
    e.preventDefault();
    
    var newItem = {
      id: Date.now(),
      text: this.state.text,
      done: false
    };
    
    this.setState((prevState) => ({
      text: '',
      items: prevState.items.concat(newItem)
    }));
  }

  markItemCompleted = (itemId) => {
    var updatedItems = this.state.items.map(item => {
      if (itemId === item.id)
        item.done = !item.done;
      return item;
    }); 
    this.setState({ items: [].concat(updatedItems) });
  }

  handleDeleteItem = (itemId) => {
    var updatedItems = this.state.items.filter(item => {
      return item.id !== itemId;
    });
    this.setState({ items: [].concat(updatedItems) });
  }
  
  render() {
    return (
      <div>
        <h4 className = "title" style = {title}>To Do List</h4>
          <div className = "row">
            <div className = "col-md-3">
              <List items = {this.state.items}
                        onItemCompleted = {this.markItemCompleted}
                        onDeleteItem = {this.handleDeleteItem} />
            </div>
          </div>
          <form className = "row">
            <div className = "col-md-3">
              <input  type = "text" className = "formControl" 
                      onChange = {this.handleTextChange} 
                      value = {this.state.text} />
            </div>
            <div className = "col-md-3">
              <button className = "btn btn-primary"
                      onClick = {this.handleAddItem}
                      disabled = {!this.state.text}>{"Add #" + (this.state.items.length + 1)}</button>
            </div>
          </form>
      </div>
    );
  }
}

