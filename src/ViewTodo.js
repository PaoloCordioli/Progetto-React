import React, { Component } from 'react';
import './css/bootstrap/bootstrap.min.css';

class ViewTodo extends Component {
    constructor(props) {
        super(props)

        this.createLi = this.createLi.bind(this);
    }

    delete = (key) => { // funzione che richiama la funzione deleteItem nella classe TodoList grazie alle props
        this.props.delete(key)
    }

    edit = (key) => { // funzione che richiama la funzione editItem nella classe Todolist grazie alle props
        this.props.edit(key)
    }

    change = (key) => { // funzione che richiama la funzione changeDone nella classe Todolist grazie alle props
        this.props.change(key)
    }

    createLi = (item) => { // funzione che ritorna un tag <li> contenente il testo inserito dall'utente e un bottone per eliminarlo
        if (item.done) {
            return <li className="done" key={item.key}> <span onClick={() => this.change(item.key)}> <img src={require('./icons/check.svg')} alt="" width="20" height="20"></img> {item.text} </span>
                <button type="button" className="close" onClick={() => this.delete(item.key)}> <img src={require('./icons/trash.svg')} alt="" width="20" height="20"></img> </button>
                <button type="button" className="close" onClick={() => this.edit(item.key)}> <img src={require('./icons/pencil.svg')} alt="" width="20" height="20"></img></button>
            </li>
        }
        else {
            return <li className="undone" key={item.key}> <span onClick={() => this.change(item.key)}> <img src={require('./icons/x.svg')} alt="" width="20" height="20"></img> {item.text} </span>
                <button type="button" className="close" onClick={() => this.delete(item.key)}> <img src={require('./icons/trash.svg')} alt="" width="20" height="20"></img> </button>
                <button type="button" className="close" onClick={() => this.edit(item.key)}> <img src={require('./icons/pencil.svg')} alt="" width="20" height="20"></img></button>
            </li>
        }

    }

    render() { // metodo che visualizza l'intera lista itireando la lista di items e per ogni item crea un tag <li> grazie alla funzione createLi
        let listItems = this.props.items.map(this.createLi)
        return (
            <ul className="list">
                {listItems}
            </ul>
        )
    }
}

export default ViewTodo;