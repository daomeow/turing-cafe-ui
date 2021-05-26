import React from 'react';
import './List.css';
import Card from '../Card/Card'

const List = ({orders}) => {
  const orderCards = orders.map(order => {
    return (
      <Card
      title={order.title}
      description={order.description}
      id={order.id}
      key={order.id}
    />
    )
  })

  return (
    <div className='List-container'>
      {orderCards}
    </div>
  )
}

export default List;