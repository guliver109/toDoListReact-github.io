import React, { Component } from 'react';
// import Button from 'react-bootstrap/Button';

export default class List extends Component {
    render() {
        return(
            <div>
                <ul>
                    {this.props.items.map((item, index) => { 
                        return <li onClick = {(e) => {this.props.removeItem(index)}} 
                            key = {item} className = "remove">{item} X</li>
                    })}
                </ul>
            </div>
        )
    }
}



