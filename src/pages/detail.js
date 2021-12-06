import { React, useState, useEffect } from "react";
import axios from "axios";
import "../styles/pages/detail.scss";
import {
  Button,
  Desc,
  Image,
  Title,
  Category,
  Price,
} from "../components/itemcard/index.js";

function Detail(props) {
  var id = props.match.params.id;
  //test
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/" + id)
      .then((res) => res.json())
      .then(
        (data) => {
          console.log(data);
          setProduct(data);
          setIsLoaded(true);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (product) {
    return (
      <>
        <div> {id}</div>

        <section className="product">
          <div className="Product-card">
            <div className="Product-image">
              <Image className="image" image={product.image} />
            </div>

            <div className="Product-text">
              <span className="Text-category">
                <Category category={product.category} />
              </span>
              <div className="Product-title">
                <Title title={product.title} />
              </div>
              <div className="Product-category">
                <div className="Text-price">
                  <Price price={product.price} />
                </div>
              </div>
              <button className="buy--btn">ADD TO CART</button>
              {/* <Button theme={"white"} click={() => props.add(props.save)}>
                Add to Chart
              </Button> */}
              <div className="Product-description">
                <h1>Product Detail</h1>
                <div className="description">{product.description}</div>
              </div>
            </div>
          </div>

          {/* <div className="product__photo">
            <div className="photo-container">
              <div className="photo-main">
                <Image className="image" image={product.image} />
              </div>
            </div>
          </div>
          <div className="product__info">
            <div className="title">
              <span>
                <Category category={product.category} />
              </span>
              <h1>{product.title}</h1>
            </div>
            <div className="price">
              <span>
                <Price price={product.price} />
              </span>
            </div>
            <div className="variant">
              <h3>SELECT A QUANTITY</h3>
            </div>
            <button className="buy--btn">ADD TO CART</button>
            <div className="description">
              <h3>DESKRIPSI</h3>
              <ul>(ISI)</ul>
            </div>
          </div> */}
        </section>
      </>
    );
  }
}

export default Detail;
