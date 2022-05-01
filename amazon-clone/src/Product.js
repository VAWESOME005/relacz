import { Button } from "@mui/material";
import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
import { NotificationManager } from "react-notifications";
function Product({ id, title, image, price, rating }) {
  const [{ cart, recent }, dispatch] = useStateValue();

  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
    NotificationManager.success(title, "Added to Cart", 2000, true);
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} />

      <Button onClick={addToCart}>Add to Cart</Button>
    </div>
  );
}

export default Product;
