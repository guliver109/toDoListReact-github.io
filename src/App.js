import React, { Component } from 'react';
import List from './List';

// React Bootstrap 
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

const buttonStyle = {
  margin: "10px"
}
const listHolder = {
  
  width: "100%",
  height: "100%",
  borderStyle: "inset"
}
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
    const items = this.state.items.filter((item, itemIndex) => {
      return itemIndex !== index
    })
    this.setState({ items });
  }
  
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Form className = "App" onSubmit = {(e) => this.addItem(e)}>
              <input  placaholder = "Add Task"
                      value = {this.state.term} 
                      onChange ={(e) => {this.updateItems(e)}}></input>
              
              <Button style = {buttonStyle} type = "submit">Add Task</Button>
              
            </Form>
          </Col>
          <Col>
            <div style = {listHolder} className = "listHolder">
              <h5>Your List of Tasks:</h5>
            <List items = {this.state.items} removeItem = {this.removeItem} />
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
