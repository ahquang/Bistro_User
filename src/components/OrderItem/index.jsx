import React from 'react'
import "../../styles/components/_orderitem.scss"
const OrderItem = (props) => {
  return (
    <li className="order-item">
      <div className='order-item__info'>
        <h3>{props.name}</h3>
      </div>
      <div className="order-item__total">{props.itemTotal} $</div>
      <div className="order-item__actions">
        <span className="order-item__actions__amount">x {props.amount}</span>
      </div>
    </li>
  )
}

export default OrderItem