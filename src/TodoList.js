import React, { Component } from 'react';
import './css/bootstrap/bootstrap.min.css';
import './TodoList.css';

import ViewTodo from './ViewTodo';


class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    componentWillMount() {
        let items = []
        const keys = Object.keys(localStorage)
        keys.forEach(e => {
            items.push({text : localStorage.getItem(e), key : e})
        });
        this.setState({items : items})
    }

    addItem = (e) => {
        if (this.inputElement.value !== "") {
            var newItem = {
                text: this.inputElement.value,
                key: Math.random()
            };

            this.setState((prevState) => {
                return { items: prevState.items.concat(newItem) };
            });

            localStorage.setItem(newItem.key,newItem.text)
        }

        this.inputElement.value = "";
        e.preventDefault()
    }

    deleteItem = (key) => {
        let filtered = this.state.items.filter((item) => {
            return (item.key !== key)
        })

        this.setState({ items: filtered })

        localStorage.removeItem(key)
    }

    render() {
        return (
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.addItem}>
                        <input ref={(obj) => this.inputElement = obj} type="text" placeholder="Add a new todo..." onChange={this.getText}></input>
                        <button type="submit"> <strong>Add</strong></button>
                    </form>
                </div>
                <ViewTodo items={this.state.items} delete={this.deleteItem} />
            </div>
        )
    }
}

export default TodoList;