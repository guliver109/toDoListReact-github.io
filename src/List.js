import React, {Component} from 'react';
import Item from "./Item"

const todolist = {
    paddingLeft: "0px"
}

export default class List extends React.Component {
    render() {
        return(
            <ul className = "todolist" style = {todolist}>
                {this.props.items.map(item => (
                    <Item key = {item.id} id = {item.id}
                            text = {item.text} completed = {item.done}
                            onItemCompleted = {this.props.onItemCompleted}
                            onDeleteItem = {this.props.onDeleteItem} />
                ))}
            </ul>
        )
    }
}