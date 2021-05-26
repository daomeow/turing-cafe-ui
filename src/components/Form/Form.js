import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor() {
    super();
    this.state = {
       title: '',
       description: ''
    }
  }
  submitOrder = event => {
    event.preventDefault();
    const newOrder = {
      id: Date.now(),
      ...this.state
    }
    this.props.addOrder(newOrder);
  }

  clearInputs = () => {
    this.setState({ title: '', details: '' })
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    return (
      <form>
        <input
          type='text'
          placeholder='Title'
          name='title'
          value={this.state.title}
          onChange={event => this.handleChange(event)}
        />
        <input
          type='text'
          placeholder='Description'
          name='description'
          value={this.state.description} 
          onChange={event => this.handleChange(event)}
        />
        <button onClick={event => this.submitOrder(event)}>Submit</button>
      </form>
    )
  }
}

export default Form;