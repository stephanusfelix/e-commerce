import { React, useState, useEffect } from "react";

function Cart() {
  let url = "https://fakestoreapi.com/products";
  let [cart, setCart] = useState([]);
  let localCart = localStorage.getItem("cart");

  //this is called on component mount
  useEffect(() => {
    //turn it into js
    localCart = JSON.parse(localCart);
    //load persisted cart into state if it exists
    if (localCart) setCart(localCart);
  }, []);
  return <div>{cart.title}</div>;
}

export default Cart;
