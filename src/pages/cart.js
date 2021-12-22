import { React, useState, useEffect } from "react";
import "../styles/pages/cart.scss";
import Spinner from "../components/loading/Spinner";
import { filterResponse } from "../config/filterResponse";
import { useSelector, useDispatch } from "react-redux";
import { addToCartData, checkoutData } from "../redux/dataReducer";
import { useHistory } from "react-router-dom";
import axios from "axios";

function Cart(props) {
  let history = useHistory();
  let url = "https://fakestoreapi.com/products";
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const stock = useSelector((state) => state.data.data);
  const dispatch = useDispatch();
  const [cart, setCart] = useState([]);
  const [prices, setPrices] = useState(0);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("k2_cart"));
    if(JSON.parse(localStorage.getItem("k2_cart"))){
      
      setCart(data)
      let totalHarga = 0;
      data.map((item)=>{
        totalHarga+= (item.countCart*item.price)
      })
      setPrices(totalHarga)
    }
  }, []);



  if (cart) {
    return (
      <>
        <div className="main">
          <div className="cart-container">
            <div className="header">
              <h3 className="heading">My Cart</h3>
            </div>
            <div className="container">
              {cart.map((item, index) => (
                <ItemCart item={item} key={index} />
              ))}
            </div>
          </div>
          <div className="checkout-container">
            <div className="chekout-item">
              <h1 className="checkout-total">TOTAL</h1>
              <h2 className="checkout-price">${prices}</h2>
            </div>
            <button
              onClick={() => checkoutProduct()}
              className="checkout-button"
            >
              Checkout
            </button>
          </div>
        </div>
      </>
    );
  }
  function ItemCart({ item }) {

    let isAvailable = true;
    if (item.countCart > item.total) {
      isAvailable = false;
    }
    return (
      <div className="Cart-Items">
        <div className="Image-box">
          <img src={item.image} alt="brand" />
        </div>
        <div className="about">
          <h3 className="item-title">{item.title}</h3>
          <h3 className="subtitle">{item.category}</h3>
        </div>
        <div className="counter">
          <input
            type="number"
            min={0}
            placeholder="0"
            className="quantity form-control"
            value={item.countCart}
            onChange={(v) => {
              setCountCart(v.target.value,item.id);
            }}
          />
        </div>
        <div className="prices">
          <div className="amount"> ${item.countCart * item.price}</div>
        </div>
      </div>
    );

    function setCountCart(value,id) {
      const updateData = []
      cart.map((item)=>{
        if(id===item.id){
          item.countCart=value;
          updateData.push(item)
        }else{
          updateData.push(item)
        }
      })
      setCart(updateData)
      localStorage.setItem("k2_cart", JSON.stringify(updateData))
      updateTotalPrice()
    }
    function updateTotalPrice(){
      let totalHarga = 0;
      cart.map((item)=>{
        totalHarga+= (item.countCart*item.price)
      })
      setPrices(totalHarga)
    }
  }

  async function checkoutProduct() {
    const data = cart.filter((item) => item.total >= item.countCart);
    if (data.length > 0) {

      const allItem = JSON.parse(localStorage.getItem("k2_items"));
      const newAllItem = []
      let change = false;
      allItem.map((item)=>{
        cart.map((item2)=>{
          if(item.id===item2.id){
            item.total-=item2.countCart;
            newAllItem.push(item)
            change = true;
          }
        })
        if(!change){
          newAllItem.push(item)
        }
        change=false;
      })
      localStorage.setItem("k2_items", JSON.stringify(newAllItem))
      const currentTime = new Date();
      let timeArray = currentTime.toString().split(' ')
      let newTime = `${timeArray[2]}-${timeArray[1]}-${timeArray[3]},${timeArray[4]}`
      if(!JSON.parse(localStorage.getItem("k2_recap"))){
        const newCart = []
        cart.map((item=>{
          newCart.push({...item,time:newTime})
        }))
        localStorage.setItem("k2_recap", JSON.stringify(newCart))
      }else {
        const dataRecap = JSON.parse(localStorage.getItem("k2_recap"));
        const newCart = []
        dataRecap.map((item=>{
          newCart.push({...item,time:newTime})
        }))
        localStorage.setItem("k2_recap", JSON.stringify(newCart))
      }
      localStorage.removeItem("k2_cart");
      setCart([])
      setPrices(0)
      alert("Checkout Berhasil");
      // history.push(`/`);
    } else {
      console.log(data);
      alert("Checkout gagal");
    }
  }
}

export default Cart;
