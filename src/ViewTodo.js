import React, { Component } from 'react';
import './css/bootstrap/bootstrap.min.css';

class ViewTodo extends Component {
    constructor(props){
        super(props)

        this.createLi = this.createLi.bind(this);
    }

    delete = (key) => {
        this.props.delete(key)
    }

    createLi = (item) => {
        return <li key={item.key}> {item.text}<button type="button" className="close"
            onClick={() => this.delete(item.key)}>&times; </button></li>
    }

    render() {
        let listItems = this.props.items.map(this.createLi)
        return (
            <ul className="list">
                {listItems}
            </ul>
        )
    }
}

export default ViewTodo;