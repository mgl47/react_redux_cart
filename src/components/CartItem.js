import React from "react";
import { ChevronUp, ChevronDown } from "./icons/CartIcons";
import { useDispatch } from "react-redux";
import {
  clearCart,
  decrease,
  increase,
  removeItem,
} from "../features/cart/cartSlice";
export const CartItem = ({ id, img, title, price, amount }) => {
  const dispatch = useDispatch();
  return (
    <article className="cart-item">
      <img src={img} alt={title} />

      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        <button onClick={() => dispatch(removeItem(id))} className="remove-btn">
          remove
        </button>
      </div>
      <div>
        <button
          onClick={() => dispatch(increase({ id }))}
          className="amount-btn"
        >
          <ChevronUp />
        </button>
        <p className="amount">{amount}</p>
        <button
          onClick={() => {
            if (amount === 1) {
              return dispatch(removeItem(id));
            }
            return dispatch(decrease({ id }));
          }}
          className="amount-btn"
        >
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};
