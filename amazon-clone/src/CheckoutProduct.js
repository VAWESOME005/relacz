import { Button } from "@mui/material";
import React from "react";
import "./CheckoutProduct.css";
import { NotificationManager } from "react-notifications";
import { useStateValue } from "./StateProvider";
function CheckoutProduct({ id, image, title, rating, price }) {
  const [{ cart }, dispatch] = useStateValue();

  const removeFromCart = () => {
    NotificationManager.error(title, "Removed from Cart", 2000);
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id,
      title: title,
    });
  };
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">
          <strong>{title}</strong>
        </p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        <Button onClick={removeFromCart}>Remove from Cart</Button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
