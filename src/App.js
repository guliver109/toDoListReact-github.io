import React, { Component } from 'react';
import List from './List';

import Button from 'react-bootstrap/Button';


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

  removeItem = (index) => {
    // console.log(name);
    const items = this.state.items.filter((item, itemIndex) => {
      return itemIndex !== index
    })
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
            <Button type = "submit">Add Task</Button>
        </form>
        <List items = {this.state.items} removeItem = {this.removeItem} />
      </div>
    );
  }
}
