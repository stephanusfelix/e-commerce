import React from "react";
import "../styles/components/itemcard.scss";
import {
  ButtonGroup,
  Desc,
  Image,
  Title,
  Category,
  Price,
} from "./itemcard/index.js";
const Navbar = (props) => {
  const data = props.data;
  return (
    <>
      {/* <div style={style}> */}
      <div className="Product-card">
        <div className="Product-image">
          <Image className="image" image={data.image} />
        </div>

        <div className="Product-text">
          <div className="Product-title">
            <Title title={data.title} />
          </div>
          <div className="Product-category">
            <span className="Text-category">
              <Category category={data.category} />
            </span>
            <div className="Text-price">
              <Price price={data.price} />
            </div>
          </div>
        </div>
        <div className="Product-description">
          <Desc description={data.description} />
        </div>
        <ButtonGroup id={data.id} />
      </div>
    </>
  );
};

export default Navbar;
