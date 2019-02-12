import React, { Component } from 'react';

export default class List extends Component {
    removeItem(item, i){
        this.props.removeItem(item, i);
    }
    render() {
        return(
            <div>
            <ul>
                {this.props.items.map((item, i) => { 
                    return <li onClick = {() => {this.removeItem(item, i)}} key = {i}>{item} X</li>
                })}
            </ul>
        </div>
        )
    }
}



