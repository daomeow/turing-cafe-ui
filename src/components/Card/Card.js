import React from 'react';
import './Card.css'

const Card = ({ name, date, time, number, id, deleteOrder }) => {
  return (
    <div className='card'>
      <h3>{name}</h3>
      <p>{date}</p>
      <p>{time}</p>
      <p>Number of guests: {number}</p>
      <button onClick={() => deleteOrder(id)}>🗑</button>
    </div>
  )
}

export default Card;


