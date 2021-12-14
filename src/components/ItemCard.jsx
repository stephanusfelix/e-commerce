import { React, useState } from "react";
import "../styles/components/itemcard.scss";
import Button from "./itemcard/Button";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { addData } from "../redux/dataReducer";
import { useDispatch, useSelector } from "react-redux";
import { Desc, Image, Title, Category, Price } from "./itemcard/index.js";

const Navbar = (props) => {
  const product = props.product;
  const dispatch = useDispatch();
  const history = useHistory();
  const token = useState(true);

  function add(item) {
    //belum ditambah if else untuk cek apakah user sudah login
    const data = {
      id: item.id,
      countCart: 1,
      totalStock: item.totalStock,
      totalSales: 0,
    };
    dispatch(addData(data));
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
        {/* <ButtonGroup id={product.id} item={product} /> */}
        <div className="button-group">
          <Link to={{ pathname: `/${product.id}`, state: { detail: product } }}>
            <Button theme={"blue"}>Detail</Button>
          </Link>

          <Button
            theme={"white"}
            disable={product.totalStock > 0 ? false : true}
            click={() => add(product)}
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

export default Navbar;
