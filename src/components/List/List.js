import React from 'react';
import './List.css';
import Card from '../Card/Card'

const List = ({orders, deleteOrder}) => {
  const orderCards = orders.map(order => {
    return (
      <Card
      name={order.name}
      date={order.date}
      time={order.time}
      number={order.number}
      id={order.id}
      key={order.id}
      deleteOrder={deleteOrder}
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

//id, name, 