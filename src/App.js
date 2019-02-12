import React, { Component } from 'react';
import List from './List';


export default class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      term: '',
      items: []
    };

    this.removeItem = this.removeItem.bind(this);
  }
  updateItems = (e) => {
    this.setState({ term: e.target.value });
  }

  addItem = (e) => {
    e.preventDefault();
    this.setState({
      term: '',
      items: [...this.state.items, this.state.term]
    });
  }

  removeItem = (name, i) => {
    // console.log(name);
    let items = this.state.items.slice();
    items.splice(i, 1);
    this.setState({ items });
  }
  
  render() {
    return (
      <div>
        <form className = "App" onSubmit = {(e) => this.addItem(e)}>
            <input  placaholder = "Add Task" 
                    value = {this.state.term} 
                    onChange ={(e) => {this.updateItems(e)}}
            />
            <button type = "submit">Add Task</button>
        </form>
        <List items = {this.state.items} removeItem = {this.removeItem} />
      </div>
    );
  }
}
