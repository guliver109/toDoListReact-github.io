import React, { Component } from 'react';
// import Button from 'react-bootstrap/Button';
const tasksList = {

}
const onClickList = {

}
const remove = {
    
}
export default class List extends Component {
    render() {
        return(
            <div className = "tasks">
                <ul style = {tasksList} className = "tasksList">
                    {this.props.items.map((item, index) => { 
                        return <li  style = {onClickList} onClick = {(e) => {this.props.removeItem(index)}} 
                            key = {item} className = "remove" style = {remove}>{item} X</li>
                    })}
                </ul>
            </div>
        )
    }
}



