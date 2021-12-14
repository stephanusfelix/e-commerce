import { React, useState, useEffect } from "react";
import "../styles/pages/cart.scss";
import Spinner from "../components/loading/Spinner";
import { filterResponse } from "../config/filterResponse";
import { useSelector, useDispatch } from "react-redux";
import { addData } from "../redux/dataReducer";
import axios from "axios";
import { Image, Title, Price } from "../components/itemcard/index.js";

function Cart(props) {
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
            item.countCart > item.totalStock ? 0 : item.totalPriceCart
          );
          price = price.reduce(
            (prev, curr) => parseFloat(prev) + parseFloat(curr)
          );
          let outStock = filter.filter(
            (item) => item.countCart > item.totalStock
          );
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
          <div class="heading">
            <h1>My Cart</h1>
          </div>
          <div className="container">
            <table id="table" className="table">
              <thead>
                <tr className="table-head">
                  <th>.</th>
                  <th>Product Name</th>
                  <th>Unit Price</th>
                  <th>Quantity</th>
                  <th>Total Price</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, index) => (
                  <RenderItem item={item} key={index} />
                ))}
              </tbody>
            </table>
          </div>
          <div className="bottom-container">
            <span>TOTAL</span>
            <h5>${prices}</h5>

            {/* <button onClick={() => checkoutProduct()} className="btn btn-warning"> */}
            <button>Checkout</button>
          </div>
        </div>
      </>
    );
  }
  function RenderItem({ item }) {
    const [countCart, setCountCart] = useState(item.countCart);
    let isAvailable = true;
    if (item.countCart > item.totalStock) {
      isAvailable = false;
    }
    return (
      <tr>
        <td>
          <Image className="image" image={item.image} />
        </td>
        <td>
          <Title title={item.title}></Title>
        </td>

        <td>${item.price}</td>

        <td>
          <input
            type="number"
            min={0}
            placeholder="0"
            value={countCart}
            onChange={(v) => {
              setCountCart(v.target.value);
            }}
            onBlur={() => {
              changeCountCart(countCart);
            }}
          />
        </td>
        <td className="col-total">${item.totalPriceCart}</td>
      </tr>
    );

    async function changeCountCart(value) {
      const data = {
        id: item.id,
        countCart: parseInt(value) - item.countCart,
        totalStock: item.totalStock,
        totalSales: item.totalSales,
      };
      dispatch(addData(data));
    }
  }
}

export default Cart;
