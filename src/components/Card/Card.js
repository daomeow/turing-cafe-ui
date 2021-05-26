import React from 'react';
import './Card.css'

const Card = ({ title, description, id, deleteOrder }) => {
  return (
    <div className='card'>
      <h3>{title}</h3>
      <p>{description}</p>
      <button onClick={() => deleteOrder(id)}>🗑</button>
    </div>
  )
}

export default Card;