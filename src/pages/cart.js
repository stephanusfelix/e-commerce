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
    axios
      .get(url)
      .then((response) => {
        // setData(response.data);
        setIsLoaded(true);
        console.log(response.data);
        let filter = filterResponse(response.data, stock).filter(
          (item) => item.countCart > 0
        );
        if (filter.length > 0) {
          let price = filter.map((item) =>
            item.countCart > item.total ? 0 : item.totalPriceCart
          );
          price = price.reduce(
            (prev, curr) => parseFloat(prev) + parseFloat(curr)
          );
          let outStock = filter.filter((item) => item.countCart > item.total);
          if (outStock.length > 0) {
            // toast.warning(outStock.length + " item can't be processed");
            console.log("item kosong");
          }
          setPrices(price);
        }
        setCart(filter);
      })
      .catch((error) => {
        setIsLoaded(true);
        setError(error);
        console.log(error);
      });
  }, [url]);

  if (error) {
    return (
      <div className="errormessage">
        <h1>
          <strong>404 |</strong> Not Found
        </h1>
        Keterangan : {error.message}
      </div>
    );
  }
  if (!isLoaded) {
    return <Spinner />;
  }

  if (cart) {
    return (
      <>
        <div className="main">
          <div className="cart-container">
            <div class="header">
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
    const [countCart, setCountCart] = useState(item.countCart);

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
            value={countCart}
            onChange={(v) => {
              setCountCart(v.target.value);
            }}
            onBlur={() => {
              changeCountCart(countCart);
            }}
          />
        </div>
        <div class="prices">
          <div class="amount"> ${item.totalPriceCart}</div>
        </div>
      </div>
    );

    async function changeCountCart(value) {
      const data = {
        id: item.id,
        countCart: parseInt(value) - item.countCart,
        total: item.total,
        totalSales: item.totalSales,
      };
      dispatch(addToCartData(data));
    }
  }

  async function checkoutProduct() {
    const data = cart.filter((item) => item.total >= item.countCart);
    if (data.length > 0) {
      alert("Checkout Berhasil");
      data.map((item) => {
        dispatch(
          checkoutData({
            ...item,
            countCart: item.countCart,
          })
        );
      });
      history.push(`/`);
    } else {
      console.log(data);
      alert("Checkout gagal");
    }
  }
}

export default Cart;
