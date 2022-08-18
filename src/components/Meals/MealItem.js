import { useContext } from "react";
import CartContext from "../../store/cart-content";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  const ctx = useContext(CartContext);
  const price = `$ ${props.price.toFixed(2)}`;

  const itemAddtoCartHandler = (amount) => {
    ctx.addItem({
      id: props.id,
      name: props.name,
      price: props.price,
      amount: amount,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm onAddCart={itemAddtoCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
