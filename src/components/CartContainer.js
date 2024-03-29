import React from "react";
import cartItems from "./Data/cartItems";
import { CartItem } from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";

import { openModal } from "../features/modal/modalSlice";
export const CartContainer = () => {
  const { cartItems, total, amount } = useSelector((state) => state.cart);
  const { isOpened } = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  if (amount < 1) {
    return (
      <header className="cart">
        <h2>Your bag</h2>
        <h4 className="empty-cart">is currently empty</h4>
      </header>
    );
  }
  return (
    <section className="cart">
      <header>
        <h2>Your bag</h2>
      </header>

      <div>
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total.toFixed(2)}</span>
          </h4>
        </div>
        <button onClick={() => dispatch(openModal())} className="btn clear-btn">
          clear cart
        </button>
      </footer>
    </section>
  );
};
