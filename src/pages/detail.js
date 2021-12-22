import { React, useState, useEffect } from "react";
import "../styles/pages/detail.scss";
import { useLocation } from "react-router";
import { Image, Title, Category, Price } from "../components/itemcard/index.js";
import { addToCartData } from "../redux/dataReducer";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

function Detail(props) {
  const { state } = useLocation();
  const product = state.detail.total;
  const dispatch = useDispatch();
  const history = useHistory();
  const [currentStock, setCurrentStock] = useState(1);

  const addToCart = () => {
    if (JSON.parse(localStorage.getItem("user"))) {
      if (product > 0) {
        const data = {
          ...state.detail,
        };
        console.log("INDEX DATA", data);
        // dispatch(addToCartData(data));
        if (!JSON.parse(localStorage.getItem("k2_cart"))) {
          localStorage.setItem(
            "k2_cart",
            JSON.stringify([{ ...data, countCart: currentStock }])
          );
        } else {
          let allData = JSON.parse(localStorage.getItem("k2_cart"));
          let addedData = [];
          let isAdd = false;
          allData.map((item) => {
            if (item.id === data.id) {
              item.countCart += currentStock;
              addedData.push(item);
              isAdd = true;
            } else {
              addedData.push({ ...item });
            }
          });
          if (!isAdd) {
            addedData.push({ ...state.detail, countCart: currentStock });
            localStorage.setItem("k2_cart", JSON.stringify(addedData));
          } else {
            localStorage.setItem("k2_cart", JSON.stringify(addedData));
          }
        }
        console.log(
          "AFTER ADD : ",
          JSON.parse(localStorage.getItem("k2_cart"))
        );
        setCurrentStock(0);
        alert("Product " + state.detail.title + " successfully added to cart");
      } else {
        alert("Maaf produk kosong");
      }
    } else {
      history.push("/login");
      alert("Please login first");
    }
  };

  return (
    <>
      <section className="product">
        <div className="Product-card">
          <div className="Product-image">
            <Image className="image" image={state.detail.image} />
          </div>

          <div className="Product-text">
            <span className="Text-category">
              <Category category={state.detail.category} />
            </span>
            <div className="Product-title">
              <Title title={state.detail.title} />
            </div>
            <div className="Product-category">
              <div className="Text-price">
                <Price price={state.detail.price} />
              </div>
            </div>
            <div className="Product-quantity">
              <input
                type="number"
                value={currentStock}
                min={0}
                onChange={(v) => setCurrentStock(v.target.value)}
                style={{ width: 50 }}
              />
              <button type="button" className="buy--btn" onClick={addToCart}>
                ADD TO CART
              </button>
            </div>

            {product > 0 ? (
              <p className="stock-available">Available : {product}</p>
            ) : (
              <p className="stock-unavailable">Out of Stock : {product}</p>
            )}

            <div className="Product-description">
              <h1>Product Detail</h1>
              <div className="description">{state.detail.description}</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Detail;
