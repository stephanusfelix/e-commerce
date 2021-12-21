import { React, useState } from "react";
import "../styles/components/itemcard.scss";
import Button from "./itemcard/Button";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { addToCartData } from "../redux/dataReducer";
import { useDispatch, useSelector } from "react-redux";
import { Desc, Image, Title, Category, Price } from "./itemcard/index.js";

const ItemCard = (props) => {
  const product = props.product;
  const dispatch = useDispatch();
  const history = useHistory();

  function add(item) {
    if (JSON.parse(localStorage.getItem("user"))) {
      const data = {
        ...item,
      };
      console.log("INDEX DATA", data);
      // dispatch(addToCartData(data));
      if (!JSON.parse(localStorage.getItem("k2_cart"))) {
        localStorage.setItem(
          "k2_cart",
          JSON.stringify([{ ...data, countCart: 1 }])
        );
      } else {
        let allData = JSON.parse(localStorage.getItem("k2_cart"));
        let addedData = [];
        let isAdd = false;
        allData.map((item) => {
          if (item.id === data.id) {
            item.countCart += 1;
            addedData.push(item);
            isAdd = true;
          } else {
            addedData.push({ ...item, countCart: 1 });
          }
        });
        if (!isAdd) {
          addedData.push({ ...item, countCart: 1 });
          localStorage.setItem("k2_cart", JSON.stringify(addedData));
        } else {
          localStorage.setItem("k2_cart", JSON.stringify(addedData));
        }
      }
      console.log("AFTER ADD : ", JSON.parse(localStorage.getItem("k2_cart")));
      alert("Product " + item.title + " successfully added to cart");
    } else {
      history.push("/login");
      alert("Please login first to continue");
    }
  }

  return (
    <>
      <div className="Product-card">
        <div className="Product-image">
          <Image className="image" image={product.image} />
        </div>

        <div className="Product-text">
          <div className="Product-title">
            <Title title={product.title} />
          </div>
          <div className="Product-category">
            <span className="Text-category">
              <Category category={product.category} />
            </span>
            <div className="Text-price">
              <Price price={product.price} />
            </div>
          </div>
        </div>
        <div className="Product-description">
          <Desc description={product.description} />
        </div>
        <div className="button-group">
          <Link to={{ pathname: `/${product.id}`, state: { detail: product } }}>
            <Button theme={"blue"}>Detail</Button>
          </Link>

          <Button
            theme={"white"}
            disable={product.total > 0 ? false : true}
            click={() => add(product)}
          >
            {" "}
            Add to Cart
          </Button>
        </div>

        {product.total > 0 ? (
          <p className="stock-available">Available : {product.total}</p>
        ) : (
          <p className="stock-unavailable">Out of Stock : {product.total}</p>
        )}
      </div>
    </>
  );
};

export default ItemCard;
