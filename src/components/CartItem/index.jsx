import React from 'react'
import "../../styles/components/_cartitem.scss"

const CartItem = (props) => {
  return (
    <li className="cart-item">
      <div className='cart-item__info'>
        <h2>{props.name}</h2>
      </div>
      <div className="cart-item__total">{props.itemTotal} $</div>
      <div className="cart-item__actions">
        <div className="cart-item__actions__minus" onClick={props.onRemove}>-</div>
        <span className="cart-item__actions__amount">x {props.amount}</span>
        <div className="cart-item__actions__plus" onClick={props.onAdd}>+</div>
      </div>
    </li>
  )
}

export default CartItem