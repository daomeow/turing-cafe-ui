import React from 'react';
import './Card.css'

const Card = ({ name, date, time, number, id, deleteOrder }) => {
  return (
    <div className='card'>
      <h3>{name}</h3>
      <p className='orderDate'>{date}</p>
      <p className='orderTime'>{time}</p>
      <p className='orderNumber'>Number of guests: {number}</p>
      <button className='submit' onClick={() => deleteOrder(id)}>Cancel</button>
    </div>
  )
}

export default Card;


