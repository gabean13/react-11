import { Fragment, useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-content";
import CartIcon from "./Cartlcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const [BtnIsHighlighting, setBtnIsHighlighting] = useState(false);
  const ctx = useContext(CartContext);

  const { items } = ctx;

  const cartItemsNumber = ctx.items.reduce((currentamount, item) => {
    return currentamount + item.amount;
  }, 0);

  const btxClasses = `${BtnIsHighlighting ? classes.bump : ""}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighting(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighting(false);
    }, 300);

    return () => {clearTimeout(timer)};

  }, [items]);

  return (
    <div className={btxClasses}>
      <button className={classes.button} onClick={props.onOpen}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{cartItemsNumber}</span>
      </button>
    </div>
  );
};

export default HeaderCartButton;
