import { Fragment, useRef, useState } from "react";
import Input from "../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const [validAmount, setValidAmount ] = useState(true);
  const addedAmount = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const addedAmountValueString = (addedAmount.current.value);
    const addedAmountValue = +(addedAmount.current.value);

    if(addedAmountValueString.trim().length < 1 || addedAmountValue < 1 || addedAmountValue > 5){
      setValidAmount(false);
      return;
    }

    props.onAddCart(addedAmountValue);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        label="Amount"
        ref={addedAmount}
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      ></Input>
      <button className={classes.button} type="submit">
        + Add
      </button>
      {!validAmount && <p>Please enter vaild amount (1~5)</p>}
    </form>
  );
};

export default MealItemForm;
