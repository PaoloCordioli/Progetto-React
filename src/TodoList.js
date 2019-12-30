import React, { Component } from 'react';
import './css/bootstrap/bootstrap.min.css';
import './TodoList.css';

import ViewTodo from './ViewTodo';


class TodoList extends Component {
    constructor(props) { // state contenente l'array di item inseriti dall'utente
        super(props);
        this.state = {
            items: []
        };

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    componentWillMount() { //funzione ,eseguita prima di caricare questo componente, che carica la lista salvata nel localStoraage
        let items = []
        const keys = Object.keys(localStorage)
        keys.forEach(e => {
            items.push({text : localStorage.getItem(e), key : e})
        });
        this.setState({items : items})
    }

    addItem = (e) => { // funzione che aggiunge un item allo state el localStorage se l'input non è vuoto
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

    deleteItem = (key) => { // funzione che rimuove un item dallo state e dal localStorage
        let filtered = this.state.items.filter((item) => {
            return (item.key !== key)
        })

        this.setState({ items: filtered })

        localStorage.removeItem(key)
    }

    editItem = (key) => { // funzione che permette di modificare un item inserito
        const selectedItem = this.state.items.find(item => item.key === key)
        this.deleteItem(key)
        this.inputElement.value = selectedItem.text 
        this.inputElement.focus()
    }

    render() { //metodo che visualizza il form e richiama la classe ViewTodo
        return (
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.addItem}>
                        <input ref={(obj) => this.inputElement = obj} type="text" placeholder="Add a new todo..." onChange={this.getText}></input>
                        <button type="submit"> <strong>Add</strong></button>
                    </form>
                </div>
                <ViewTodo items={this.state.items} delete={this.deleteItem} edit={this.editItem} />
            </div>
        )
    }
}

export default TodoList;