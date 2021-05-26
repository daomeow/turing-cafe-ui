import React, { Component } from 'react';
import './App.css';
import List from '../List/List';
import Form from '../Form/Form';

class App extends Component {
  constructor() {
    super();
    this.state = {
      orders: []
    }
  }

  addOrder = (newOrder) => {
    this.setState({ orders: [...this.state.orders, newOrder] });
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form addOrder={this.addOrder} />
        </div>
        <div className='resy-container'>
          <List orders={this.state.orders}/>
        </div>
      </div>
    )
  }
}

export default App;
