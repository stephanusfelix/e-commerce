import { React, useState } from "react";
import "../styles/components/itemcard.scss";
import Button from "./itemcard/Button";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { addData } from "../redux/dataReducer";
import { useDispatch, useSelector } from "react-redux";
import { Desc, Image, Title, Category, Price } from "./itemcard/index.js";
import { connect } from "react-redux";

const ItemCard = (props) => {
  const product = props.product;
  const dispatch = useDispatch();
  const history = useHistory();
  const token = useState(true);

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
        {/* <ButtonGroup id={product.id} item={product} /> */}
        <div className="button-group">
          <Link to={{ pathname: `/${product.id}`, state: { detail: product } }}>
            <Button theme={"blue"}>Detail</Button>
          </Link>

          <Button
            theme={"white"}
            disable={product.totalStock > 0 ? false : true}
            click={() => props.add(product)}
          >
            {" "}
            Add to Cart
          </Button>
        </div>
        <p className="sales">Stock {product.totalStock}</p>
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    add: (item) => dispatch({ type: "ADD_ITEM", payload: { item: item } }),
  };
};
export default connect(null, mapDispatchToProps)(ItemCard);
