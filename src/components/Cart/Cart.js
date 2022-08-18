import { Fragment, useContext, useState } from "react";
import CartContext from "../../store/cart-content";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const ctx = useContext(CartContext);

  const totalAmountPrice = `$ ${ctx.totalAmount.toFixed(2)}`;
  const hasItems = ctx.items.length > 0;

  const addItemHandler = (item) => {
    ctx.addItem({...item, amount: 1})
  };
  const removeItemHandler = (id) => {
    ctx.removeItem(id);
  };


  const cartItems = ctx.items.map((item) => (
    <CartItem
      id={item.id}
      key={item.id}
      name={item.name}
      price={item.price}
      amount={item.amount}
      onAdd = {addItemHandler.bind(null, item)}
      onRemove = {removeItemHandler.bind(null, item.id)}
    />
  ));

  const onOrderitems = () => {
    console.log("Ordering");
  };

  return (
    <Fragment >
      <Modal onClose={props.onClose}>
        <ul className = {classes['cart-items']}>{cartItems}</ul>
        <div className={classes.total}>
          <span className>Total Amount</span>
          <span>{totalAmountPrice}</span>
        </div>
        <div className={classes.actions}>
          <button className={classes["button--alt"]} onClick={props.onClose}>
            Close
          </button>
          {hasItems && (
            <button className={classes.button} onClick={onOrderitems}>
              Order
            </button>
          )}
        </div>
      </Modal>
    </Fragment>
  );
};

export default Cart;
