import { React, useState, useEffect } from "react";
import "../styles/pages/detail.scss";
import { useLocation } from "react-router";
import { Image, Title, Category, Price } from "../components/itemcard/index.js";
import { connect } from "react-redux";

function Detail(props) {
  const { state } = useLocation();
  const [currentStock, setCurrentStock] = useState(1);

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
              <button
                type="button"
                className="buy--btn"
                onClick={() => props.add(state.detail)}
              >
                ADD TO CART
              </button>
            </div>

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

const mapDispatchToProps = (dispatch) => {
  return {
    add: (item) => dispatch({ type: "ADD_ITEM", payload: { item: item } }),
  };
};
export default connect(null, mapDispatchToProps)(Detail);
