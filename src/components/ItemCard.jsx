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
        countCart: item.countCart + 1,
        total: item.total,
        totalSales: 0,
      };
      dispatch(addToCartData(data));
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
