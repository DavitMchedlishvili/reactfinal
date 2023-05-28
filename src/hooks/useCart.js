import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart as addInCart,
  removeFromcart as deleteFromCart,
  fetchCart as getCart,
  saveCart as saveCartToBE,
  clearCart as emptyCart,
} from "../redux/slices";

export const useCart = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.cartItems);

  const addToCart = (data) => {
    dispatch(addInCart(data));
  };

  const removeFromcart = (id) => {
    dispatch(deleteFromCart(id));
  };

  const fetchCart = (data) => {
    dispatch(getCart(data));
  };

  const saveCart = (data) => {
    dispatch(saveCartToBE(data));
  };

  const clearCart = (userId) => {
    dispatch(emptyCart());
    if (userId) {
      saveCart({ userId, cartItems: [] });
    }
  };

  return {
    addToCart,
    cartItems,
    removeFromcart,
    fetchCart,
    saveCart,
    clearCart,
  };
};
