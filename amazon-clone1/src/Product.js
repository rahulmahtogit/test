import React from "react";
import "./Product.css";
import { withRouter } from "react-router-dom";
import { useStateValue } from "./StateProvider";



function Product({ id, title, image, price, rating }) {
  const [state, dispatch] = useStateValue();
  const addToBasket = () => {
    // Disptach the item into data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
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
            .map((_, i) => {
              return <p key={i}>🌟</p>;
            })}
        </div>
      </div>

      <img src={image} alt=""></img>
      <button onClick={addToBasket}>Add To Basket</button>
    </div>
  );
}

export default Product;
// export default withRouter(Product);
