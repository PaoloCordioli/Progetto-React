import React, { Component } from 'react';
import './css/bootstrap/bootstrap.min.css';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: "",
      lista: []
    }
  }

  getText = (e) => {
    console.log(e.target.value)
    this.setState({ value: e.target.value });
  }

  save = () => {
     this.setState({ lista: this.state.lista.concat(this.state.value) })
  }

  render() {
    return (
      <div style={{marginLeft : '20px'}}>
        <h1 style={{textAlign: 'center' }}>Todo List</h1>
        <div>
          <ul>
            {this.state.lista.map(item => (
              <li key={item} > {item}</li>
            ))}
          </ul>
        </div>
        <form>
          <input type="text" onChange={this.getText}></input> <br></br> <br></br>
          <button type="button" onClick={this.save}>Aggiungi</button>
        </form>
      </div>
    );
  }
}

export default App;
