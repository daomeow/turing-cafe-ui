import React, { Component } from 'react';
import './App.css';
import List from '../List/List';
import Form from '../Form/Form';
import { getAllOrders } from '../../utilities'

class App extends Component {
  constructor() {
    super();
    this.state = {
      orders: []
    }
  }

  componentDidMount() {
    getAllOrders()
      .then(data => {
        console.log(data)
        this.setState({ orders: data})
      })
  }

  addOrder = (newOrder) => {
    this.setState({ orders: [...this.state.orders, newOrder] });
  }

  deleteOrder = (id) => {
    console.log(id)
    const filteredOrders = this.state.ideas.filter(idea => idea.id !== id);

    this.setState({ orders: filteredOrders });
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form addOrder={this.addOrder} />
        </div>
        <div className='resy-container'>
          <List orders={this.state.orders} deleteOrder={this.deleteOrder}/>
        </div>
      </div>
    )
  }
}

export default App;
